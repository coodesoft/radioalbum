<?php

namespace app\modules\suscriptor;

use yii\web\AssetBundle;

class ModuleAssets extends AssetBundle
{
    public $sourcePath = '@app/modules/suscriptor';
    public $css = [
        'css/style.css',
	];
    public $js = [
		'js/suscriptor.js',
    ];
    
    public $depends = [
        'app\assets\AppAsset',
    ];
}
