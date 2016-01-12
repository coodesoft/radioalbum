
function submitSuscription(){
	var form = $('.suscripciones-form').children('form');
	
	$.ajax({
		type: 'POST',
		url: 'suscriptor/suscribe',
		data: form.serialize(),
		success: function(data){
			$('.modal-body').html(data);	
		}
	})
}



$(function(){
	$('body').on('click', '#submitSuscription', function(){
		submitSuscription();
	});
});