<?php 
use yii\helpers\Html;
use yii\helpers\Url;

use app\assets\IndexAsset;
IndexAsset::register($this);
	
	
?>


<div id="Deco-Mic" class="hidden-xs Caja-exp z-arriba"><div id="Deco-Mic-f" class="imgIndex"></div></div>
<div id="Deco-Disc" class="hidden-xs Caja-exp z-arriba"><div id="Deco-Disc-f" class="imgIndex"></div></div>

<div id="contenedor" class="col-xs-10 col-xs-offset-1">
	<div class="panel panel-gral">
		<div class="panel-heading centrado">
    		¡Bienvenidos!
  		</div>
  		<div class="panel-body">
    		<div id="lc" class="col-xs-10 col-xs-offset-1">	
				<img id="logo" src= <?= $webPath."/images/logo.png"?> ></img>
			</div>
  		</div>
  		<div class="panel-footer alt-pie">
  		<!--<a href="index.php?r=webplayer/wp/index"> -->
  			<a href=<?php echo Url::to(['webplayer/wp/index']) ?> >
  				<div class ="min-wbtn btn btn-warning col-xs-12 btn-lg col-md-6 col-md-offset-3">Ingresar</div>
			</a>
		</div>
	</div>
</div>

<div id="AlertaNav" class="col-lg-12 col-md-12"></div>
<noscript><div id="AnJs" class="col-lg-12 col-md-12"><h4><b>Se requiere JavaScript habilitado para poder acceder a la funcionalidades de la página</b></h4></div></noscript>
