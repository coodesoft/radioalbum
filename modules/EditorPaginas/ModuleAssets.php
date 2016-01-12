<?php

namespace app\modules\EditorPaginas;

use yii\web\AssetBundle;

class ModuleAssets extends AssetBundle
{
    public $sourcePath = '@app/modules/EditorPaginas';
    public $css = [
        'css/pagedit.css',
	];
    public $js = [
		'js/ee.js'
	];
    public $depends = [
        //'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
