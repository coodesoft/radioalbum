/**
 * 
 */
 const DuracionFxEntrada = 50;   //tiempo de efecto transición entre reproductores
 const TiempDesapCarCarg = 200;  //timepo que tarda en desaparecer el cartel "cargando"
 const TAnimDesapinf = 500;
 const WebPath = "/basic/web";
  
 const IMGLOADED_EVENT = 'imageLoaded';
 
 var aux1;//se usa para solucionar el bug que provoca que se muestre el indicadr de volumen ni bien se carg la pag en los vol rotativos 
 
 var prop;
 var imageState = false,
 	 webplayerState = false;
 
/*********************************************************************************************/
		/************************* Funciones Generales ***************************/
/*********************************************************************************************/

function getServerURL(){
	return ((location.href.split('/'))[0])+'//'+((location.href.split('/'))[2]) + "/";
}

function getMediaServerURL(){
	return getServerURL() + "ampache/server/xml.server.php";
}

function showElement(objID){
	$('#'+objID).removeClass('hidden');
	$('#'+objID).addClass('visible');
}

function hideElement(objID){
	$('#'+objID).removeClass('visible');
	$('#'+objID).addClass('hidden');
}


function setDefaultSkinValues(){
	
	inicControlVolume ('wp-volume-control','Actuador-Volumen','Display-Volumen');
	
	if ($('#parametros').length!=0){
		var arr = [];
		arr[arr.length] = $('#parametros').attr('data-channel');
		arr[arr.length] = $('#parametros').attr('data-album');
		$('#webplayer').raSelector({'socialPlay':  arr});
	}
	aux1=0;	
	MostrarCartelesInfo(); //muestra los carteles con la informacion de
}

function inicControlVolume (controlID,Vol_act,Vol_display) {
	function angCero(Control) {
		$("#"+controlID).html('');
		$("#"+controlID).html("<div id='Actuador-Volumen'></div><div id='Display-Volumen'></div>");
	}
	
	var Tipo_Control = $("#"+controlID).attr('data-Tipo');
	var Porcentaje = parseInt($("#"+controlID).attr('data-Valor'));
	if (Tipo_Control=='Rot') { 
		$("#"+Vol_display).css('left','100%');
		$("#"+Vol_display).css('top','-10%');
		//Ajustamos la posicion 
		$("#"+Vol_act).css('left','0%');
		$("#"+Vol_act).css('top','0%');
		$("#"+Vol_act).css('height','100%');
		$("#"+Vol_act).css('width','100%');
		$("#"+controlID).css({'background-image': 'none'});
				
		prop=new Propeller("#"+Vol_act,{inertia: 0, speed: 0, onRotate: function(){ 
			if (this.angle > 180 && this.angle < 360){
				if (this.angle < 270){this.angle=270;}
				$("#"+controlID).attr('data-Valor',(this.angle-270)*0.55);
			} else {
			if (this.angle >0  && this.angle < 180){
				if (this.angle > 90){this.angle=90;}
				$("#"+controlID).attr('data-Valor',(this.angle)*0.55+50);
			}}
			$('#wp-player').jPlayer('volume',$("#"+controlID).attr('data-Valor')/100);
			if(aux1==1){IndicaVol();}else{aux1=1;}
		}});
		
		if (Porcentaje <= 50) { 
			var Angulo = Porcentaje/0.55+270
		} else {
			var Angulo = (Porcentaje-50)/0.55;
		}
		
		prop.angle=Angulo;

	} else if (Tipo_Control=='Ver') {
		angCero('#'+Vol_act);
		$("#"+Vol_display).css('left','50%');
		$("#"+Vol_display).css('top','-0%');
		//Ajustamos la posicion y la rotacion
		$("#"+Vol_act).css('left','-25%');
		$("#"+Vol_act).css('height','10%');
		$("#"+Vol_act).css('width','150%');
		$("#"+controlID).css({'background-image': 'none'});
		//Actualizamos el control de acuerdo a su valor
		$('#'+Vol_act).css('top',100-Porcentaje+Porcentaje/9+'%');

	} else if (Tipo_Control=='Hor') {
		angCero('#'+Vol_act);
		$("#"+Vol_display).css('left','50%');
		$("#"+Vol_display).css('top','-250%');
		//Ajustamos la posicion y la rotacion
		$("#"+Vol_act).css('top','-25%');
		$("#"+Vol_act).css('height','150%');
		$("#"+	Vol_act).css('width','10%');
		$("#"+controlID).css({'background-image': 'none'});
		//Actualizamos el control de acuerdo a su valor
		$('#'+Vol_act).css('left',Porcentaje-Porcentaje/9+'%');
	} else if (Tipo_Control=='HorD') {
		angCero('#'+Vol_act);
		$("#"+Vol_display).css('left','50%');
		$("#"+Vol_display).css('top','-250%');
		//
		$("#"+Vol_act).css('height','100%');
		$("#"+Vol_act).css('top','0%');
		$("#"+Vol_act).css('left','0%');
		$("#"+Vol_act).css('width','100%');
		
		var y = 50; var o = 75; 
		if (Porcentaje < o) {o = Porcentaje;} if (Porcentaje < y) {y = Porcentaje;}
		$("#"+controlID).css({'background-image': 'linear-gradient(to right,green 0%,yellow '+y+'%, orange '+o+'%, red '+Porcentaje+'%,rgba(0,0,0,0) '+Porcentaje+'%)'});
	}
}

/*********************************************************************************************/
		/************************* Plugins Generales ***************************/
/*********************************************************************************************/


$.fn.controllbyskin = function(attribute){
	this.attr('data-skin', attribute);
	return this;
}

$.fn.loadwebplayer = function (asociatedFunction){ //genera vista

	this.click(function(){
		var viewID = $(this).attr('data-target');
		
		$(this).siblings().attr('data-status', 'inactive');
		$(this).attr('data-status', 'active');
		loadWebPlayerSkin(viewID, controller, asociatedFunction);
	})

	$('#wp-selector').on('mousemove','.bullet', function(event) { 
		var Py = event.pageY - parseInt($('#wp-selector').offset().top);
		var Porcentaje = 100-100/parseInt($('#wp-selector').css('height'))*Py;
	});

	return this;
}


$.fn.playsong = function(){
	
	if ($(this).attr('data-type') == 'jumper-element'){
		var nextAlbumID = $(this).attr('data-nextID');
		if (nextAlbumID != undefined){
			$('#'+nextAlbumID).loadAlbumSongs();
		}
	} else{
		var url = $(this).attr('data-url');
		$(this).attr('data-status', 'play');
		$(this).siblings().attr('data-status', 'stop');
		$('#wp-audio-manipulation').jPlayer('setMedia', { mp3: url }).jPlayer('play');
	}
	
}
/*********************************************************************************************/
     /************************* Manipulación de la Interfaz ***************************/
/*********************************************************************************************/

 //////////////////////////////Control de volumen 

function controlVolume(controlID,Vol_act, asociatedFunction){
	Aplica_Vol('wp-volume-control',asociatedFunction);
	function moverVertical(PosiY){
		var Py = PosiY - parseInt($("#"+controlID).offset().top);
		var Porcentaje = 100-100/parseInt($("#"+controlID).css('height'))*Py;
		var Porcent2 = 100/parseInt($("#"+controlID).css('height'))*parseInt($("#"+Vol_act).css('height'));
			
		if (Porcentaje < 10) { Porcentaje = 10; }

		$("#"+Vol_act).css('top',100-Porcentaje+'%');
		$("#"+controlID).attr('data-Valor',Porcentaje-11+Porcentaje/9);

	}

	function moverHorizontal(PosiX) {
		var Px = PosiX - parseInt($("#"+controlID).offset().left);
		var Porcentaje = 100/parseInt($("#"+controlID).css('width'))*Px;
		
		if (Porcentaje > 90) { Porcentaje = 90; }

		$('#'+Vol_act).css('left',Porcentaje+'%');
		$("#"+controlID).attr('data-Valor',Porcentaje+Porcentaje/9);				
	}

	function moverHorDeg (PosiX) { // Control horizontal con degradado y actuador fijo
		var Px = PosiX - parseInt($("#"+controlID).offset().left);
		var Porcentaje = 100/parseInt($("#"+controlID).css('width'))*Px;
		var y = 50; var o = 75; 
		if (Porcentaje < o) {o = Porcentaje;}
		if (Porcentaje < y) {y = Porcentaje;}
		if (Porcentaje > 100) { Porcentaje = 100; }
		$("#"+controlID).attr('data-Valor',Porcentaje);		
		$("#"+controlID).css({'background-image': 'linear-gradient(to right,green 0%,yellow '+y+'%, orange '+o+'%, red '+Porcentaje+'%,rgba(0,0,0,0) '+Porcentaje+'%)'});
	}

	function moverRotativo(PosiX,PosiY){}

	function moverControl(PosiX, PosiY){//posix y posiy son la posicion del mouse dentro de la pagina
		var Tipo_Control = $("#"+controlID).attr('data-Tipo');
		if (Tipo_Control=='Rot')        { // Control de volumen Rotativo
			moverRotativo(PosiX,PosiY); 
		} else if (Tipo_Control=='Ver') { 
			moverVertical(PosiY);
		} else if (Tipo_Control=='Hor') { 
			moverHorizontal(PosiX);
		} else if (Tipo_Control=='HorD') { // Control horizontal con degradado y con actuador fijo
			moverHorDeg(PosiX);
		}
	}

	$('body').on('mousedown', "#"+controlID, function(event) { 
		$(this).attr('data-Mover',1);  
		if($("#"+controlID).attr('data-Tipo')!='Rot'){
			moverControl(event.pageX,event.pageY);	}
	});
	
	$('body').on('mouseleave',"#"+controlID, function(event) { 
		$("#"+controlID).attr('data-Mover',0); });
	$('body').on('mouseup',"#"+controlID, function(event) { 
		$("#"+controlID).attr('data-Mover',0);
	});
	
	$('body').on('mousemove', "#"+Vol_act, function(event) { //si se mueve el mouse por encima
		if ($(this).attr('data-Mover')==1) { moverControl(event.pageX,event.pageY);}
	});	
	$('body').on('mousemove', "#"+controlID, function(event) { //si se mueve el mouse por encima
		if ($(this).attr('data-Mover')==1) { moverControl(event.pageX,event.pageY);}
	});
}
///////////////se encarga de mostrar un "div" con el valor actual del control de volumen
function Display_vol(controlID){
	$('body').on('mousemove', "#"+controlID, IndicaVol);
	$('body').on('mouseleave', "#"+controlID, function(event) { 
		$('#Display-Volumen').css('opacity','0');
	});
}

function IndicaVol(){
	$('#Display-Volumen').html(' '+parseInt($('#wp-volume-control').attr('data-Valor')));
		$('#Display-Volumen').css('opacity','1');}
/////// aplica vol
function Aplica_Vol(controlID,asociatedFunction){
	$('body').on('mousemove', "#"+controlID, function(event) { 
		asociatedFunction($("#"+controlID).attr('data-Valor')/100);
	});
}

/********************************************************************************************/
  /****************************** Armado y Bind de la Interfaz ***************************/
/********************************************************************************************/

function updateProgressBar(progress, successFunction){
	if (successFunction!= null || successFunction!=undefined)
		$('#progressBar').animate({width: progress+"%"}, 50, function(){
			successFunction();
		});
	else
		$('#progressBar').animate({width: progress+"%"}, 50);
	
}

function CargaSkin(viewID, asociatedFunction){
	var css = '<link rel="stylesheet" class="dinamic-ext" href="'+WebPath+'/mods/webplayers/'+viewID+'/css/webplayer.css">';
	$('link.dinamic-ext').remove();//borramos los link previamente cargados
	$('head').append(css);
	updateProgressBar(10);
	var xhrScript = $.getScript(WebPath+'/mods/webplayers/'+viewID+'/js/webplayer.js');
	xhrScript.always(function( data, textStatus, jqXHR) {
				if ((textStatus == 'success') || (textStatus == 'canceled')){
					scriptLoaded = true;
					updateProgressBar(40);
				}
				else
					scriptLoaded = false;
			})

	var errorStatus = false;
	
	xhrScript.always(function(){
			for(index in scriptLoaded){
				if (scriptLoaded[index] == false)
					errorStatus = true;
			}
			//si no hubo error alguno cambio parametros de reproductor en contenedor del mismo y lanzo un evento
			if (errorStatus == false){ 
				var eventTrigger = viewID;
				$('#webplayer').trigger(eventTrigger);
				asociatedFunction();
			} else { alert('error en la carga del script'); }
	})
}

function loadWebPlayerSkin(viewID, asociatedFunction){ //genera vista
	if (viewID != $("#webplayer").attr('data-resource')) {
		$('#indica-carga').show();
		updateProgressBar(0);
		// precarga de la imagen
		var img = new Image();
		$('#webplayer').animate({opacity:'0'}, 200, function(){
			CargaSkin(viewID, function(){
				asociatedFunction();
				$('#webplayer').attr('data-resource', viewID);
				$('#Actuador-Volumen').attr('data-resource', viewID);
				$('.wp-button').attr('data-resource', viewID);
				updateProgressBar(70);
				img.onload = function() {
					$('#webplayer').trigger(IMGLOADED_EVENT);
					updateProgressBar(90);
				};
				img.src =  WebPath+"/mods/webplayers/"+viewID+"/images/img.png";
				
				$('#dinamic-assets').html("<style>*[data-resource='"+viewID+"']{background:url('"+img.src+"') no-repeat;}</style>");
			});
		})
	}
}


function loadIndexWPlayer(asociatedFunction){ //genera vista
	var viewID = $('.bullet-first').attr('data-target');
	loadWebPlayerSkin(viewID, asociatedFunction);
	
}

// interfaz, carteles informativos
function MostrarCartelesInfo(){
	const ParSombraC="1px 1px 9px 1px #00ffff";
	const ParSombraA="1px 1px 9px 1px #00ff00";
	$('#info-canal').css('opacity','1');
	$('#info-album').css('opacity','1');	
	//resaltamos los elementos
	$('#channels-list').css('box-shadow',ParSombraC);
	$('#albums-list').css('box-shadow',ParSombraA);
	$('#info-canal').css('box-shadow',ParSombraC);
	$('#info-album').css('box-shadow',ParSombraA);
	
	//eliminar cartel al pasar el mouse por arriba
	$('#info-album').mouseover(function(){$(this).animate({opacity:0},TAnimDesapinf,function(){
		$('#albums-list').css('box-shadow','none');
	})});
	$('#info-canal').mouseover(function(){$(this).animate({opacity:0},TAnimDesapinf,function(){
		$('#channels-list').css('box-shadow','none');
	})});
	//posiciomos los cartelitos
	var alturawp=$('#webplayer').offset().top;
	var raselectorXChannels=$('#channels-list').offset().left;
	var raselectorXAlbums=$('#albums-list').offset().left;
	
	var wpX = $('#webplayer').offset().left;
	$('#info-canal').css('left',raselectorXChannels-wpX-185-parseInt($('#channels-prev-control').css('width'))+'px');
	$('#info-album').css('left',raselectorXAlbums-wpX-180-parseInt($('#albums-prev-control').css('width'))+'px');
	$('#info-canal').css('top',$('#channels-list').offset().top-alturawp+'px');
	$('#info-album').css('top',$('#albums-raselector-wrapper').offset().top-alturawp+parseInt($('#albums-raselector-wrapper').css('height'))/2+'px');
}

/*********************************************************************************************/
					/** Conexion al Servidor Multimedia Ampache **/
/*********************************************************************************************/

$(window).load(function(){
	
	$('body').on('click', '#play', function(){$('#webplayer').raSelector('play');})
	
	$('body').on('click', '#pause', function(){$('#webplayer').raSelector('pause');})
	
	$('body').on('click', '#next', function(){$('#webplayer').raSelector('next');})
	
	$('body').on('click', '#prev', function(){$('#webplayer').raSelector('prev');})
	
	
	
	$('[data-type="transition"]').on('mousedown', function(){$(this).attr('data-status', 'active');})

	$('[data-type="transition"]').on('mouseup', function(){$(this).attr('data-status', 'inactive');})

	$('#play').on('click', function(){
		$(this).siblings().attr('data-status', 'inactive');
		if ($(this).attr('data-status')=='inactive'){
			$(this).attr('data-status', 'active');
		}
	})
	
	$('#pause').on('click', function(){
		$(this).siblings().attr('data-status', 'inactive');
		if ($(this).attr('data-status')=='inactive'){
			$(this).attr('data-status', 'active');
		}
	})

	$('body').on($.fn.raSelector.event.play, '#webplayer', function(e){
		$('#play').siblings().attr('data-status', 'inactive');
		if ($('#play').attr('data-status')=='inactive'){
			$('#play').attr('data-status', 'active');
		}
	})

	$('body').on($.fn.raSelector.event.pause, '#webplayer', function(e){
		$('#pause').siblings().attr('data-status', 'inactive');
		if ($('#pause').attr('data-status')=='inactive'){
			$('#pause').attr('data-status', 'active');
		}
	})
	
	if ($('#parametros').length==0){ //si no se le pasan parametros
 		loadIndexWPlayer(function(){
			controlVolume('wp-volume-control','Actuador-Volumen', function(value){
				$('#wp-player').jPlayer('volume', value);
			});
			Display_vol('wp-volume-control');
		});	
	
	} else { //se le pasan parametros
		loadWebPlayerSkin($("#parametros").attr("data-skin"),function(){
			controlVolume('wp-volume-control','Actuador-Volumen', function(value){
				$('#wp-player').jPlayer('volume', value);
			});
			Display_vol('wp-volume-control');
		});
	}
	
	$('.bullet').loadwebplayer(function(){
			controlVolume('wp-volume-control','Actuador-Volumen', function(value){
				$('#wp-player').jPlayer('volume', value);
			});
			Display_vol('wp-volume-control');
		});
	
	$('body').on(IMGLOADED_EVENT, '#webplayer', function(){
		imageState = true;
		if (webplayerState){
			updateProgressBar(100, function(){
				$('#indica-carga').hide();
				updateProgressBar(0);
				$('#webplayer').animate({opacity:'1'}, 200);
			});
			imageState = false;
			webplayerState = false;
			
		}
			
	})
	
	$('body').on($.fn.raSelector.event.initReady, '#webplayer', function(){
		webplayerState = true;
		if (imageState){
			updateProgressBar(100, function(){
				$('#indica-carga').hide();
				updateProgressBar(0);
				$('#webplayer').animate({opacity:'1'}, 200);
			});
			imageState = false;
			webplayerState = false;
		}
			
	})
	
})
