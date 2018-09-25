$(function() {
    $('button').on('click', function(e) {
        $(this).css({
            'display': 'none'
        });
        var conexion = $.ajax({
            url: 'https://randomuser.me/api/?results=100',
            dataType: 'json',
            success: function(data) {
            }
        });
        conexion.done(function(data){
        	for (persona of data["results"]){
        		$("#listado").append("<p>"+"<img src="+persona["picture"]["large"]+" "+"</img>"+persona["name"]["first"]+" "+persona["name"]["last"]+"<br>"+
        			persona["email"]+"<br>"+persona["location"]["street"]+", "+persona["location"]["postcode"]+", "
        			+persona["location"]["city"]+" ("+persona["location"]["state"]+")"+"</p>")
        	}
        })

    });
});