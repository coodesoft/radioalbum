<?php

namespace app\modules\mp3editor;

class Module extends \yii\base\Module {

	public function init(){
		parent::init();
		
		$this->params['music'] = '/home/radioalbum.com.ar/Musica';
	}
}
