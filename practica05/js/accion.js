$(function() {
    var conexion = $.ajax({
        url: 'http://jorgesanchez.net/practicas/iaw/practica05/elecciones.xml',
        dataType: 'xml'
    });

    conexion.done(function(datos) {
        var elecciones = $(datos).find("eleccion");
        for (var eleccion of elecciones) {
            $('#tipo').append("<br><option value=" +
                ($(eleccion).attr("tipo")) + ">" +
                ($(eleccion).attr("tipo")) + "</option)")
            // ($(eleccion).attr("tipo"));		esto solo si funciona
        }
    });
    $('#tipo').on('change', function(e) {
        var opcion = $(this).val();
    	$('#fecha>option').remove();
        var conexion2 = $.ajax({
            url: 'http://jorgesanchez.net/practicas/iaw/practica05/elecciones.xml',
            dataType: 'xml'
        });
        conexion2.done(function(datos) {
            var elecciones = $(datos).find("eleccion");
            for (var eleccion of elecciones) {
                if ($(eleccion).attr('tipo') == opcion) {
                    var fechas = $(eleccion).find("texto");
                    for (var fecha of fechas) {	
                        $('#fecha').append("<br><option value=" +
                            ($(fecha).text()) + ">" +
                            ($(fecha).text()) + "</option>");
                    }
                }
            }

        });
    });
});