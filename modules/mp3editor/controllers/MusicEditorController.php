<?php
namespace app\modules\mp3editor\controllers;

use Yii;
use yii\web\Controller;
use yii\helpers\BaseJson;
use yii\filters\AccessControl;
use getID3;
use getid3_writetags;
use app\modules\mp3editor\Module;
use app\modules\mp3editor\models\SongForm;
use app\controllers\RadioAlbumController;

class MusicEditorController extends RadioAlbumController{
	
		
	public function behaviors()
	{
		return [
			'access' => [
				'class' => AccessControl::className(),
				'only' => ['navigate', 'get-tags', 'set-tags', 'index'],
				'rules' => [
					[
						'allow' => true,
						'actions' => ['navigate', 'get-tags', 'set-tags', 'index'],
						'roles' => ['@'],
					],
				],
			],
		];
	}
	
	
	public function actionIndex(){
		$model = new SongForm();
		return $this->render('musiceditor', [ 'model' => $model, ]);
	}
	
	function actionNavigate(){
		$module = Module::getInstance();
		$req = Yii::$app->request;

		$path = $req->post('path');
		$result = [];
		
		if ($path == null){
			$path = $module->params['music'];
		} else 
			$path = $module->params['music']."/".$path;
		
		if (is_dir($path)) {
			if ($dh = opendir($path)) {
				
				while (($file = readdir($dh)) !== false) {

					if ($file!="." && $file!=".."){
						if (is_dir($path ."/".$file))
							$result['dir'][]['name'] = $file;
						else{
							$ext = substr($file, -3);
							if ($ext == "mp3")
								$result['file'][]['name'] = $file;
						}
							
					}
				}

				closedir($dh);
				return BaseJson::encode($result);
			}
		}else
			return "No es ruta valida";
	}
	
	function actionGetTags(){
		$module = Module::getInstance();
		$req = Yii::$app->request;
		$path = $req->post('path');
		
		$path = $module->params['music']."/".htmlspecialchars_decode($path);
		
		$getid3 = new getID3;
		$result = $getid3->analyze($path);
		
		$tagsName = array('title', 'album', 'artist', 'genre');
		foreach($tagsName as $index => $name){
			if (isset($result['tags']['id3v2'][$name]))
				$tags[$index] = $result['tags']['id3v2'][$name];
			else
				$tags[$index] = ["Desconocido"];
		}
		
		return BaseJson::encode($tags); 
	}
	
	function actionSetTags(){
		$module = Module::getInstance();
		$req = Yii::$app->request;
		$filename = $req->post('rel');
		$postTags = $req->post('SongForm');
				
		$TextEncoding = 'UTF-8';
		$getID3 = new getID3;
		$getID3->setOption(array('encoding'=>$TextEncoding));
		$tagwriter = new getid3_writetags();
		$tagwriter->filename = $module->params['music']."/".htmlspecialchars_decode($filename);
		$tagwriter->tagformats = array('id3v2.4');
		$tagwriter->tag_encoding      = $TextEncoding;
		$tagwriter->remove_other_tags = false;
		
		$tagData = array();
		foreach($postTags as $index => $tag){
				$tagData[$index] = array($tag);
		}
		
		$tagwriter->tag_data = $tagData;
		// write tags
		if ($tagwriter->WriteTags()) {
			$result['msg'] = "Se guardaron correctamente las etiquetas";
			$result['status'] = 'success';
			
			if (!empty($tagwriter->warnings)) {
				$result['msg'] = 'Ojo, hay algunas advertencias: '.implode("-", $tagwriter->warnings);
				$result['status'] = 'warning';
			}

			return BaseJson::encode($result);
		} else {
			$result['msg'] = 'Se produjo un error al escribir las etiquetas! '.implode('-', $tagwriter->errors);
			$result['status'] = 'error';
			return BaseJson::encode($result);
		}
	}
}

















