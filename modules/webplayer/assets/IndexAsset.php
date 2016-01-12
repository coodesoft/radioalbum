<?php

namespace app\modules\webplayer\assets;

use yii\web\AssetBundle;

class IndexAsset extends AssetBundle
{
    public $sourcePath = '@app/modules/webplayer';
        
    public $css = [
        'css/wpgral.css',
        'js/raSelector/jquery.raselector.css',
    ];
    
    public $js = [
    	'js/propeller.min.js',
    	'js/webplayeradmin.js',
        'js/marquee/jquery.marquee.min.js',
        'js/shuffle/jquery.shuffle.js',
        'js/raSelector/jquery.raselector.js',
         'js/jPlayer/js/jplayer/jquery.jplayer.min.js',
    ];
    
    public $depends = [
        'app\assets\AppAsset',
    ];
}
?>
