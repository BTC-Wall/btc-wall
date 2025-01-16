
! function (e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function (t) {
                return e[t]
            }.bind(null, r));
        return a
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 37)
}({
    36: function (e, t) {
        function n(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function (e) {
                return typeof e
            } : e.exports = n = function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(t)
        }
        e.exports = n
    },
    37: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(36),
            r = n.n(a);
        ! function () {
            var e;
            if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
                var t = document.createElement("script");
                t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"), t.readyState ? t.onreadystatechange = function () {
                    "complete" != this.readyState && "loaded" != this.readyState || n()
                } : t.onload = n, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
            } else e = window.jQuery, i();

            function n() {
                e = window.jQuery.noConflict(!0), i()
            }

            function a(e) {
                var t = " " + document.cookie,
                    n = " " + e + "=",
                    a = null,
                    r = 0,
                    i = 0;
                return t.length > 0 && -1 != (r = t.indexOf(n)) && (r += n.length, -1 == (i = t.indexOf(";", r)) && (i = t.length), a = unescape(t.substring(r, i))), a
            }

            function i() {
                var t, n, i = (t = a("_locale") || void 0, n = !("object" != ("undefined" == typeof Intl ? "undefined" : r()(Intl)) || !Intl || "function" != typeof Intl.NumberFormat), {
                    toLocaleString: function (e, a) {
                        var r = Number(e);
                        if (isNaN(r)) return e;
                        var i, o = a && a.minDecimalPlaces,
                            c = a && a.maxDecimalPlaces;
                        return void 0 === o || void 0 === c ? (i = r, n ? i.toLocaleString(t) : i.toLocaleString()) : function (e, a, r) {
                            return n ? e.toLocaleString(t, {
                                minimumFractionDigits: a,
                                maximumFractionDigits: r
                            }) : e.toFixed(r)
                        }(r, o, c)
                    }
                });

                function o(e, t) {
                    var n = t;
                    t = Math.pow(10, t);
                    for (var a = ["K", "M", "B", "T"], r = a.length - 1; r >= 0; r--) {
                        var o = Math.pow(10, 3 * (r + 1));
                        if (o <= e) {
                            1e3 == (e = Math.round(e * t / o) / t) && r < a.length - 1 && (e = 1, r++), e = i.toLocaleString(Number(e), {
                                minDecimalPlaces: n,
                                maxDecimalPlaces: n
                            }), e += " " + a[r];
                            break
                        }
                    }
                    return e
                }

                function c(e, t) {
                    return "BTC" == t ? function (e) {
                        e = e >= 1e3 ? i.toLocaleString(Math.round(e)) : e >= 1 ? i.toLocaleString(e, {
                            minDecimalPlaces: 8,
                            maxDecimalPlaces: 8
                        }) : e < 1e-8 ? Number(e).toExponential(4) : i.toLocaleString(e, {
                            minDecimalPlaces: 8,
                            maxDecimalPlaces: 8
                        });
                        return e
                    }(e) : function (e) {
                        e = e >= 1 ? e >= 1e5 ? i.toLocaleString(Math.round(e)) : i.toLocaleString(e, {
                            minDecimalPlaces: 2,
                            maxDecimalPlaces: 2
                        }) : e < 1e-6 ? Number(e).toExponential(2) : i.toLocaleString(e, {
                            minDecimalPlaces: 6,
                            maxDecimalPlaces: 6
                        });
                        return e
                    }(e)
                }

                function s(e, t, n) {
                    var a = t,
                        r = {
                            btc: "Ð°Ñ‘Ñ—",
                            usd: "$",
                            eur: "Ð²â€šÂ¬",
                            cny: "Ð’Ò",
                            gbp: "Ð’Ðˆ",
                            cad: "$",
                            rub: "<img src='/static/img/fiat/ruble.gif'/>",
                            hkd: "$",
                            jpy: "Ð’Ò",
                            aud: "$",
                            brl: "R$",
                            inr: "Ð²â€šâ„–",
                            krw: "Ð²â€šÂ©",
                            mxn: "$",
                            idr: "Rp",
                            chf: "Fr"
                        };
                    return e.toLowerCase() in r && (a = r[e.toLowerCase()] + a), n && (a = a + ' <span style="font-size:12px">' + e.toUpperCase() + "</span>"), a
                }

                function l(e, t, n, a, r, l, p, u, d, m, f, g, y, h, x, v, b, w, S, _) {
                    var k = S ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" + S + ".png" : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" + e + ".png",
                        j = "#009e73";
                    m < 0 && (j = "#d94040"), m = i.toLocaleString(m, {
                        minDecimalPlaces: 2,
                        maxDecimalPlaces: 2
                    });
                    var C = h ? "(" + a + ")" : "",
                        P = p ? c(p, r) : "?",
                        L = m ? '<span style="color:' + j + '">(' + m + "%)" : "",
                        D = f ? o(f, 2) : "?",
                        z = g ? o(g, 2) : "?",
                        M = "zh" == _ ? "Ð·â€Â±CoinMarketCapÐ¸ÐŒÐˆÐµâ„–Ñ‘Ðµâ€˜â‚¬Ð·Ð‹Â°" : "Powered by CoinMarketCap",
                        N = "";
                
                    $('.exchange_now').html(p); 

                    u ? N = '<br><span style="font-size: 1px; color: rgba(39, 52, 64, 0.5)">' + (d ? c(d, u) : "?") + " " + u + " </span>" : N = "";
                    var F = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + e,
                        O = '<div style=""><span style=""><span class="n_extchange" data-extchage="'+p+'11" style="">$' + P + '</span><span style="margin-left:1px;">' + L + "</span>" + N + "</span>";
                    return O += function (e, t, n, a, r, i, o, c, l) {
                        var p = 0,
                            u = 0,
                            d = "",
                            m = "",
                            f = "",
                            g = "zh" == l ? "Ð´Ñ”Â¤Ð¶Â˜â€œÐ¹â€¡ÐÐ¿Ñ˜â‚¬24ÐµÂ°ÐÐ¶â€”Â¶Ð¿Ñ˜â€°" : "VOLUME";
                        if (e && p++, t && p++, n && p++, 0 == p) return "";
                        if (1 == p && (u = 100), 2 == p && (u = 49.8), 3 == p && (u = 33), e) {
                            var y = 0;
                            (n || t) && (y = 1), d = '                  <div style="text-align:center;float:left;width:' + u + "%;font-size:12px;padding:12px 0;border-right:" + y + 'px solid #e1e5ea;line-height:1em;">                      ' + ("zh" == l ? "Ð¶Ð‹â€™ÐµÑ’ÐŒ" : "RANK") + '                                            <span style="font-size: 18px; ">' + i + "</span>                 </div>"
                        }
                        n && (y = 0, t && (y = 1), m = '                  <div style="text-align:center;float:left;width:' + u + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + y + 'px solid #e1e5ea;line-height:1em;">                      ' + ("zh" == l ? "ÐµÑ‘â€šÐµÐ‚Ñ˜" : "MARKET CAP") + '                      <br><br>                      <span style="font-size: 16px; ">' + s(r, o, a) + "</span>                  </div>");
                        t && (f = '                  <div style="text-align:center;float:left;width:' + u + '%;font-size:12px;padding:12px 0 16px 0;line-height:1em;">                      ' + g + '                      <br><br>                      <span style="font-size: 16px; ">' + s(r, c, a) + "</span>                  </div>");
                        return '<div style="border-top: 1px solid #e1e5ea;clear:both;">' + d + m + f + "</div>"
                    }(x, v, b, w, l, y, D, z, _), O += '  </div>'
                }
                e(document).ready((function (e) {

                	function update_exchange(){
                    e(".coinmarketcap-currency-widget").each((function () {
                        var t = e(this).attr("data-currency"),
                            n = e(this).data("currencyid"),
                            a = e(this).attr("data-base").toUpperCase(),
                            r = e(this).attr("data-secondary"),
                            i = e(this).data("language");

                        i = i || "en-us", r = "BTC" == (r = r ? r.toUpperCase() : null) || "USD" == r ? r : null;
                        var o = e(this).attr("data-stats");
                        o = (o = o ? o.toUpperCase() : null) == a ? a : "USD";
                        var c, s = !1 !== e(this).data("ticker"),
                            p = !1 !== e(this).data("rank"),
                            u = !1 !== e(this).data("marketcap"),
                            d = !1 !== e(this).data("volume"),
                            m = !1 !== e(this).data("statsticker"),
                            f = this;
                        c = n ? "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=" + n + "&convert=BTC,USD," + a : "https://widgets.coinmarketcap.com/v1/ticker/" + t + "/?ref=widget&convert=" + a; 
                        e.get({
                            url: c,
                            success: function (c) {
                            	var exchange_now=parseFloat($('.exchange_now').html());
                                      
                                // Function to recalculate amounts
                                function recalculateAmounts() {
                                    var exchange_now = parseFloat($('.exchange_now').html());

                                    // Iterate through each .amount element and calculate its USD value
                                    $('.amount').each(function () {
                                        var amount = $(this).val(),
                                            usd = parseFloat(amount.replace(',', '.')) * exchange_now;

                                        // Find the corresponding .amount_usd element
                                        var amountUsdElement = $(this).next('.amount_usd');

                                        // If .amount_usd is not a direct sibling, check within the same parent
                                        if (amountUsdElement.length === 0) {
                                            amountUsdElement = $(this).closest('div').find('.amount_usd');
                                        }

                                        if (!isNaN(usd) && usd > 0) {
                                            amountUsdElement.html('&#8776; ' + usd.toFixed(2) + ' $ ').show();
                                        } else {
                                            amountUsdElement.html('$0.00').hide();
                                        }
                                    });        

                                    // Update Total Amount section
                                    updateTotalAmount();

                                    // Check and update the color of totalBTCAmount
                                    checkAndUpdateColor();
                                }

                                
                                // Make the function globally accessible
                                window.recalculateAmounts = recalculateAmounts;

                                // Function to format BTC values
                                function formatBTCValue(value) {
                                    if (!isNaN(value)) {
                                        const formatted = value.toFixed(8); // Limit to 8 decimal places
                                        const trimmed = parseFloat(formatted).toString(); // Remove unnecessary trailing zeros
                                        return trimmed;
                                    }
                                    return value;
                                }

                                // Function to update the Total Amount section
                                function updateTotalAmount() {
                                    var inputBTC = parseFloat($('#input_for_convert').val().replace(',', '.')) || 0;
                                    var txFeeBTC = parseFloat($('#txFee').val().replace(',', '.')) || 0;
                                    var donationBTC = parseFloat($('#developerDonation').val().replace(',', '.')) || 0;
                                    var exchange_now = parseFloat($('.exchange_now').html());
                                    var walletBalance = parseFloat($('#walletBalance').data('balance')) || 0;

                                    // Show or hide the totalAmount block based on input values
                                    if (inputBTC > 0 && txFeeBTC > 0) {
                                        $('#totalAmount').removeClass('hidden');

                                        // Calculate the total BTC amount
                                        var totalBTC = inputBTC + txFeeBTC + donationBTC;

                                        // Format the total BTC value and update the totalBTCAmount
                                        var formattedTotalBTC = formatBTCValue(totalBTC);
                                        $('#totalBTCAmount').text(formattedTotalBTC + ' BTC');

                                        // Calculate the total USD amount and update the display
                                        var totalUSD = totalBTC * exchange_now;
                                        $('#totalUSDAmount')
                                            .html('&#8776; ' + totalUSD.toFixed(2) + ' $')
                                            .show();

                                        // Check and update the color of totalBTCAmount
                                        checkAndUpdateColor();
                                    } else {
                                        $('#totalAmount').addClass('hidden');
                                    }
                                }

                                // Function to check and update the color of totalBTCAmount
                                function checkAndUpdateColor() {
                                    // Extract wallet balance from the text content of #walletBalance
                                    var walletBalanceText = $('#walletBalance').text().trim(); // Get the text
                                    var walletBalance = parseFloat(walletBalanceText.replace('BTC', '').trim()) || 0; // Remove "BTC" and convert to number

                                    // Get the totalBTC value
                                    var totalBTC = parseFloat($('#totalBTCAmount').text().replace('BTC', '').trim()) || 0;

                                    // Compare totalBTC with walletBalance and update color
                                    if (!isNaN(totalBTC) && !isNaN(walletBalance)) {
                                        if (totalBTC > walletBalance) {
                                            $('#totalBTCAmount').css('color', '#d9534f'); // Warning color
                                        } else {
                                            $('#totalBTCAmount').css('color', '#5cb85c'); // Success color
                                        }
                                    } else {
                                        console.error("Error: Invalid totalBTC or walletBalance values");
                                        console.log("Total BTC:", totalBTC, "Wallet Balance:", walletBalance);
                                    }
                                }

                                // Observer to monitor visibility changes of #walletSpend
                                var walletSpendObserver = new MutationObserver(function (mutations) {
                                    mutations.forEach(function (mutation) {
                                        if (
                                            mutation.target.id === 'walletSpend' &&
                                            !$(mutation.target).hasClass('hidden')
                                        ) {
                                            // If walletSpend becomes visible, wait 500ms and recalculate amounts
                                            setTimeout(recalculateAmounts, 500);
                                        }
                                    });
                                });

                                // Configure the observer
                                walletSpendObserver.observe(document.getElementById('walletSpend'), {
                                    attributes: true,
                                    attributeFilter: ['class'],
                                });

                                // Observer to monitor changes in walletBalance
                                var walletBalanceObserver = new MutationObserver(function (mutations) {
                                    mutations.forEach(function (mutation) {
                                        if (mutation.type === 'attributes' && mutation.attributeName === 'data-balance') {
                                            checkAndUpdateColor();
                                        }
                                    });
                                });

                                // Observer to monitor changes in totalBTCAmount
                                var totalBTCAmountObserver = new MutationObserver(function (mutations) {
                                    mutations.forEach(function (mutation) {
                                        if (mutation.type === 'childList') {
                                            checkAndUpdateColor();
                                        }
                                    });
                                });

                                // Attach observers
                                if (document.getElementById('walletBalance')) {
                                    walletBalanceObserver.observe(document.getElementById('walletBalance'), {
                                        attributes: true,
                                        attributeFilter: ['data-balance'],
                                    });
                                }

                                if (document.getElementById('totalBTCAmount')) {
                                    totalBTCAmountObserver.observe(document.getElementById('totalBTCAmount'), {
                                        childList: true,
                                    });
                                }

                                // Recalculate amounts when input changes in .amount fields
                                $('.amount').on('input', recalculateAmounts);

                                // Initialize the first calculation on page load
                                recalculateAmounts();
                                
                                /* Max Amount calculator*/
                               $("#maxAmount").click(function () {
                                    // Retrieve values from elements
                                    let walletBalance = parseFloat($("#walletBalance").text()) || 0;
                                    let txFee = parseFloat($("#txFee").val()) || 0;
                                    let developerDonation = parseFloat($("#developerDonation").val()) || 0;

                                    // Calculate the maximum transaction amount
                                    let maxTransactionAmount = walletBalance - txFee - developerDonation;

                                    // If maxTransactionAmount is negative or zero, set it to 0.00
                                    if (maxTransactionAmount <= 0) {
                                        $("#input_for_convert").val("0.00").trigger("change").trigger("keyup");
                                    } else {
                                        // Round to 8 decimal places and remove trailing zeros
                                        let roundedAmount = parseFloat(maxTransactionAmount.toFixed(8));
                                        $("#input_for_convert").val(roundedAmount).trigger("change").trigger("keyup");
                                    }

                                    // Trigger recalculation of related fields
                                    recalculateAmounts();
                                });
                                

                                // Function to check and update the value of #developerDonation
                                function checkDeveloperDonation() {
                                    // Get the current value of #developerDonation
                                    var developerDonationValue = parseFloat($('#developerDonation').val().replace(',', '.')) || 0;

                                    // Check if the value is less than 0.00015 or missing
                                    if (developerDonationValue < 0.00015) {
                                        // Set the value to 0.00015
                                        $('#developerDonation').val('0.00015');

                                        // Call recalculateAmounts to update calculations
                                        recalculateAmounts();
                                    }
                                }

                                // Call the function after the DOM is fully loaded
                                checkDeveloperDonation();
                                
                                var balance_btc = parseFloat($('#walletBalance').attr('data-balance')) || 0; // Default value 0
                                var exchange_now = typeof exchange_now !== 'undefined' && !isNaN(exchange_now) ? exchange_now : 1; // Default value 1

                                var balance_usd = balance_btc * exchange_now;

                                // Check balance_usd
                                if (isNaN(balance_usd) || balance_usd < 0) {
                                        balance_usd = 0; 
                                }

                                $('.balance_usd').html('<br> &#8776; ' + balance_usd.toFixed(2) + ' $ ');

                                if (c = c.length ? c[0] : c.data, t || (t = c[n].name.toLowerCase()), n) var g = c[n],
                                    y = parseFloat(g.quote[a].price),
                                    h = r && parseFloat(g.quote[r].price),
                                    x = parseInt(g.quote[a].market_cap),
                                    v = parseInt(g.quote[a].volume_24h),
                                    b = parseFloat(g.quote[a].percent_change_24h),
                                    w = c[n].name,
                                    S = c[n].symbol,
                                    _ = c[n].cmc_rank;
                                else {
                                    var k = "price_" + a.toLowerCase(),
                                        j = r ? "price_" + r.toLowerCase() : null,
                                        C = "market_cap_" + o.toLowerCase(),
                                        P = "24h_volume_" + o.toLowerCase();
                                    y = parseFloat(c[k]), h = j ? parseFloat(c[j]) : null, x = parseInt(c[C]), v = parseInt(c[P]), b = Number(c.percent_change_24h), w = c.name, S = c.symbol, _ = c.rank
                                }
                                var L = c[n].slug,
                                    D = l(t, w, L, S, a, o, y, r, h, b, x, v, _, s, p, d, u, m, n, i);
                                e(f).html(D), e(f).find("a").css({
                                    "text-decoration": "none",
                                    color: "#1070e0"
                                })
                            }
                        })
                    }))

                };//function
                update_exchange();
                setInterval(function(){
					update_exchange();
				},150*1000);

                }))
            }
        }()
    }
});