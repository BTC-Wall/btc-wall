
var get_hash;

function remove_accents (str) {
    return str.replace(/[^\u0000-\u007E]/g, function(a){ 
       return diacriticsMap[a] || a; 
    });
} 

var CJK_INTERVALS = [
    [0x4E00, 0x9FFF, 'CJK Unified Ideographs'],
    [0x3400, 0x4DBF, 'CJK Unified Ideographs Extension A'],
    [0x20000, 0x2A6DF, 'CJK Unified Ideographs Extension B'],
    [0x2A700, 0x2B73F, 'CJK Unified Ideographs Extension C'],
    [0x2B740, 0x2B81F, 'CJK Unified Ideographs Extension D'],
    [0xF900, 0xFAFF, 'CJK Compatibility Ideographs'],
    [0x2F800, 0x2FA1D, 'CJK Compatibility Ideographs Supplement'],
    [0x3190, 0x319F , 'Kanbun'],
    [0x2E80, 0x2EFF, 'CJK Radicals Supplement'],
    [0x2F00, 0x2FDF, 'CJK Radicals'],
    [0x31C0, 0x31EF, 'CJK Strokes'],
    [0x2FF0, 0x2FFF, 'Ideographic Description Characters'],
    [0xE0100, 0xE01EF, 'Variation Selectors Supplement'],
    [0x3100, 0x312F, 'Bopomofo'],
    [0x31A0, 0x31BF, 'Bopomofo Extended'],
    [0xFF00, 0xFFEF, 'Halfwidth and Fullwidth Forms'],
    [0x3040, 0x309F, 'Hiragana'],
    [0x30A0, 0x30FF, 'Katakana'],
    [0x31F0, 0x31FF, 'Katakana Phonetic Extensions'],
    [0x1B000, 0x1B0FF, 'Kana Supplement'],
    [0xAC00, 0xD7AF, 'Hangul Syllables'],
    [0x1100, 0x11FF, 'Hangul Jamo'],
    [0xA960, 0xA97F, 'Hangul Jamo Extended A'],
    [0xD7B0, 0xD7FF, 'Hangul Jamo Extended B'],
    [0x3130, 0x318F, 'Hangul Compatibility Jamo'],
    [0xA4D0, 0xA4FF, 'Lisu'],
    [0x16F00, 0x16F9F, 'Miao'],
    [0xA000, 0xA48F, 'Yi Syllables'],
    [0xA490, 0xA4CF, 'Yi Radicals'],
];


function is_cjk(c)
{
    n = c.charCodeAt(0);
    for(j = 0; j < CJK_INTERVALS.length; j++)
  {
        if(n>=CJK_INTERVALS[j][0] && n<=CJK_INTERVALS[j][1])
    {
      return true;
    }
  }
    return false;
}

function seed_normalize_text(seed)
{
    if(seed == "")
    {
        return seed;
    }
    var normalized_seed = seed.normalize('NFKD');
    normalized_seed = normalized_seed.toLowerCase();

    normalized_seed = remove_accents(normalized_seed);
    normalized_seed = normalized_seed.trim().replace(/ {2,}/, ' ');
  var final_seed = "";
  for(i = 0; i < normalized_seed.length; i++)
  {
    if(normalized_seed[i] == ' ')
    {
      if(is_cjk(normalized_seed[i-1]) && is_cjk(normalized_seed[i+1]))
      {
        
      }
      else
      {
        final_seed += normalized_seed[i];
      }
    }
    else
    {
      final_seed += normalized_seed[i];
    }
  }
    return final_seed;
}
function randrange(min, max) {
    var range = max - min;
    if (range <= 0) {
        throw new Exception('max must be larger than min');
    }
    var requestBytes = Math.ceil(Math.log2(range) / 8);
    if (!requestBytes) { // No randomness required
        return min;
    }
    var maxNum = Math.pow(256, requestBytes);
    var ar = new Uint8Array(requestBytes);

    while (true) {
        window.crypto.getRandomValues(ar);

        var val = 0;
        for (var i = 0;i < requestBytes;i++) {
            val = (val << 8) + ar[i];
        }

        if (val < maxNum - maxNum % range) {
            return min + (val % range);
        }
    }
}

levensteinDistance = function(a, b){
      if(a.length == 0) return b.length; 
      if(b.length == 0) return a.length; 

      var matrix = [];

      var i;
      for(i = 0; i <= b.length; i++){
        matrix[i] = [i];
      }

      var j;
      for(j = 0; j <= a.length; j++){
        matrix[0][j] = j;
      }

      // Fill in the rest of the matrix
      for(i = 1; i <= b.length; i++){
        for(j = 1; j <= a.length; j++){
          if(b.charAt(i-1) == a.charAt(j-1)){
            matrix[i][j] = matrix[i-1][j-1];
          } else {
            matrix[i][j] = Math.min(matrix[i-1][j-1] + 1,
                                    Math.min(matrix[i][j-1] + 1,
                                             matrix[i-1][j] + 1));
          }
        }
      }

      return matrix[b.length][a.length];
};

function verify_bip39(seed){
    var words = seed.trim().split(" ").map( word => {
        return seed_words_english.indexOf(word);
    });
    
    var i;
    for(i = 0; i < words.length; i++)
    {
        if(!seed_words_english.includes(words[i])){
            //invalid seed
            $("#seed_error").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Wrong Seed');
            $("#seed_error").show();
            return false;
        }
    }
    
    if(words.length != 12 && words.length != 24){
        $("#seed_error").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Wrong Seed');
        $("#seed_error").show();
        return false;
    }

    var csLen = words.length/3;
    var payloadLen = words.length*11 - csLen;
    
    var arr = new Uint8Array(payloadLen/8);
    for(let i = 0; i < arr.length; i++){
        let startWord = Math.floor(i*8/11);
        let startPos = i*8 % 11;
        let endWord = Math.floor((i+1)*8/11);
        let endPos = (i+1)*8 % 11;
        arr[i] = (words[startWord] << (startPos-3)) | (words[endWord] >> (11-endPos));
    }

    // checksum check
    var ccs = words[words.length-1] & (Math.pow(2,csLen-1));
    return window.crypto.subtle.digest({name: "SHA-256"}, arr).then(function (hash) {
        var h = new Uint8Array(hash);
        var cs = h[0] >> (8 - csLen);
        if(cs == ccs){
            return true;
        }else{
            return false;
        }
    });
}

function fix_bip39(seed){
    var words = seed.trim().split(" ").map( word => {
        let ind = seed_words_english.indexOf(word);
        if(ind == -1){
            ind = 0;
            let distance = Infinity;
            for (let i = 0; i < seed_words_english.length; i++) {
                let curDistance = levensteinDistance(word, seed_words_english[i]);
                if(curDistance < distance){
                    distance = curDistance;
                    ind = i;
                }
            }
        }
        return ind;
    });     

    if(words.length % 3 != 0)
    {
        return false;
    }

    var csLen = words.length/3;
    var payloadLen = words.length*11 - csLen;

    var arr = new Uint8Array(payloadLen/8);
    for(let i = 0; i < arr.length; i++){
        let startWord = Math.floor(i*8/11);
        let startPos = i*8 % 11;
        let endWord = Math.floor((i+1)*8/11);
        let endPos = (i+1)*8 % 11;
        arr[i] = (words[startWord] << (startPos-3)) | (words[endWord] >> (11-endPos));
    }

    var ccs = words[words.length-1] & (Math.pow(2,csLen-1));
    return window.crypto.subtle.digest({name: "SHA-256"}, arr).then(function (hash) {
        var h = new Uint8Array(hash);
        var cs = h[0] >> (8 - csLen);
        words[words.length-1] = words[words.length-1] - ccs + cs;
        var newseed = words.map( w => { return seed_words_english[w]; }).join(" ");
        return newseed;
    });
}

function check_seed_hash(prefix){
    return function(hash){
        return hash.startsWith(prefix);
    };
}

var seed_formats = [
    {
        name: "Standard",
        verify_hash: check_seed_hash("01")
    },
    {
        name: "SegWit",
        verify_hash: check_seed_hash("100")
    },
    {
        name: "BIP-39",
        verify_bip39: verify_bip39,
    }
]


var seed_standard_prefix = "01";
var seed_segwit_prefix = "100";

var seed_enc = new TextEncoder("utf-8");
var seed_key;

window.crypto.subtle.importKey(
    "raw", seed_enc.encode("Seed version"), { name: "HMAC", hash: {name: "SHA-512"} }, false, ["sign", "verify"]
).then( k => {
    seed_key = k;
});
function seed_gethash(str){
    return window.crypto.subtle.sign("HMAC", seed_key, seed_enc.encode(str)).then(signature => {
        var b = new Uint8Array(signature);
        var hash = Array.prototype.map.call(b, x => ('00'+x.toString(16)).slice(-2)).join("")
        return {str: str, hash: hash};
    });
}

var bitamp_seed_type = '';

function check_seed_type(seed){
    return seed_gethash(seed).then(seed_hash => 
    {
        var final_seed_type = "";
        seed_formats.some( format => {
            if("verify_hash" in format)
            {
                let isvalid = format.verify_hash(seed_hash.hash);
                if(isvalid)
                {
                    final_seed_type = format.name;
                    return true;
                }
            }
            else if("verify_bip39" in format)
            {
                if(format.verify_bip39(seed_hash.str))
                {
                    final_seed_type = format.name;
                    return true;
                }
            }
        });
        if(final_seed_type == "")
        {
            if(bitcoinjs.bip39.validateMnemonic(seed))
            {
                final_seed_type = "bip39";
            }
            else
            {
                final_seed_type = "Unknown";
            }
        }
        bitamp_seed_type = final_seed_type;
        return final_seed_type;
    });
}
var account_address_type=[],
    account_bip39_number=[];

var pubkey_a=[];
    
function mnemonic_to_seed(mnemonic, passphrase='')
{  
        return check_seed_type(mnemonic).then(seed_type_temp => 
        {
            try
            { 
                if(seed_type_temp == "Unknown")
                {
                    return false;
                }


                seed_type = seed_type_temp;
                
                reserved_data_PBKDF2_ROUNDS = 2048;
                reserved_data_final_mnemonic = seed_normalize_text(mnemonic);
                reserved_data_final_passphrase = 'electrum' + seed_normalize_text(passphrase);
                reserved_data_final_passphrase_bip39 = 'mnemonic' + seed_normalize_text(passphrase);
               
                reserved_data_seed_output = CryptoJS.PBKDF2(reserved_data_final_mnemonic, reserved_data_final_passphrase.toString('binary'), { hasher: CryptoJS.algo.SHA512, keySize: 512/32, iterations: reserved_data_PBKDF2_ROUNDS }).toString();
                reserved_data_seed_output_bip39 = CryptoJS.PBKDF2(reserved_data_final_mnemonic, reserved_data_final_passphrase_bip39.toString('binary'), { hasher: CryptoJS.algo.SHA512, keySize: 512/32, iterations: reserved_data_PBKDF2_ROUNDS }).toString();
        

                reserved_data_root = bitcoinjs.bip32.fromSeed(bitcoinjs.Buffer.from(reserved_data_seed_output, 'hex'));
                reserved_data_root_bip39 = bitcoinjs.bip32.fromSeed(bitcoinjs.Buffer.from(reserved_data_seed_output_bip39, 'hex'));



                account_keys_legacy = [];
                account_keys_segwit = [];
                account_keys_p2sh = [];

                account_keys_legacy_change = [];
                account_keys_segwit_change = [];
                account_keys_p2sh_change = [];
                
                account_keys_new = [];
               
                var final_session_id = '';
                account_session_id = null;
                
                if(seed_type == "bip39")
                {
                    total_bip39_accounts = 1;
                }
                
                //standard 
                for(d = 0; d < 20; d++)
                {
                    if(seed_type == "bip39")
                    {
                        child = reserved_data_root_bip39.derivePath("m/44'/0'/0'/0/" + d.toString());
                    }
                    else
                    {
                        child = reserved_data_root.derivePath('m/0/' + d.toString());
                    }
                    wif = child.toWIF();
                    public_addr = bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).address;
                    account_keys_legacy.push({"private": wif, "public": public_addr});
                    account_address_type[public_addr] = 0;
                    pubkey_a[public_addr]=bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).output;
                    if(seed_type == "bip39")
                {
                    account_bip39_number[public_addr] = total_bip39_accounts;
                }
                    account_keys_new.push({"private": wif, "public": public_addr});
                    if(d == 0 || d == 1)
                    {
                        if(d==1)
                        {
                            final_session_id += ":";
                            
                        }else{
                            get_hash=public_addr;
                        }
                        final_session_id += public_addr;

                    }
                }
                
                //standard change
                for(d = 0; d < 6; d++)
                {
                    if(seed_type == "bip39")
                    {
                        child = reserved_data_root_bip39.derivePath("m/44'/0'/0'/1/" + d.toString());
                    }
                    else
                    {
                        child = reserved_data_root.derivePath('m/1/' + d.toString());
                    }
                   
                    wif = child.toWIF();
                    public_addr = bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).address;
                    account_keys_legacy_change.push({"private": wif, "public": public_addr});
                    account_address_type[public_addr] = 3;
                    pubkey_a[public_addr]=bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).output;
                    if(seed_type == "bip39")
                {
                    account_bip39_number[public_addr] = total_bip39_accounts;
                }
                    account_keys_new.push({"private": wif, "public": public_addr});
                }
                
                //segwit
                for(d = 0; d < 20; d++)
                {
                    if(seed_type == "bip39")
                    {
                        child = reserved_data_root_bip39.derivePath("m/84'/0'/0'/0/" + d.toString());
                    }
                    else
                    {
                        child = reserved_data_root.derivePath("m/0'/0/" + d.toString());
                    }
                    wif = child.toWIF();
                    public_addr = bitcoinjs.payments.p2wpkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).address;
                    account_keys_segwit.push({"private": wif, "public": public_addr});
                    account_address_type[public_addr] = 1;
                    pubkey_a[public_addr]=bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).output;
                    if(seed_type == "bip39")
                {
                    account_bip39_number[public_addr] = total_bip39_accounts;
                }
                    account_keys_new.push({"private": wif, "public": public_addr});
                    if(d == 0 || d == 1)
                    {
                        final_session_id += ":" + public_addr;
                    }
                }
                
                //segwit change
                
                for(d = 0; d < 6; d++)
                {
                    if(seed_type == "bip39")
                    {
                        child = reserved_data_root_bip39.derivePath("m/84'/0'/0'/1/" + d.toString());
                    }
                    else
                    {
                        child = reserved_data_root.derivePath("m/0'/1/" + d.toString());
                    }
                    
                    wif = child.toWIF();
                    public_addr = bitcoinjs.payments.p2wpkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).address;
                    account_keys_segwit_change.push({"private": wif, "public": public_addr});
                    account_address_type[public_addr] = 4;
                    pubkey_a[public_addr]=bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).output;
                    if(seed_type == "bip39")
                {
                    account_bip39_number[public_addr] = total_bip39_accounts;
                }
                    account_keys_new.push({"private": wif, "public": public_addr});
                }
                
                //p2sh
                
                for(d = 0; d < 20; d++)
                {
                    child = reserved_data_root_bip39.derivePath("m/49'/0'/0'/0/" + d.toString());
                    wif = child.toWIF();
                    public_addr = bitcoinjs.payments.p2sh({  redeem: bitcoinjs.payments.p2wpkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }) }).address;
                    account_keys_p2sh.push({"private": wif, "public": public_addr});
                    account_address_type[public_addr] = 2;
                    pubkey_a[public_addr]=bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).output;
                    if(seed_type == "bip39")
                {
                    account_bip39_number[public_addr] = total_bip39_accounts;
                }
                    account_keys_new.push({"private": wif, "public": public_addr});
                    
                    if(d == 0 || d == 1)
                    {
                        final_session_id += ":" + public_addr;
                    }
                }
                
                //p2sh change
                for(d = 0; d < 6; d++)
                {
                    child = reserved_data_root_bip39.derivePath("m/49'/0'/0'/1/" + d.toString());
                    wif = child.toWIF();
                    public_addr = bitcoinjs.payments.p2sh({ redeem: bitcoinjs.payments.p2wpkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }) }).address;
                    account_keys_p2sh_change.push({"private": wif, "public": public_addr});
                    account_address_type[public_addr] = 5;
                    pubkey_a[public_addr]=bitcoinjs.payments.p2pkh({ pubkey: child.publicKey, network: bitcoinjs.networks.bitcoin }).output;
                    if(seed_type == "bip39")
                {
                    account_bip39_number[public_addr] = total_bip39_accounts;
                }
                    account_keys_new.push({"private": wif, "public": public_addr});
                }

                temp_account_session_id = final_session_id;

            }
            catch(e)
            {
                console.log(e);
                return false;
            }
            
                
                return true;
        });
}