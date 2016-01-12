<?php

namespace app\controllers;

use app\controllers\RadioAlbumController;
use Yii;
use yii\helpers\BaseJson;

class MailSenderController extends RadioAlbumController{
	

	public function actionSend(){
		$req = Yii::$app->request;
		$to = "radioalbum.com.ar@radioalbum.com.ar";
//		$to = "radioalbum.com.ar@radioalbum.com.ar";
		$formContent = $req->post('ContactForm');
		$title = $formContent['subject'];
		$msg = $formContent['body'];
		$name = $formContent['name'];
		$mail = $formContent['email'];

		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";
		$cabeceras .= 'From: ' .$mail. "\r\n";

		$result = array();
		$result['status'] = mail($to, $title, $msg, $cabeceras);
		

		return BaseJson::encode($result);

	}

	/*
	 * -hook method- 
	 * @override 
	 */
	
	public function buildMailContent($arr = null){ return null; }
}
