<?php 
namespace app\modules\webplayer\controllers;

use yii\web\Controller;
use yii\helpers\BaseJson;
use Yii;
use app\controllers\RadioAlbumController;

class WpController extends RadioAlbumController{
        
    public function actionConnectionParams(){
    	$req = Yii::$app->request;
    	$action = $req->post('action');
    	
    	//if ($action == 'connect'){
    	
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

    		return BaseJson::encode($result);
    	//}
    } 

    public function actionObtenerlista()
    {
        $arreglo_dir = scandir('../modules/webplayer/webplayers/');
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
    
    public function actionIndex(){
        return $this->render('index',['urlimg' => 'http://www.radioalbum.com.ar/basic/web/images/logoar.png', 'descripcion'=>'Radio Album']);
    }

    public function actionSocial(){
	 $req = Yii::$app->request;
    		$i = $req->get('i');
    		$c = $req->get('c');
    		$a = $req->get('a');
        //se inicia sesion en el ampache
        $Conexion = BaseJson::decode($this->actionConnectionParams());
        $datos="";
        $peticionAmpache = http_post_data($Conexion["url"].'action='.$Conexion['action']."&auth=".$Conexion['auth']."&timestamp=".$Conexion['timestamp']."&version=".$Conexion['version']."&user=".$Conexion['user'],$datos,array("timeout"=>1,"useragent"=>""));
		  $peticionAmpache = substr($peticionAmpache, strpos ($peticionAmpache,'<')); 
		  $peticionAmpache = substr($peticionAmpache, 0,-5);
//return $peticionAmpache;		  
$xml = simplexml_load_string($peticionAmpache);
		  $token = $xml->auth;
		  //se pide la informacion del album
		  $peticionAmpache = http_post_data($Conexion["url"]."auth=".$token."&action=album_songs&filter=".$a,$datos);
        //return $peticionAmpache;
	$peticionAmpache =substr(substr($peticionAmpache,strpos ($peticionAmpache,'<')),0,-5);
        
        $xml = simplexml_load_string($peticionAmpache);
		  
			//"renderizamos la vista"
        $salida = $this->render('index',['urlimg' => $xml->song[0]->art, 'descripcion' => 'Escuchando '.$xml->song[0]->album.' en Radio Album!']);
        //le agregamos los parametros necesarios
        $salida .= '<div id="parametros" data-skin="'.$i.'vplayer" data-album="'.$a.'" data-channel="'.$c.'"></div>'.$peticionAmpache;
        //mostramos la vista
        return $salida;
    }
}

?>
