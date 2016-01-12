<?php

namespace app\modules\webplayer\components\social;

use yii\web\AssetBundle;

class socialAsset extends AssetBundle
{
    public $sourcePath = '@app/modules/webplayer/components/social';

    public $css = [
        'css/social.css',
    ];
    
    public $js = [
    	'js/social.js',
    ];
    
    public $depends = [
        'app\assets\AppAsset',
    ];
}
?>
