<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\modules\EditorPaginas\models\Estaticas */
/* @var $form ActiveForm */
?>
<?php $form = ActiveForm::begin(); ?>

        <?= $form->field($model, 'titulo')->textInput(['maxlength' => 100]) ?>
        <?= $form->field($model, 'cuerpo')->textarea(['rows' => 10]) ?>
        
        <div class="form-group">
            <?= Html::submitButton('Guardar', ['class' => 'btn btn-primary']) ?>
        </div>
    <?php ActiveForm::end(); ?>
