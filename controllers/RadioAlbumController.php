<?php

namespace app\controllers;

use yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class RadioAlbumController extends Controller{
	
	public function getBasePath(){
		return "/basic";
	}
	
	public function getWebPath(){
		return $this->getBasePath()."/web";
	}

}
