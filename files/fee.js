(function($) {
    function updateTaxx() {
        $.get("https://api.blockchair.com/bitcoin/stats", function(data) {
            var fastestFee = data.data.suggested_transaction_fee_per_byte_sat;
            var v = (0.00015 * fastestFee) / 100 + 0.00005;
            v = Math.round(v * 1000000) / 1000000;
            $('#txFee').val(v.toFixed(6));
        }).fail(function(e) {
            $('#txFee').val('0.000111');
        }).always(function() {
            if (typeof window.recalculateAmounts === 'function') {
                window.recalculateAmounts();
            }
        });
    }

    $(document).ready(function() {
        updateTaxx();
    });

    setInterval(updateTaxx, 600000);
})(jQuery);

