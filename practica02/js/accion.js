$(function() {
    $('#seleccion').on('change', function(e) {
        if ($(this).val() == "solo") {
            $('p').css({
                'display': 'none'
            });
        } else {
            $('p').css({
                'display': 'block'
            });
        }
    });
    $('#letra').on('change', function(e) {
        $('h1,h2,p').css({
            'font-family': $(this).val(),
        });
    });
});