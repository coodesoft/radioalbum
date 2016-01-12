<?php
namespace app\modules\webplayer\components\social;

use yii\base\Widget;

class social extends Widget {

	public function init(){
		parent::init();
	}
	
	public function run() {

    $container =  "<div id='barra-social'>";
    $container .=  "<div id='barra-social-display' data-activo='0'></div>";
    $container .=  '<div id="facebook" title="Compartir en Facebook" class="opcion"></div>';
    $container .=  '<div id="twitter" title="Compartir en Twitter" class="opcion"></div>';
    $container .=  '<div id="url" title="Obtener Url para compartir" class="opcion"></div>';
    $container.= "</div>";  

    echo $container;
    }

}
?>
