
$(window).load(function(){
	//codigo para el boton de guardar
	$('#boton-guardar-estatica').click(function(){
		var Texto = $('#texto-pagina').html();
		$.post("guardar-estatica",{i:'nosotros',texto:Texto},CambiosGuardados());
	});
});

function CambiosGuardados(){
	alert('Se han guardado los cambios');
}


