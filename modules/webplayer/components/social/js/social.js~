const RutaWeb = '/basic/web/index.php/webplayer/social';
const TamFin = '600%';

$('body').on('click','.opcion', function() { 
	var IdBoton = $(this).attr('id');
	var Agregaface='';
	if (IdBoton == 'facebook') {
		Agregaface=$('#webplayer').css('background-image').replace('url(','').replace(')','');
	} 
	if (IdBoton == 'url') {
		MostrarUrl();
	} else {
		window.open(PrefijoSocial(IdBoton)+encodeURIComponent(ArmarUrl()),'_blank');
	}
	
});

$('body').on('click','#cerrar', function() { 
	EscondeVisor();
});

function PrefijoSocial(id){
	if (id =="facebook") {
		return 'http://www.facebook.com/sharer.php?u=';
	} if (id=="twitter") {
		return 'http://twitter.com/home?status=';
	}
}

function ArmarUrl(){
	var Skin = $('#webplayer').attr('data-resource')[0];
	var channelID = $('#wp-player').attr('data-channel');
	if (channelID == undefined){
		channelID = $('#parametros').attr('data-channel');
	}
	var AlbumId = $('#wp-player').attr('data-album');
	var pref = '&';
	var dir = ((location.href.split('/'))[0])+'//'+((location.href.split('/'))[2]) + "/";
	dir += RutaWeb+'/'+Skin+'/'+channelID+'/'+AlbumId;
	return dir;
}

function MuestraVisor(){
	$('#barra-social-display').animate({'right':TamFin,'width':TamFin},1000,function(){
		$('#barra-social-display').html('<div id="text">'+ArmarUrl()+'</div> <div id="cerrar" title="Cerrar"><b>x</b></div>');
		$('#text').css('opacity','0');
		$('#text').animate({'opacity':'1'},500);
	});
}

function EscondeVisor(){
	$('#text').animate({'opacity':'0'},500,function(){
		$('#barra-social-display').html('');
		$('#barra-social-display').animate({'right':'0%','width':'100%'},1000);
	});
}

function MostrarUrl(){
	var estado = $('#barra-social-display').attr('data-activo');
	if (estado == '0') {
		$('#barra-social-display').attr('data-activo','1');
		MuestraVisor();
	} else {
		$('#barra-social-display').attr('data-activo','0');
		EscondeVisor();
	}
}
