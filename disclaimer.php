<!DOCTYPE html>
<html lang="en">

<head>

    <title>Bitcoin Wallet - Disclaimer</title>

    <link rel="canonical" href="https://btc-wall.com/disclaimer">
    <meta name="keywords" content="Bitcoin wallet, BTC wallet, Bitcoin web wallet, Bitcoin browser wallet app">
    <meta name="description" content="Protect your funds! Please carefully review this guide to understand how to safeguard your assets and prevent potential losses due to theft or other risks while using your Bitcoin wallet.">

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
    <article class="main-content">
        <section class="s-dark">
            <div class="content-block">
                <h1>Disclaimer</h1>
                <p>
                    Protect your funds! Please carefully review this guide to understand how to safeguard your assets and prevent potential losses due to theft or other risks while using your Bitcoin wallet.
                </p>
                <h2>Key Security Guidelines</h2>
                <ol>
                    <li>
                        <strong>Backup Essentials:</strong> Always create a backup of your keystore file and store it securely alongside your private key. Losing these means permanent loss of wallet access, as recovery is not possible.
                    </li>
                    <li>
                        <strong>Keep Your Private Key Confidential:</strong> Your private key is your wallet’s lifeline—never share it with anyone.
                    </li>
                    <li>
                        <strong>Consider a Paper Wallet:</strong> As an added security measure, you may generate a paper wallet. However, remember to keep your private key strictly private and never disclose it under any circumstances.
                    </li>
                    <li>
                        <strong>Prevent Data Leaks:</strong> Ensure your device and browser are secure to avoid exposing sensitive information.
                    </li>
                </ol>
                <h2>Additional Information</h2>
                <ul>
                    <li>
                        <strong>No Account Creation Required:</strong> Our wallet operates without requiring you to create an account or transfer funds to us. It is designed to store all critical data on your device to maximize security. The wallet serves solely as a bridge to interact with the blockchain.
                    </li>
                    <li>
                        <strong>Security Limitations:</strong> While the wallet has been rigorously tested and successfully used by thousands globally, unforeseen events might still occur, potentially resulting in fund loss. We cannot be held liable for such situations.
                    </li>
                </ul>
                <h2>What else you need to know</h2>
                <p>
                    <strong>
                        The wallet is provided "as is" without any guarantees or warranties, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. Under no circumstances shall the authors or copyright holders be responsible for any claims, damages, or liabilities arising from the use or inability to use the wallet or related services.
                    </strong>
                </p>
            </div>
        </section>
    </article>           
    <div id="walletSpend" style="display:none;">                                                 
        <input type="text" class="form-control amount" 
        id="input_for_convert" data-original-title=""
        title="" placeholder="0.00">
        <span id="maxAmount">MAX</span>                                                                                  
        <input type="text" class="form-control amount" value="0.000000" 
        id="txFee" data-original-title="" title="">                                                                          
        <input type="text" class="form-control amount" value="0.00015" 
        id="developerDonation" data-original-title="" title="">                              
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
    <script type="text/javascript" src="files/js20.js"></script>
    <script>
        var exchange_now = 0;
    </script>
    <script src="files/js16.js"></script>
    <script type="text/javascript" src="files/js4.js"></script>
    <script type="text/javascript" src="files/js3.js"></script>  
</body>
</html>