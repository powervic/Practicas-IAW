$(function(e) {
    var conexion = $.ajax({
        url: 'http://jorgesancheznet.ddns.net/practicas/iaw/practica06/comunidades.php',
        type: 'GET',
        dataType: 'json'
    });
    conexion.done(function(data) {
        var comunidades = data["comunidades"];
        for (var comunidad of comunidades) {
            $('#comunidad').append("<option value=\"" + comunidad["id_comunidad"] + "\">\
					" + comunidad["nombre"] + "</option>");
        };
    });
    $('#comunidad').on('change', function(e) {
    	var id_comunidad=$(this).val(); // añadido
    	$('#provincia>option').remove();
    	$('#localidad>option').remove(); //para que al cambiar la comunidad se vacíe tambien la localidad
        var conexion2 = $.ajax({
            url: 'http://jorgesancheznet.ddns.net/practicas/iaw/practica06/provincias.php?comunidad='+$(this).val(),
            type: 'get',
            dataType: 'json',
            data:{				//añadido
            	comunidad: id_comunidad		//añadido
            }
        });
        conexion2.done(function(data) {
            var provincias = data["provincias"];
            $('#provincia').append("<option  disabled selected hidden>Elija la comunidad</option>"); //añadido
            for(var provincia of provincias){
            	$('#provincia').append("<option value="+provincia["n_provincia"]+">" + 
            		provincia["nombre"])+"</option>"
            }


        });
    });
    $('#provincia').on('change', function(e) {
    	$('#localidad>option').remove();
        var conexion3 = $.ajax({
            url: 'http://jorgesancheznet.ddns.net/practicas/iaw/practica06/localidades.php?provincia='+$(this).val(),
            type: 'POST',
            dataType: 'json',
        });
        conexion3.done(function(data) {
            var localidades = data["localidades"];
            $('#localidad').append("<option  disabled selected hidden>Elija la comunidad</option>");
            for(var localidad of localidades){
            	$('#localidad').append("<option value="+localidad["n_localidad"]+">" + 
            		localidad["nombre"])+"</option>"
            }


        });
    });
});