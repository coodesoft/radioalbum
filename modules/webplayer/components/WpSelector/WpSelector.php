<?php
namespace app\modules\webplayer\components\WpSelector;

use yii\base\Widget;
use yii\helpers\BaseJson;
use app\modules\webplayer\controllers\WpController;

use yii\helpers\Html;

class WpSelector extends Widget {
    public $ordenwp; // se usa para especificar si los reproductores se muestran al azar
    public $arreglado; //se usa para definir el orden a travez de 
    private $directorio;

    private function OrdenArreglado(){
        if ($this->arreglado <> null) {
            $c = sizeof($this->arreglado);
                for($i =0; $i<$c;$i++){
                        
                        $e = sizeof($this->directorio);
                        for ($d=0;$d<$e;$d++) {
                            if(strpos($this->directorio[$d][0],$this->arreglado[$i].'vplayer')!==false){
                                
                                $aux1 = $this->directorio[$i][0];
                                $aux2 = $this->directorio[$i][1];

                                $this->directorio[$i][0] = $this->directorio[$d][0];
                                $this->directorio[$i][1] = $this->directorio[$d][1];

                                $this->directorio[$d][0] = $aux1;
                                $this->directorio[$d][1] = $aux2;
                            }
                        }
            }
        }
    }

    public function init(){
		parent::init();

        $this->directorio = BaseJson::decode(WpController::actionObtenerlista());
        switch ($this->ordenwp) {
            case "azar": //desordenar
                shuffle($this->directorio); 
                break;
            case null:  //si no se especifica orden se ve si se definio uno en particular
                $this->OrdenArreglado();
                break;
        }
	}
	
	public function run() {

        $c = sizeof($this->directorio);
        $Primero = 0;
        $container = "<div id='contenedor-wp-sel' class='col-xs-12'>";
        $container .=  "<div id='flecha-ant' class='flecha'></div><div id='flecha-sig' class='flecha'></div>";
        $container .=  "<div id='wp-selector-display'><div id='wp-selector'>";
        for($i = 0; $i < $c;$i++) //obtenemos un archivo y luego otro sucesivamente
        {
            $por = $this->directorio[$i][1]*4;
            if ($Primero == 0) { $Primero = 1;  
                $container.= "<div class='bullet bullet-first' data-valor='0' data-mover='0' data-target='".$this->directorio[$i][0]."' data-status='active' style='background-position:".$por."% 0%;'></div>";
            } else {
                $container.= '<div class="bullet" data-target="'.$this->directorio[$i][0].'" data-status="inactive" style="background-position:'.$por.'% 0%;"></div>';
            }
        }
        
        $container.= "</div></div></div>";  
        
        echo $container;
    }

}
?>
