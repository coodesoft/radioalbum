<?php

	use app\modules\EditorPaginas\components\htmlview\htmlview;
	use app\modules\EditorPaginas\components\htmlview\htmlviewAssets;
	htmlviewAssets::register($this);

	use app\modules\EditorPaginas\ModuleAssets;
	ModuleAssets::register($this);

	use app\modules\EditorPaginas\EditorAssets;
	EditorAssets::register($this);

	$this->params['breadcrumbs'][] = $model;
	$this->params['breadcrumbs'][] = 'editor';
?>
<div class="panel panel-gral">
	<div class="panel-heading">
		<h1 contenteditable="true">Información</h1>
	</div>
	<div class="panel-body">
		<p>
			Para editar la página de <?php echo $model->titulo ?> simplemente debe hacer 
			doble click en el cuerpo de la misma, donde eventualmente aparecerá el editor de texto.
			Se eligió esta modalidad ya que es la mejor forma de ver como quedará la página sin
			necesidad de previsualización, por lo que la página luego se verá de forma identica a 
			lo que se ve mientras está en proceso de edición.
		</p>	
	</div>
	<div class="panel-footer">
		<div id="boton-guardar-estatica" class="btn btn-default">Guardar cambios</div>
		<a href="editor-paginas">		
			<div class="btn btn-default">Volver al panel principal</div>
		</a>	
		<a href="estatica/<?php echo $model->titulo ?>">
			<div class="btn btn-default">Ir a <?php echo $model->titulo ?> </div>
		</a>		
		</div>
</div>

<?= HtmlView::widget([
	'TituloSeccion' => '',
	'EtiquetaTitulo' => 'h3',
	'ClaseTitulo' => '',
	'Modelo' => $model,
	'AtributosBody' => 'id="texto-pagina" contenteditable="true"',
]);?>
