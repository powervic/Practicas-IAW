$(function() {
    $('button').on('click', function(e) {
        $(this).css({
            'display': 'none'
        });
        var conexion = $.ajax({
            url: 'https://randomuser.me/api/?results=100',
            dataType: 'json',
            success: function(data) {}
        });
        conexion.done(function(data) {
            var i = 0;
            for (persona of data["results"]) {
                $("#listado").append("<div class=\"fila\" id=\"" + i + "\">" + "<figure><img src=" + persona["picture"]["large"] + "></img></figure>" +
                    "<p>" + persona["name"]["first"] + " " +
                    persona["name"]["last"] + "<br>" +
                    persona["email"] + "<br>" +
                    persona["location"]["street"] + ", " +
                    persona["location"]["postcode"] + ", " +
                    persona["location"]["city"] + " (" +
                    persona["location"]["state"] + ")" + "</p></div>")
                i++;
            };
        });

    });
    $('body').on('click', '.fila', function(e) {
        var id = $(this).attr('id');
        var conexion2 = $.ajax({
            url: 'https://randomuser.me/api/?results=1',
            dataType: 'json',
            success: function(data) {}
        });

        conexion2.done(function(data) {
            var pers = data["results"][0];
            
            $('#' + id).html("<figure><img src=" + pers["picture"]["large"] + "></img></figure>" +
                "<p>" + pers["name"]["first"] + " " +
                pers["name"]["last"] + "<br>" +
                pers["email"] + "<br>" +
                pers["location"]["street"] + ", " +
                pers["location"]["postcode"] + ", " +
                pers["location"]["city"] + " (" +
                pers["location"]["state"] + ")" + "</p>");
        });
    });
});