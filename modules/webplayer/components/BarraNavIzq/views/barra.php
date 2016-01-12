<?php 
	use app\modules\EditorPaginas\components\htmlview\htmlview;
	use app\modules\EditorPaginas\components\htmlview\htmlviewAssets;
	htmlviewAssets::register($this);
?>
<div class="col-xs-12" id='Cont-barra-izq' title="Aun hay más por descubrir, Ultimas Novedades!">
	<div class="boton-cerrar" title="cerrar" id="cerrar-novedades">x</div>
	<div id="barra-sig" class="botonMoverNav" title="Articulo siguiente"></div>
	<div id="barra-ant" class="botonMoverNav" title="Articulo anterior"></div>
	<div id="barra-spoiler">
		<div id="contenedor-slider-nov">
			<?= HtmlView::widget([
				'RegistrosPagina' => 5,
				'PaginaActual' => 1,
				'Urlpag' => 'novedades',
				'tabla' => 'novedades',
				'registro' => 'todos',
				'CampoTitulo' => 'titulo',
				'CampoCuerpo' => 'cuerpo',
				'DesabilitarEncabezado' => '1',
				'MostrarFecha' => '1',
				'RedirigePag' => '1',
				'SoloTitulo'=> '1',
			]);?>
		</div>
	</div>
</div>
