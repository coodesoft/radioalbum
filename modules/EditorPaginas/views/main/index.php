<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\NovedadesSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

use app\modules\EditorPaginas\ModuleAssets;
ModuleAssets::register($this);


$this->title = 'Novedades';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="row col-xs-12">
	<div class="col-xs-8">	
		<div class="panel panel-gral">
    		<div class="panel-heading">
    		    <h4>Novedades</h4>
    		</div>
    		<div class="panel-body">
    		    <?= GridView::widget([
    		        'dataProvider' => $dataProvider,
    		        'filterModel' => $searchModel,
    		        'columns' => [
    		            ['class' => 'yii\grid\SerialColumn'],
			            'titulo',
    		            'fecha',
			            ['class' => 'yii\grid\ActionColumn'],
    		        ],
    		    ]); ?>
    		</div>
    		<div class="panel-footer">
    		    <?= Html::a('Crear nueva novedad', ['create'], ['class' => 'btn btn-default']) ?>
    		    <a href="novedades"><div class="btn btn-default">Ir a la página de novedades</div></a>
    		</div>
		</div>
	</div>
	<div class="col-xs-4">	
		<?php 
			echo $this->render('estaticas',['model' => $modelEstatica]);	
		?>
	</div>
</div>

