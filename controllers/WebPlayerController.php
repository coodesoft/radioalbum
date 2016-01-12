<?php 
namespace app\controllers;

use yii\web\Controller;
use yii\helpers\BaseJson;

class WebPlayerController extends RadioAlbumController{
        
    public function actionConnectionParams($action){
    	if ($action == 'connect'){
    	
    		$time = time();
    		$key = hash('sha256','audio');
    		$passphrase = hash('sha256',$time . $key);

    		
    		$result = array();
    	
		 	$result['url'] = "http://" . $_SERVER["SERVER_NAME"] . "/ampache/server/xml.server.php?";
   		    $result['action'] = 'handshake';
    		$result['auth'] = $passphrase;
    		$result['timestamp'] = $time;
    		$result['version'] = "370001";
    		$result['user'] = 'audio';

    		echo BaseJson::encode($result);
    	}
    } 

    public function actionObtenerlista()
    {
        $arreglo_dir = scandir('../components/WebPlayer/webplayers/');
        $cant_elementos = sizeof($arreglo_dir);
    
        $c = 0;

        for($i = 0; $i < $cant_elementos;$i++) {
            if ($arreglo_dir[$i] <> '.' && $arreglo_dir[$i] <> '..'){
                $directorio[$c][0] = $arreglo_dir[$i];
                $directorio[$c][1] = $c;
                $c++;
            }
        }
        return BaseJson::encode($directorio);
    }
    
}

?>