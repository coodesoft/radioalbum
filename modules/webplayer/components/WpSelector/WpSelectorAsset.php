<?php

namespace app\modules\webplayer\components\WpSelector;

use yii\web\AssetBundle;

class WpSelectorAsset extends AssetBundle
{
    public $sourcePath = '@app/modules/webplayer/components/WpSelector';

    public $css = [
        'css/WpSelector.css',
    ];
    
    public $js = [
    	'js/WpSelector.js',
    ];
    
    public $depends = [
        'app\assets\AppAsset',
    ];
}
?>
