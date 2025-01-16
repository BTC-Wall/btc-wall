<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Bitcoin wallet | BTC web wallet</title>
        <link rel="canonical" href="https://btc-wall.com">
        <meta name="keywords" content="Bitcoin wallet, BTC wallet, Bitcoin web wallet, Bitcoin browser wallet app">
        <meta name="description" content="Our non-custodial Bitcoin web wallet ensures your funds are always accessible, private, and protected. Your keys - your Bitcoins.">
        
        <meta name="viewport" content="width=device-width, initial-scale=1">                                       
        <link rel="preload" as="image" href="megamenu/src/btc-black.png">
        <link rel="preload" as="image" href="megamenu/src/help-black.png">
        <link rel="preload" as="image" href="img/unlock.gif">        
        
        <!-- Styles -->    
        <link href="css/vendors.11f133cd.css" rel="stylesheet">
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
    </head>
    <body>    
			<?php 
                include 'templates/header.php';
            ?>
            <article class="main-content">
                <section class="main-screen">
                    <div class="main-screen-content">
                        <div class="main-screen-logo-container">
                            <img src="img/main-logo.png" alt="Bicoin wallet logo" class="main-logo"></img>
                        </div>
                        <div class="main-screen-greeting">
                            <h1>Bitcoin Wallet</h1>
                            <h2>Manage Bitcoin Simply and Securely</h2>
                            <p>Experience a decentralized, free, user-friendly BTC wallet for seamless Bitcoin transactions. Our non-custodial Bitcoin web wallet ensures your funds are always accessible, private, and protected. Your keys - your Bitcoins.</p>
                        </div>
                        <div class="main-screen-buttons">
                            <a class="button generate-wallet" href="generate.php">
                                <img src="img/generate-wallet-btn.png" alt="Generate wallet button"></img>
                                <span>Generate&nbsp;Wallet</span>
                            </a>
                            <a class="button open-wallet" href="open.php">
                                <img src="img/open-wallet-btn.png" alt="Open wallet button"></img>
                                <span>Open&nbsp;Wallet</span>
                            </a>
                        </div>
                        <div class="main-screen-features">
                            <div class="non-custodial">Non-custodial</div>
                            <div class="secure">Secure</div>
                            <div class="fast">Fast and clear</div>
                        </div>                    
                    </div>
                </section>   
            </article>           
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
            
            <script src="js/custom.js"></script>
            
            <!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>-->
            <script>
                window.jQuery || document.write('<script src="megamenu/js/vendor/jquery-1.12.0.min.js"><\/script>')
            </script><script src="megamenu/js/vendor/jquery-1.12.0.min.js"></script>
            <script src="megamenu/js/megamenu.js"></script>
            
                    <script>
            var exchange_now = 0;
            </script>
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
            <script src="files/custom_open.js"></script>

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
    </body>
</html>