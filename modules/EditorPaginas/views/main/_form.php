<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

use app\modules\EditorPaginas\EditorAssets;
EditorAssets::register($this);

?>

<div class="novedades-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'titulo')->textInput(['maxlength' => 50]) ?>
	
	<?= $form->field($model, 'cuerpo')->textarea(['maxlength'=>64000,'rows' => 6, 'class' => 'ckeditor', 'id' => 'editortext']) ?>
    
    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>


