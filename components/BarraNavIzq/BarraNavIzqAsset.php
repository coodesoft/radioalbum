<?php

namespace app\components\BarraNavIzq;

use yii\web\AssetBundle;

class BarraNavIzqAsset extends AssetBundle
{
    public $sourcePath = '@app/components/BarraNavIzq';

    public $css = [
        'BarraNavIzq.css',
    ];
    
    public $js = [
    	'BarraNavIzq.js',
    ];
    
    public $depends = [
        'app\assets\AppAsset',
    ];
}
?>
