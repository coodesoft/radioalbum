<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
/* @var $this yii\web\View */
/* @var $model app\modules\suscriptor\models\Suscripciones */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="suscripciones-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'mail')->textInput(['maxlength' => 45]) ?>

    <?= $form->field($model, 'nombre')->textInput(['maxlength' => 45]) ?>
  
    <?= $form->field($model, 'tipo')->dropDownList(['semanal' => 'Semanal', 'mensual' => 'Mensual'], ['prompt'=>'Seleccionar...']); ?>

    <div class="form-group">
        <?= Html::button($model->isNewRecord ? Yii::t('app', 'Aceptar') : Yii::t('app', 'Update'), [
				'class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary',
				'id' => 'submitSuscription'
		]) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
