<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Novedades */

$this->title = 'Update Novedades: ' . ' ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Novedades', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
use app\modules\EditorPaginas\ModuleAssets;
ModuleAssets::register($this);
?>

<div class="panel panel-gral">
    <div class="panel-heading">
        <h3>Actualizar</h3>
    </div>
    <div class="panel-body">
    	<?= $this->render('_form', [
        	'model' => $model,
    	]) ?>
    </div>
    <div class="panel-footer">
    </div>
</div>