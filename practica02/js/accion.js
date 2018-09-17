$(function() {
    $('#seleccion').on('change', function(e) {
        if ($(this).val()=="solo") {
            $('p').css({
                'display': 'none'
            });
        } 
        else {
            $('p').css({
                'display': 'block'
            });
        }
    });

    $('#letra').on('change', function(e){
    	if ($(this).val()=="monospace") {
    		$('h1,h2,p').css({
    			'font-family': 'monospace',
    		});
    	}
    	if ($(this).val()=="sans-serif") {
    		$('h1,h2,p').css({
    			'font-family': 'sans-serif',
    		});
    	}
    	if ($(this).val()=="serif") {
    		$('h1,h2,p').css({
    			'font-family': 'serif',
    		});
    	}
    });

});