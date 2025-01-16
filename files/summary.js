document.addEventListener('DOMContentLoaded', () => {
    
    function observeContentChange(selector, callback) {
        const element = document.querySelector(selector);
        if (!element) {
            const observer = new MutationObserver(() => {
                const targetElement = document.querySelector(selector);
                if (targetElement) {
                    observer.disconnect(); // Отключаем наблюдателя
                    callback(targetElement);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        } else {
            const observer = new MutationObserver(() => {
                callback(element);
            });

            observer.observe(element, {
                characterData: true,
                subtree: true,
                childList: true,
            });
        }
    }

    async function fetchBitcoinData(address) {
        try {
            const walletUrl = `https://blockchain.info/address/${address}?format=json`;
            const tickerUrl = 'https://www.blockchain.com/ticker';

            const [walletResponse, tickerResponse] = await Promise.all([
                fetch(walletUrl),
                fetch(tickerUrl)
            ]);

            const walletData = await walletResponse.json();
            const tickerData = await tickerResponse.json();
            const btcToUsdRate = tickerData.USD.last;

            return { walletData, btcToUsdRate };
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function convertToBTC(satoshis) {
        return (satoshis / 100000000).toFixed(8);
    }

    function formatDate(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toISOString().replace('T', ' ').slice(0, 16);
    }

    function shortenHash(value) {
        if (value.length > 12) {
            return `${value.slice(0, 6)}...${value.slice(-6)}`;
        }
        return value;
    }

    function shortenAddress(value) {
        if (value.length > 20) {
            return `${value.slice(0, 10)}...${value.slice(-10)}`;
        }
        return value;
    }

    function copyToClipboardWithPopup(text, event) {
        navigator.clipboard.writeText(text).then(() => {
            const popup = document.createElement('div');
            popup.className = 'copy-popup';
            popup.textContent = 'Copied to clipboard!';
            document.body.appendChild(popup);

            const rect = event.target.getBoundingClientRect();
            popup.style.position = 'absolute';
            popup.style.top = `${rect.top + window.scrollY - 30}px`;
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.style.zIndex = '1000';
            popup.style.backgroundColor = '#333';
            popup.style.color = '#fff';
            popup.style.padding = '5px 10px';
            popup.style.borderRadius = '5px';
            popup.style.fontSize = '12px';

            const removePopup = () => {
                if (document.body.contains(popup)) {
                    document.body.removeChild(popup);
                }
                document.removeEventListener('mousemove', removePopup);
            };

            setTimeout(removePopup, 1000);
            document.addEventListener('mousemove', removePopup);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }

    function renderWalletSummary(walletData, btcToUsdRate) {
        const totalReceived = convertToBTC(walletData.total_received);
        const totalSent = convertToBTC(walletData.total_sent);

        const summaryHTML = `
            <div class="wallet-header">
                <h3>Total Received: ${totalReceived} BTC</h3>
                <h3>Total Sent: ${totalSent} BTC</h3>
                <br/>
                <button id="updateWalletInfo" class="btn btn-primary">Update Wallet Info</button>
            </div>
        `;

        let columnHeaders = '';
        let transactionHTML = '';

        if (walletData.txs && walletData.txs.length > 0) {
            columnHeaders = `
                <div class="transaction-columns">
                    <span class="column-item">Type</span>
                    <span class="column-item">Hash</span>
                    <span class="column-item">&nbsp;</span>
                    <span class="column-item">Time</span>
                    <span class="column-item">Amount</span>
                    <span class="column-item">&nbsp;</span>
                </div>
            `;

            transactionHTML = walletData.txs.sort((a, b) => b.time - a.time).map((tx) => {
                const isIncoming = tx.result > 0;
                const transactionAmountBTC = convertToBTC(tx.result);
                const transactionAmountUSD = (transactionAmountBTC * btcToUsdRate).toFixed(2);
                const feeBTC = convertToBTC(tx.fee);
                const feeUSD = (feeBTC * btcToUsdRate).toFixed(2);

                const inputs = tx.inputs.map((input) => {
                    const address = input.prev_out.addr || 'Unknown';
                    const valueBTC = convertToBTC(input.prev_out.value);
                    const valueUSD = (valueBTC * btcToUsdRate).toFixed(2);
                    return `<li>
                        <a href="https://www.blockchain.com/explorer/addresses/btc/${address}" target="_blank">${shortenAddress(address)}</a>
                        <img src="img/copy.png" class="copy-icon" data-copy="${address}" alt="Copy">
                        <div class="transaction-value">${valueBTC} BTC (${valueUSD} USD)</div>
                    </li>`;
                }).join('');

                const outputs = tx.out.map((output) => {
                    const address = output.addr || 'Unknown';
                    const valueBTC = convertToBTC(output.value);
                    const valueUSD = (valueBTC * btcToUsdRate).toFixed(2);
                    return `<li>
                        <a href="https://www.blockchain.com/explorer/addresses/btc/${address}" target="_blank">${shortenAddress(address)}</a>
                        <img src="img/copy.png" class="copy-icon" data-copy="${address}" alt="Copy">
                        <div class="transaction-value">${valueBTC} BTC (${valueUSD} USD)</div>
                    </li>`;
                }).join('');

                return `
                    <div class="transaction">
                        <div class="transaction-header">
                            <img src="img/${isIncoming ? 'in-icon.png' : 'out-icon.png'}" alt="${isIncoming ? 'Incoming' : 'Outgoing'}">
                            <a href="https://www.blockchain.com/explorer/transactions/btc/${tx.hash}" target="_blank">${shortenHash(tx.hash)}</a>
                            <img src="img/copy.png" class="copy-icon" data-copy="${tx.hash}" alt="Copy">
                            <span>${formatDate(tx.time)}</span>
                            <div>
                                ${transactionAmountBTC} BTC (${transactionAmountUSD} USD)<br>
                                Fee: ${feeBTC} BTC (${feeUSD} USD)
                            </div>
                            <button class="toggle-details" data-hash="${tx.hash}">&#9660;</button>
                        </div>
                        <div class="transaction-details" style="display: none;">
                            <div class="column">
                                <h4>Inputs</h4>
                                <ol>${inputs}</ol>
                            </div>
                            <div class="column">
                                <h4>Outputs</h4>
                                <ol>${outputs}</ol>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            columnHeaders = `
                <div class="transaction-columns>
                    <span class="column-item" style="margin:auto; padding: 15px; font-weight:600;">This wallet has no transactions yet.</span>
                </div>
            `;
        }

        document.getElementById('walletSummary').innerHTML = summaryHTML + columnHeaders + transactionHTML;

        document.querySelectorAll('.copy-icon').forEach((icon) => {
            icon.addEventListener('click', (event) => {
                const textToCopy = icon.dataset.copy;
                copyToClipboardWithPopup(textToCopy, event);
            });
        });

        document.getElementById('updateWalletInfo').addEventListener('click', updateWalletInfo);

        document.querySelectorAll('.toggle-details').forEach((button) => {
            button.addEventListener('click', () => {
                const details = button.parentElement.nextElementSibling;
                details.style.display = details.style.display === 'none' ? 'flex' : 'none';
            });
        });
    }

    async function updateWalletInfo() {
        const address = document.getElementById('walletAddress').textContent.trim();
        const { walletData, btcToUsdRate } = await fetchBitcoinData(address);
        renderWalletSummary(walletData, btcToUsdRate);
    }

    observeContentChange('#walletAddress', (element) => {
        if (element.textContent.trim()) {
            updateWalletInfo();
        }
    });
});