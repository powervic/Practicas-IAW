$(function(e){
	$('.divas').on('click', function(event) {
		location="divas/"+$(this).attr('id')+".html"
	});
	$('.divas').on('mouseover', function(e){
		$('h1').text($(this).data('name'));
	});
});