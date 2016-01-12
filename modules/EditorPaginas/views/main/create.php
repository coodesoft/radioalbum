<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Novedades */

$this->title = 'Nueva noticia';
$this->params['breadcrumbs'][] = ['label' => 'Novedades', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;

use app\modules\EditorPaginas\ModuleAssets;
ModuleAssets::register($this);
?>

<div class="panel panel-gral">
    <div class="panel-heading">
        <h3>Nueva novedad</h3>
    </div>
    <div class="panel-body">
        <?= $this->render('_form', [
        'model' => $model,
    	]) ?>
    </div>
    <div class="panel-footer">
         <a href="/basic/web/index.php/editor-paginas"><div class="btn btn-info">Volver al panel</div></a>
    </div>
</div>
