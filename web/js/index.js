var TextViejo="Se detectó una versión antigua de ";
var TextViejo2=", para obtener una mejor experiencia de uso, se recomienda actualizar. <b>Click para cerrar</b>"
var MinIe=9;
var MinF=19;
var MinC=24;
var Elemento ="#AlertaNav";

function loadResultMsgMailSending(data){
	if ($('#mailSendingStatusModal').length == 0){
		var form = createModalPopup('Contacto', 'mailSendingStatusModal');
		$(form).modal('show').find('.modal-body').html(data);
	}
}

$(window).load(function(){ 
	AlertaNavegador(Elemento);$('#Deco-Mic').css('width','270px');$('#Deco-Disc').css('height','150px');

	$('[name="contact-button"]').click(function(){

			var cant = 0;
			var formElements = $('.form-group');


			formElements.each(function(index){
				if ($(this).hasClass('has-success'))
					cant ++;
			});

			if (cant == formElements.length){
				$.ajax({
					url: $('#contact-form').attr('action'),
					method: 'post',
					dataType: 'json',
					data: $('#contact-form').serialize(),
					success: function(data){
						var msg = "";
						if (data["status"] == true)
							msg = "Gracias por contactarse con nosotros!";
						else
							msg = "Ha ocurrido un error en el envío. Puede contactarse enviando un correo a contacto[@]radioalbum.com.ar";
						loadResultMsgMailSending(msg);
					}
				});
			} else {
				formElements.find('input').focus();
				formElements.find('input').blur();
				formElements.find('textarea').focus();
				formElements.find('textarea').blur();
			}


	});
});

function AlertaNavegador(Elemento){
	var NumeroVersion =$.browser.versionNumber;
	if ($.browser.name == 'msie') {
			if(NumeroVersion < MinIe){MuestraResultado(TextViejo+'<b>Internet Explorer</b>'+TextViejo2,'#aaaa00',Elemento);}
		}
	else if ($.browser.name == 'firefox' || $.browser.name == 'mozilla') {
			if(NumeroVersion <  MinF){MuestraResultado(TextViejo+'<b>Firefox</b>'+TextViejo2,'#aaaa00',Elemento);}
		}
	else if ($.browser.name == 'chrome') {
		if(NumeroVersion < MinC){MuestraResultado(TextViejo+'<b>Chrome</b>'+TextViejo2,'#aaaa00',Elemento);} 
	} else
	{MuestraResultado('No detectamos tu navegador, puede que algunos componentes no se vean correctamente, se recomienda instalar una version actualizada de Firefox o Chrome  <b>Click para cerrar</b>','#aaaa00',Elemento);}

}

function MuestraResultado(texto,colorF,Elemento){$(Elemento).html('<h4>'+texto+'</h4>');$(Elemento).css('background-color',colorF);$(Elemento).on('mousedown',function(){DesapareceAlert()});}

function DesapareceAlert(){$("#AlertaNav").animate({'height':'0px'},2000,function(){$("#AlertaNav").css('display','none')});}

function createModalPopup(title, id){
	var div = '<div class="modal fade in" id="'+id+'" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
		div+=	'<div class="modal-dialog">';
		div+=		'<div class="modal-content">';
		div+=			'<div class="modal-header">';
		div+= ' 			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        div+= 				'<h4 class="modal-title" id="myModalLabel">'+title+'</h4>';
        div+=			'</div>';
        div+=			'<div class="modal-body"></div>';
        div+=			'<div class="modal-footer">';	
//        div+=				'<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>';
 //       div+=				'<button type="button" class="btn btn-primary">Aceptar</button>';
        div+=			'</div></div></div>';
        
        
        $('body').on('click',  '[data-dismiss="modal"]', function(){
        	$('#'+id).remove();
        });
        $('body').on('click', '.modal-backdrop', function(){
        	$('#'+id).remove();
        });
        return div;
}

