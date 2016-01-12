var Intervalo = 0; //Variable que contendra el id del intervalo de actualizacion del selector
const Vel_mov = 100; //Variable que contiene la velocidad de actualizacion del selector (en ms)
const Margen_izq = 20;

/////// Codigo para manejo de la parte grafica
$('body').on('mouseleave', "#wp-selector", function(event) { 
	clearInterval(Intervalo);
	Intervalo = 0;
	$("#wp-selector .bullet-first").attr('data-mover',0);
});

function Situar_Control(Control,Posicion) {
	var limite = 100/parseInt($("#wp-selector-display").css('width'))*parseInt($('.bullet').css('width'))*26 - 100;
	if (Posicion < Margen_izq && Posicion > -limite){
	$(Control).animate({'margin-left': Posicion + '%'},Vel_mov);
	$(Control).attr('data-Valor',Posicion);} 
}

function Establecer_velocidad(MouseX) {
	var Px = MouseX - parseInt($("#wp-selector").offset().left);
	var Porcentaje = 100/parseInt($("#wp-selector-display").css('width'))*Px;
	var Posi_actual = parseInt($("#wp-selector .bullet-first").attr('data-Valor'));
	var Velocidad = 0;

	if (Porcentaje < 25) {
		Velocidad = (25-Porcentaje)/3;
	} else if (Porcentaje > 75) {
		Velocidad = (75-Porcentaje)/3;
	} 

	$("#wp-selector .bullet-first").attr('data-mover',Velocidad);
}

$('body').on('mousemove','#flecha-ant', function(event) { 
	$("#wp-selector .bullet-first").attr('data-mover',15);
	ActualizarSelector();
});

$('body').on('mousemove','#flecha-sig', function(event) { 
	$("#wp-selector .bullet-first").attr('data-mover',-15);
	ActualizarSelector();
});

function ActualizarSelector() {
	if ($("#wp-selector .bullet-first").attr('data-mover') != 0) {
		var Posi_actual = parseInt($("#wp-selector .bullet-first").attr('data-Valor'));
		Posi_actual += parseInt($("#wp-selector .bullet-first").attr('data-mover'));;
		Situar_Control("#wp-selector .bullet-first",Posi_actual);
	} 
}

function Iniciar_inetervalo(funcion,tiempo) {
	return setInterval(funcion,tiempo);
}

$('body').on('mousemove', "#wp-selector", function(event) { 
	if ($('.flecha').css('display')!='block') {
		Establecer_velocidad(event.pageX);
	}
	if (Intervalo == 0){
			Intervalo = Iniciar_inetervalo('ActualizarSelector()',Vel_mov);	
	}
});

///////// Codigo para la seleccion de skins
$.fn.loadwebplayer = function (asociatedFunction){ //genera vista
	
	this.click(function(){
		var viewID = $(this).attr('data-target');
		
		$(this).siblings().attr('data-status', 'inactive');
		$(this).attr('data-status', 'active');
		loadWebPlayerSkin(viewID, asociatedFunction);
	})
	return this;
}
