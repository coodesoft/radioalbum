<?php

namespace app\assets;

use yii\web\AssetBundle;

class NosotrosAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        //'css/nosotros.css',
    ];
    public $js = [
    	//'js/raSelector/jquery.raselector.js',
    ];
    public $depends = [
        //'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
