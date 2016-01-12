<?php 
	use app\modules\EditorPaginas\components\htmlview\htmlview;
	use app\modules\EditorPaginas\components\htmlview\htmlviewAssets;
	htmlviewAssets::register($this);

  	use app\modules\EditorPaginas\ModuleAssets;
  	ModuleAssets::register($this);
	
?>

<?= HtmlView::widget([
	'RegistrosPagina' => $paginacion,
	'TituloSeccion' => 'novedades',
	'EtiquetaTitulo' => 'h3',
	'ClaseTitulo' => '',
	'PaginaActual' => $pagina,
	'tabla' => 'novedades',
	'Urlpag' => $rutaweb.'/index.php/novedades',
	'tabla' => 'novedades',
	'registro' => 'todos',
	'CampoTitulo' => 'titulo',
	'CampoCuerpo' => 'cuerpo',
	'RegAbierto' => $RegAbierto,
]);?>
