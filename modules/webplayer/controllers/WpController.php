<?php 
namespace app\modules\webplayer\controllers;

use yii\web\Controller;
use yii\helpers\BaseJson;
use Yii;
use app\controllers\RadioAlbumController;

//cargamos el modelo de obtención e imágenes de albunes
use app\modules\webplayer\models\imagenalbum;
use app\modules\webplayer\models\AmpacheAlbum;

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
		
	 public function actionImagenalbum($a){

	 		$Modelo = new imagenalbum(['album'=>$a]);
			$Imagen = $Modelo->Imagen();
			return $Imagen;
	 }	
	
	 public function actionSocial(){
	 		//cargamos los parametros
	 		$req = Yii::$app->request;
    		$i = $req->get('i');//skin
    		$c = $req->get('c');//canal
    		$a = $req->get('a');//album
    		$ModeloAlbum = new AmpacheAlbum;
	 		$NombreAlbum = $ModeloAlbum::find()->where(['id' => $a])->one();
	 		$NombreAlbum = $NombreAlbum->name;
	 		$Imagen = "http://www.radioalbum.com.ar/basic/web/index.php/imagenalbum/".$a;
	 		//"renderizamos la vista"
        $salida = $this->render('index',['urlimg' => $Imagen, 'descripcion' => 'Escuchando '.$NombreAlbum.' en Radio Album!']);
        //le agregamos los parametros necesarios
        $salida .= '<div id="parametros" data-skin="'.$i.'vplayer" data-album="'.$a.'" data-channel="'.$c.'"></div>';
        //mostramos la vista
        return $salida;
	 }

}

?>
