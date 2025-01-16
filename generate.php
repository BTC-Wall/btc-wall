<!DOCTYPE html>
<html lang="en">

<head>

    <title>Bitcoin Wallet | Bitcon Wallet - Generate Wallet</title>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="keywords" content="create bitcoin wallet, create btc wallet, create segwit wallet, create bech32 wallet, create legacy wallet, generate bitcoin wallet, create bitcoin wallet, online bitcoin wallet, open bitcoin wallet, btc wallet, anonymous bitcoin wallet, hot bitcoin wallet, free bitcoin wallet">
    <meta name="description" content="Generate your Bitcoin (BTC) wallet with just one step. SegWit, Bech32 and Legacy addresses are available.">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="files/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="files/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" href="files/style_002.css" media="screen">
    <link rel="stylesheet" href="files/interface.css" media="screen">

    <link rel="stylesheet" href="files/style.css">
    <link rel="stylesheet" href="files/fonts.css">

    <script type="text/javascript" src="files/jquery.min.js"></script>
    
    <!-- Styles -->    
    <link href="css/all-styles.css" rel="stylesheet">
    <link href = "fonts/titilliumweb/stylesheet.css" rel = "stylesheet" type = "text/css" />
                        
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
    <link rel="shortcut icon" href="favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <link rel="manifest" href="favicon/site.webmanifest" />
            
    <!-- Megamenu -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link href="megamenu/css/ionicons.min.css" rel="stylesheet">
    <link href="megamenu/css/megamenu.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300" rel="stylesheet" type="text/css">
    
    <!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>-->
    <script>
        window.jQuery || document.write('<script src="megamenu/js/vendor/jquery-1.12.0.min.js"><\/script>')
    </script>
    <script src="megamenu/js/megamenu.js"></script>  
            
    <!-- JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <script>
        window.Modernizr || document.write('<script src="megamenu/js/vendor/modernizr-2.8.3.min.js"><\/script>')
    </script>
    <style>
        body {
            margin: 0;
        }
    </style>
    
    <link rel="preload" as="image" href="files/img/in-icon.png">   
    <link rel="preload" as="image" href="files/img/out-icon.png">  
</head>

<body>
	<?php 
        include 'templates/header.php';
    ?>
    <div id="wrap">
        <div id="content" class="container">
            <noscript class="alert alert-danger center-block">
                <span class="glyphicon glyphicon-exclamation-sign"></span>  
            </noscript>
            <div class="tab-pane tab-content" id="wallet">
                <div class="row">
                    <div class="col-md-12">
                        <!-- <center><h1>bitcoin wallet</h1></center> -->
                        <div id="openLogin">
                            <form class="form-signin" role="form" action="javascript:;">                                
                                <div class="block-first col-12">
                                    <ul class="block-first__form-list def-list-zero">
                                        <li class="block-first__form-item active">
                                            <center>
                                                <div style="color:red;" id="register_label">
                                                    <p><b>Pay attention!</b></p>
                                                    <p>Copy the mnemonic phrase and keep it in a safe place!</p>
                                                    <p>Without it, you will not be able to access your wallet and use your funds.</p>
                                                </div>
                                            </center>
                                            <br>
                                            <div class="field__wrapper field__wrapper--buttons" id="seed_form">
                                                <textarea class="form__textarea create-wallet-your-seed" id="create-wallet-your-seed"
                                                name="create-wallet-your-seed"
                                                readonly="readonly">market parent day record
                                                    figure copy ranch abstract
                                                    coast siege outside
                                                    unveil</textarea>
                                            </div>
                                            <div class="field__row">
                                                <center>
                                                    <div class="Generate_btn" style="text-align: right;">
                                                        <!-- <button type="button" id="gen_seed_text" class="field__button field__button--plant">Generate</button> -->
                                                        <button type="button" id="gen_seed_text">Generate</button>
                                                    </div>
                                                </center>
                                            </div>						
                                            <div style="display: none;">
						<a href="javascript:;" class="optionsCollapse"><div class="well well-sm"><span class="glyphicon glyphicon-collapse-down" id="glyphcollapse"></span> Options</div></a>
						<div class="hidden optionsAdvanced">
                                                    <label>SegWit Address</label>
                                                    <p class="checkbox">
							<label><input type="checkbox" id="walletSegwit" class="checkbox-inline" checked="checked" data-original-title="" title=""> Segwit address (regular). <span class="text-muted"><i>(recommended)</i></span></label> <br>
							<label><input type="radio" id="walletSegwitp2sh" class="walletSegwitType" name="walletSegWitType" value="p2sh" checked="checked" data-original-title="" title=""> p2sh address</label> <br>
							<label><input type="radio" id="walletSegwitBech32" class="walletSegwitType" name="walletSegWitType" value="bech32" data-original-title="" title=""> bech32 address</label>
                                                    </p>
                                                    <label>RBF</label>
                                                    <p class="checkbox">
                                                        <label><input type="checkbox" id="walletRBF" class="checkbox-inline" checked="checked" data-original-title="" title=""> Enable RBF. <span class="text-muted"><i>(recommended)</i></span></label>
                                                    </p>
                                                </div>
                                            </div>																																
                                            <br>
                                            <div id="seed_error" class="alert alert-danger" style="display: none;"></div>
                                            <div class="block-first__buttons">
                                                <button class="block-first__button btn-active" id="openBtn">Create Wallet</button>
                                            </div>
                                            <br>
                                            <br>
                                        </li>
                                    </ul>
                                </div>    
                            </form>
                        </div>
                        <div id="openWallet" class="hidden">
                            <div class="wallet-inner">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p><span style="float:right;"><a href="index.php" id="walletLogout1"><span class="glyphicon glyphicon-log-out"></span>                                            <small>Logout</small></a>
                                            </span>
                                        </p>
                                    </div>
                                    <br>
                                    
                                    <div class="col-md-3 interface-menu" align="left">
                                        <ul class="nav nav-pills interface-nav" role="tablist">
                                            <li role="presentation"><a href="javascript:;"
                                                id="walletShowSpend"><b>Send</b></a></li>
                                            <li role="presentation"><a href="javascript:;"
                                                    id="walletShowKeys"><b>Seed/Key</b></a></li>
                                            <li role="presentation"><a id="walletShowSummary" href="javascript:;"><b>Summary</b></a></li>
                                            <li role="presentation"><a id="walletHistory" href="javascript:;"
                                                    target="_blank"><b>Explorer</b></a></li>                                                                                                                                        
                                            </ul>
                                    </div>
                                    <div class="col-md-9 interface-dashboard" align="center">
                                        <a href="javascript:;" id="walletBalance" style="color: #0381B3; font-size:32px ;"
                                        data-balance="0">0.00 BTC</a>
                                        <span class="balance_usd" style="color: #a9a5a5; font-size:15px ;"><br> ≈ 0.00 $ </span>                                       
                                        <!-- <Font color=a9a5a5>	 &#8776; 0 $ </font> -->
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

                                        <div class="variable-data-block">
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
                                                    <div class="form-inline output"></div>
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
                                                                <video id="video" width="300" height="300" style="border: 1px solid gray"
                                                                disablepictureinpicture=""></video>
                                                                <div style="position: absolute; display: none; pointer-events: none;" class="scan-region-highlight">
                                                                    <svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none"
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
                                            <font color="a9a5a5" size="1">	 QR-code of bitcoin address </font>
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
                            <p>Do you want to send <span id="spendAmount">0.00</span>BTC ?</p>
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

            <div class="exchange_now" style="display: none;"></div>
            <script type="text/javascript" src="files/jquery-1.9.1.min.js"></script>
            <script type="text/javascript" src="files/moment.min.js"></script>
            <script type="text/javascript" src="files/transition.js"></script>
            <script type="text/javascript" src="files/collapse.js"></script>

            <script src="files/bitcoin.js"></script>
            <script src="files/cryptoJs.js"></script>
            <script src="files/main.js"></script>
            <script src="files/gen.js"></script>
            <script>
                var exchange_now = 0;
            </script>
            <script src="files/extchange.js"></script>

            <script src="files/qr-scanner.umd.min.js"></script>
            <script src="files/qrcoderdr.js"></script>
            <script src="files/custom.js"></script>

            <script type="text/javascript" src="files/bootstrap.min.js"></script>
            <script type="text/javascript" src="files/bootstrap-datetimepicker.min.js"></script>

            <script type="text/javascript" src="files/crypto-min.js"></script>
            <script type="text/javascript" src="files/crypto-sha256.js"></script>
            <script type="text/javascript" src="files/crypto-sha256-hmac.js"></script>
            <script type="text/javascript" src="files/sha512.js"></script>
            <script type="text/javascript" src="files/ripemd160.js"></script>
            <script type="text/javascript" src="files/aes.js"></script>

            <script type="text/javascript" src="files/qrcode.js"></script>
            <script type="text/javascript" src="files/qcode-decoder.min.js"></script>
            <script type="text/javascript" src="files/jsbn.js"></script>
            <script type="text/javascript" src="files/ellipticcurve.js"></script>

            <script type="text/javascript" src="files/coin.js"></script>
            <script type="text/javascript" src="files/coinbin.js"></script>

            <script type="text/javascript" src="files/delete-point.js"></script>
            <script type="text/javascript" src="files/fee.js"></script>
            <script type="text/javascript" src="files/forms.js"></script>
            <script type="text/javascript" src="files/summary.js"></script>

            <div class="hidden" id="entropybucket">d60d126e30a82da52e98319a349f40a15599658d776975676dc4595d5f56f24908647e8245b7b042a606c5c2b936ba39bf48c381c184dc94f7a079de9cf5ae04</div>
        </div>
    </div>
    <?php 
        include 'templates/footer.php';
    ?>
    <noscript>
        <div>
            <h1>Looks like you have Javascript disabled.</h1>
            <p>The wallet needs Javascript to work properly.</p>
            <h3>Please enable Javascript to get the best out of btc-wall.com</h3>
        </div>
    </noscript>                        
</body>

</html>