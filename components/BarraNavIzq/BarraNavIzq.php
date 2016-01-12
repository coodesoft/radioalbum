<?php
namespace app\components\BarraNavIzq;

use yii\base\Widget;

class BarraNavIzq extends Widget {

	public function init(){
		parent::init();
	}
	
	public function run() {

    $container =  "<div id='Cont-barra-izq' class='row col-lg-3 col-md-12'>";
    
    $container.="<div id='conte' class='m10 div-info col-md-6 col-lg-11'>
				¡Animate a probar los skins!
				
			</div>
<div id='conte2' class='div-info m10 col-md-5 col-lg-11'>
				
				Aun hay mas por descubrir
			</div>";
        
    $container.= "</div>";  

    echo $container;
    }

}
?>
