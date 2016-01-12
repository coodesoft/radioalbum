<?php 

use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
use app\modules\mp3editor\MusicEditorAsset;
MusicEditorAsset::register($this);
/* @var $model app\modules\mp3editor\models\LoginForm */
?>

<div id="musicList" class="data-container col-md-6 col-lg-6">
	<div class="row">
		<h2 id="mediaTitle"> Listado de Canciones </h2>
	</div>
	
	<div class="row">
		<div id="backButton" class="btn btn-info">Atras</div>
	</div>
	
	<div class="row">
		<div id="fileNameTitle">Nombre</div>
		<div id="mediaContent" data-depth="0">
	</div>
	</div>
</div>

<div id="musicEditForm" class="data-container col-md-6 col-lg-6">
	<div class="row">
		<h2 id="mediaTitle">Información de la canción</h2>
	</div>
	<div class="row col-md-11 col-lg-11">
 		<?php $form = ActiveForm::begin(['id' => 'song-form']); ?>
 			<?= $form->field($model, 'title') ?>
        	<?= $form->field($model, 'album') ?>
            <?= $form->field($model, 'artist') ?>
            <?= $form->field($model, 'genre') ?>
		<?php ActiveForm::end(); ?>
		<div class="row col-md-12 col-lg-12">
			<div class="col-md-3">
				<?= Html::submitButton('Guardar', ['class' => 'btn btn-primary', 'name' => 'songEdit-button']) ?>
			</div>
			<div class="col-md-9">
				<div id="editResponse">
				</div>
			</div>
		</div>
        
	</div>
</div>
