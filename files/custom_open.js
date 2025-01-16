function copy_field(e)
{
    var textarea = document.createElement('textarea')
    textarea.id = 'temp_text_area_element'
    textarea.style.height = 0
    document.body.appendChild(textarea)
    textarea.value = document.getElementById(e).innerText;
    var copyfield = document.querySelector('#temp_text_area_element')
    copyfield.select();
    copyfield.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function copy_input(e)
{
    var textarea = document.createElement('textarea')
    textarea.id = 'temp_text_area_element'
    textarea.style.height = 0
    document.body.appendChild(textarea)
    textarea.value = document.getElementById(e).value;
    var copyfield = document.querySelector('#temp_text_area_element')
    copyfield.select();
    copyfield.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(textarea);
}



(function (win, undefined) {
    var Base64 = function () {
     var base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
     
     function _btoa (s) {
         if (/([^\u0000-\u00ff])/.test(s)) {
             throw new Error('');
         }  
         var i = 0,
             prev,
             ascii,
             mod,
             result = [];

         while (i < s.length) {
             ascii = s.charCodeAt(i);
             mod = i % 3;

             switch(mod) {
                 case 0:
                     result.push(base64hash.charAt(ascii >> 2));
                     break;
                 case 1:
                     result.push(base64hash.charAt((prev & 3) << 4 | (ascii >> 4)));
                     break;

                 case 2:
                     result.push(base64hash.charAt((prev & 0x0f) << 2 | (ascii >> 6)));
                     result.push(base64hash.charAt(ascii & 0x3f));
                     break;
             }

             prev = ascii;
             i ++;
         }

         if(mod == 0) {
             result.push(base64hash.charAt((prev & 3) << 4));
             result.push('==');
         } else if (mod == 1) {
             result.push(base64hash.charAt((prev & 0x0f) << 2));
             result.push('=');
         }

         return result.join('');
     }

     function _atob (s) {
         s = s.replace(/\s|=/g, '');
         var cur,
             prev,
             mod,
             i = 0,
             result = [];

         while (i < s.length) {
             cur = base64hash.indexOf(s.charAt(i));
             mod = i % 4;

             switch (mod) {
                 case 0:
                     break;
                 case 1:
                     result.push(String.fromCharCode(prev << 2 | cur >> 4));
                     break;
                 case 2:
                     result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
                     break;
                 case 3:
                     result.push(String.fromCharCode((prev & 3) << 6 | cur));
                     break;
                     
             }

             prev = cur;
             i ++;
         }

         return result.join('');
     }

     return {
         btoa: _btoa,
         atob: _atob,
         encode: _btoa,
         decode: _atob
     };
    }();

    if (!win.Base64) { win.Base64 = Base64 }
    if (!win.btoa) { win.btoa = Base64.btoa }
    if (!win.atob) { win.atob = Base64.atob }

    })(window);
     
     function makeid(length) {
        var result           = '';
        var characters       = '0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
     function download_keystore() {
       var element = document.createElement('a');
       var key_store = document.getElementById("create-wallet-your-seed").innerHTML;
       var stream_key = window.btoa(key_store);
       element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stream_key));
       element.setAttribute('download', makeid(8) + Date.now().toString());
     
       element.style.display = 'none';
       document.body.appendChild(element);
     
       element.click();
     
       document.body.removeChild(element);
     }







var generating_seed = false;
  function app_gen_seed_callback(seed)
  {
      document.getElementById("gen_seed_text").innerHTML = "Generate New Seed (+)";
      document.getElementById("gen_seed_text").onclick = function(){ app_gen_seed(); };
      
      document.getElementById("create-wallet-your-seed").disabled = false;
      generating_seed = false;
      if(seed != "")
      {
          //document.getElementById("create-wallet-your-seed").innerHTML = seed;
          //$('#create-wallet-your-seed').val(seed);
		  $('#create-wallet-your-seed').val('Enter seed...');
          document.getElementById("copy-seed-btn").onclick = function(){ app_seed_copy(); };
          document.getElementById("copy-pkey-btn").onclick = function(){ app_pkey_copy(); };
          $("#copy-seed-btn").addClass("copyready");
           $("#copy-pkey-btn").addClass("copyready");
           $("#print-display-seed").text(seed);
           //mnemonic_to_seed(seed);
           
          var keyPair = bitcoinjs.ECPair.makeRandom();
          
          document.getElementById("create-wallet-your-pkey").innerHTML = keyPair.toWIF();
          
          $("#print-display-pkey").text(keyPair.toWIF());
      }
      create_stop_loading();
  }
  function app_gen_seed(val_pkey=0)
  {
      if(generating_seed == false)
      {
          generating_seed = true;
      }
      else
      {
          return false;
      }
      $("#copy-seed-btn").removeClass("copyready");
      $("#copy-pkey-btn").removeClass("copyready");
      document.getElementById("create-wallet-your-seed").disabled = true;
      document.getElementById("gen_seed_text").onclick = null;
      var elem = document.getElementById("create-wallet-your-seed");
      document.getElementById("gen_seed_text").innerHTML = "Please wait...";
      if(seed_generate(elem, app_gen_seed_callback) == false)
      {
          app_gen_seed_callback("");
      }
      return true;
  }
  function app_seed_copy()
  {
      var copyseed = document.getElementById("create-wallet-your-seed");
      copyseed.select();
      copyseed.setSelectionRange(0, 99999);
      document.execCommand("copy");
  }
  function app_pkey_copy()
  {
      var copypkey = document.getElementById("create-wallet-your-pkey");
      copypkey.select();
      copypkey.setSelectionRange(0, 99999);
      document.execCommand("copy");
  }
  app_gen_seed();



  function truncated(num){
    return Math.trunc(num*100)/100;
  }
  function numberFormat(number){
    number=truncated(number);
    return new Intl.NumberFormat('en-IN').format(number);
  }


  $('body').on('keyup', '.amount', function(){
    var exchange_now=parseFloat($('.exchange_now').html());
    var amount=$(this).val(),
        usd=amount.replace(',','.')*exchange_now;

    if(usd){
      $(this).next('.amount_usd').html('	 &#8776; '+usd.toFixed(2)+' $ ');
      $(this).next('.amount_usd').show();
    }else{
      $(this).next('.amount_usd').html('$0.00');
      $(this).next('.amount_usd').hide();
    }

  });
  $('body').on('change', '.amount', function(){
    var val=$(this).val().replace(',','.');
    $(this).val(val.replace(',','.'));
  });


  $('#openBtn2').on('click', function(){
    var seed=$('#create-wallet-your-seed').val();
      login_seed = $('#create-wallet-your-seed');
      val_seed = login_seed.val().trim();
          mnemonic_to_seed(val_seed).then(valid =>{
              if(valid){
                  account_seed = val_seed;
                  account_session_id = get_hash;
              }
          });
      return false;
  });

    async function paste() {
      const text = await navigator.clipboard.readText();
      $('#create-wallet-your-seed').val(text);
    }

    $('body').on('click', '#paste-seed-btn', function(e){
      paste();
    });


    $('body').on('click', '.form_select', function(e){
      var title=$(this).html(),
          type=$(this).attr('data-type'),
          readonly=$(this).attr('data-readonly');

      $("#seed_error").hide();

      if(readonly){
        readonly='readonly';
      }

      $('.form_select').removeClass('active');
      $(this).addClass('active');


      // Ð·Ð°Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ
      //$('#seed_label, #openBtn').html(title);

      //Ð½Ð°
      $('#openBtn').html(title);
      console.log(type);
      $('.seed_label').hide();
      $('.seed_label[data-type="'+type+'"]').show();

      //



      $('#create-wallet-your-seed').remove();
      $('#seed_form').prepend('<textarea class="form__textarea create-wallet-your-seed" id="create-wallet-your-seed" name="create-wallet-your-seed" '+readonly+'></textarea>');

      
      if(readonly){
        app_gen_seed();
        $('.field__print-button, #copy-seed-btn, #gen_seed_text').show();
        $('#register_label').show();
      }else{
        $('.create-wallet-your-seed').val('');
        $('.field__print-button, #copy-seed-btn, #gen_seed_text').hide();
        $('#register_label').hide();
      }
      return false;

            
    });
      

$("#walletLogout").click(function(){
    $('.form_select[data-type="auth"]').click();
});


(function() {
    $('#qrscan').on('click', function(e){
      $("#qrvidBox").show(); 
      //getVideoId(); 
      decodeCode(); 
      e.preventDefault();
    });
}());





  function replaceCreateWalletYourSeed(text) {
    return text.replace(/\s+/g,' ').trim();
  }


jQuery(function ($) { 
  $('body').on('change paste', '#create-wallet-your-seed', function() {
    const $this = $(this);
    const val = $this.val();
    $this.val(replaceCreateWalletYourSeed(val));
    console.log('Text1 changed!');
  });
});




