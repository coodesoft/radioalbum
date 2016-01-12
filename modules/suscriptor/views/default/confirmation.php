<?php
use yii\helpers\Html;
use app\modules\suscriptor\ModuleAssets;
ModuleAssets::register($this);

/* @var $this yii\web\View */
$this->title = 'Confirmación';
if ($model->tipo == 'mensual')
	$type = "mensuales";
else
	$type = "semanales";
?>
<div class="suscription-confirmation">
	<div class="msg-success">
		<h2> <?= $model->nombre ?>, has completado el proceso de suscripción a las novedades de Radioalbum exitosamente!</h2>
		<h2> A partir de este momento comenzaras a recibir resúmenes <?= $type ?> en tu correo.</h2>
	</div>
</div>

