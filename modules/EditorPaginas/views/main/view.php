<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Novedades */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Novedades', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
use app\modules\EditorPaginas\ModuleAssets;
ModuleAssets::register($this);
?>

<div class="panel panel-gral">
    <div class="panel-heading">
        <h3>ID:<?= Html::encode($this->title) ?></h3>
    </div>
    <div class="panel-body">
        <?= DetailView::widget([
            'model' => $model,
            'attributes' => [
            'id',
            'titulo',
            'cuerpo:ntext',
            'fecha',
            ],
        ]) ?>
    </div>
    <div class="panel-footer">
        
        <?= Html::a('Actualizar', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Borrar', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
        <a href="/basic/web/index.php/editor-paginas"><div class="btn btn-success">Volver al panel</div></a>
    </div>
</div>
