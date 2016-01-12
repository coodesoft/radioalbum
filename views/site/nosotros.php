<?php
use yii\helpers\Html;

use app\assets\NosotrosAsset;
NosotrosAsset::register($this);

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\ContactForm */

$this->title = 'Nosotros';
$this->params['breadcrumbs'][] = $this->title;
?>

 <div class="panel panel-gral">
  <div class="panel-heading">
    <h1><?= Html::encode($this->title) ?></h1>
  </div>
  <div class="panel-body">
    <p>
       Desde RadioAlbum podrás enviar un mensaje musicalizado a tus amistades recomendando canciones y bandas. <br>

Los canales de RadioAlbum están dedicados a un amplio, libre y novedoso espectro de tendencias pop, rock e indie. <br>

Además de las compilaciones encontrarás un canal dedicado a un album o un artista. <br>

RadioAlbum además colaborará ayudando a difundir la obra de artistas independientes a través de nuestra página, consultá en: #### <br>

También estamos desarrollando una tienda ecléctica donde podrás encontrar accesorios de computación y audio y expresiones artistícas en diversos formatos. <br>

Esperamos que disfrutes participando de RadioAlbum.


    </p>
  </div>
</div>
