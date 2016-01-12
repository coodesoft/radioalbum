<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\modules\suscriptor\models\Suscripciones */
/* @var $form ActiveForm */
?>
<div class="site-suscriptorForm">

    <?php $form = ActiveForm::begin(); ?>

        <?= $form->field($model, 'mail') ?>
        <?= $form->field($model, 'nombre') ?>
    
        <div class="form-group">
            <?= Html::submitButton(Yii::t('app', 'Submit'), ['class' => 'btn btn-primary']) ?>
        </div>
    <?php ActiveForm::end(); ?>

</div><!-- site-suscriptorForm -->
