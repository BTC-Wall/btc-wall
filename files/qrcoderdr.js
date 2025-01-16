const videoElement = document.getElementById("video");
const qrReader = new QrScanner(
    videoElement,
    qrScanResultHandler,
    {
        // options
        highlightScanRegion: true,
    }
);

function getVideoId() {}
function isValidQRCode(qrCode) {
    let skipQRCodeValidation = true; // debug

    if (typeof skipQRCodeValidation !== "undefined") {
        return !!skipQRCodeValidation;
    } else {
        return qrCode.indexOf(":") > 0;
    }
}

function closeVideo() {
    hideVideoElement();
}

function decodeCode() {
    qrReader.start();
}

function hideVideoElement() {
    $("#qrvidBox").hide();
    $("#walletInfo").slideDown();
}

function parseAddress(input) {
    // РёСЃС…РѕРґРЅС‹Р№ Р°Р»РіРѕСЂРёС‚Рј Р±С‹Р» СЃ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµРј СЂРµРіСѓР»СЏСЂРЅС‹С… РІС‹СЂР°Р¶РµРЅРёР№
    // qrAddress.match(/[13][1-9A-HJ-NP-Za-km-z]{26,33}/g)
    // РѕСЃС‚Р°РЅРѕРІРёР»РёСЃСЊ РїРѕРєР° РЅР° СЏРІРЅРѕРј РїРѕРёСЃРєРµ РІС…РѕР¶РґРµРЅРёСЏ РїРѕРґСЃС‚СЂРѕРєРё "bitcoin:"
    const addressLabel = "bitcoin:";
    let output = input.split(addressLabel).join("");
    let addressMatch = output.match(/[0-9A-Za-z]{26,}/g);
    if (addressMatch !== null) {
        output = addressMatch[0];
    }
    return output;
}

function parseAmount(input) {
    // РёСЃС…РѕРґРЅС‹Р№ Р°Р»РіРѕСЂРёС‚Рј СЃ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµРј СЂРµРіСѓР»СЏСЂРЅС‹С… РІС‹СЂР°Р¶РµРЅРёР№
    // uriAmount = qrAddress.match(/=[0-9\.]+/g)
    // uriAmount[0].replace("=", "")
    let output = null;
    let amountMatch = input.match(/=[0-9\.]+/g);
    if (amountMatch !== null) {
        output = amountMatch[0].replace("=", "");
    }
    return output;
}

function setAddressAndAmount(address, amount) {
    const $addressElement = $("#txtAddress");
    const $amountElement = $("#txtAmount");
    const $amountElement2 = $("#input_for_convert");
    if (address != null) {
        $addressElement.val(address);
        if (amount != null) {
            $amountElement.val(amount);
            $amountElement2.val(amount);
        }
    }
}

function qrScanResultHandler(result) {
    console.log('DECODED QR CODE data: ' + result.data);

    if (result.data !== null) {
        let qrCodeString = decodeURIComponent(result.data);
        console.log("qrCodeString: " + qrCodeString);

        if (isValidQRCode(qrCodeString)) {
            let address = parseAddress(qrCodeString);
            let uriAmount = parseAmount(qrCodeString);
            setAddressAndAmount(address, uriAmount)
        }
    }

    qrReader.stop();
    hideVideoElement();
}

 if( $('#qrvideo').length ) {
    const html = `
                <button class="grvideo-close" title="Close">
                X
                </button>
                <style>
                    #qrvideo {
                        position: relative;
                        width: 300px;
                    }
                    .grvideo-close {
                        position: absolute;
                        top: 0;
                        right: 5px;
                        z-index: 2;
                        cursor: pointer;
                        font-size: 30px;
                        color: #000;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        background: transparent;
                        background-color: #ffffff;
                        transition: all .3s;
                    }
                    .grvideo-close:hover {
                        opacity: .7;
                        transition: all .3s;
                    }
                    .grvideo-close svg {
                      width: 22px;
                      height: 22px;
                    }
                </style>
                `;
    $('#qrvideo').prepend(html);

    $('body').on('click', '.grvideo-close', function() {
      $("#qrvidBox").hide();
      closeVideo();
      qrReader.stop();
    });
  }
