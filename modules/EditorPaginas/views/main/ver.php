<?php 
	use app\modules\EditorPaginas\components\htmlview\htmlview;
	use app\modules\EditorPaginas\components\htmlview\htmlviewAssets;
	htmlviewAssets::register($this);

  use app\modules\EditorPaginas\ModuleAssets;
  ModuleAssets::register($this);
?>

<?= HtmlView::widget([
	'TituloSeccion' => '',
	'EtiquetaTitulo' => 'h3',
	'ClaseTitulo' => '',
	'Modelo' => $Modelo,
]);?>
