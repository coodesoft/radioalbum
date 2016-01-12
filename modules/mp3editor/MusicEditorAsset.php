<?php
namespace app\modules\mp3editor;

use yii\web\AssetBundle;

class MusicEditorAsset extends AssetBundle
{
    public $sourcePath = '@app/modules/mp3editor';
        
    public $css = [
        'css/music-editor.css',
    ];
    
    public $js = [
    	'js/jquery.mp3editor.js',
        'js/music-editor.js',
    ];
    
    public $depends = [
        'app\assets\AppAsset',
    ];
}

