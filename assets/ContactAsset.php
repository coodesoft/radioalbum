<?php

namespace app\assets;

use yii\web\AssetBundle;

class ContactAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        //'css/contact.css',
		//'js/raSelector/jquery.raselector.css',
    ];
    public $js = [
    	//'js/raSelector/jquery.raselector.js',
    	//'js/index.js',
    	//'js/jPlayer/js/jplayer/jquery.jplayer.min.js',
    ];
    public $depends = [
        //'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
