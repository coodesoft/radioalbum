<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\modules\suscriptor\models\Suscripciones */

$this->title = Yii::t('app', 'Update {modelClass}: ', [
    'modelClass' => 'Suscripciones',
]) . ' ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Suscripciones'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="suscripciones-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
