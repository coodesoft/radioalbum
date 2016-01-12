<?php

use yii\helpers\Html;
use app\modules\suscriptor\ModuleAssets;
ModuleAssets::register($this);

/* @var $this yii\web\View */
/* @var $model app\modules\suscriptor\models\Suscripciones */
?>

<?php if ($response == 'create'){?>
	<div class="suscripciones-create">

	    <h1><?= Html::encode($this->title) ?></h1>

	    <?= $this->render('_form', [
	        'model' => $model,
	    ]) ?>

	</div>
<?php } elseif ($response == 'success'){ ?>
	<div class="suscription-succes">
		<h3 style="text-align: center">Has iniciado el proceso de suscripción. En breve, te enviaremos un correo con los datos de validación.</h3>
	</div>
<?php } elseif($response == 'exist'){ ?>
	<div class="suscription-error">
		<h4 style="text-align: center">Actualmente te encuentras suscripto a nuestro sistema de novedades.</h4>
	</div>
<?php }?>
