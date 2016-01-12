<?php

return [
            'enablePrettyUrl' => true,
            'showScriptName' => true,
            'enableStrictParsing' => false,
            'rules' => [
                'welcome'   => 'site/index',
                'admin' => 'site/login',
				[
					'pattern' => 'novedades/<h>/<p>/<r>',
					'route' => 'PagEdit/main/present',
					'defaults' => ['h'=>'1','p'=>'5','r'=>''],		
				],
          		[
            		'pattern' => 'estatica/<i>', // agregado para ir a alguna pagina estatica
            		'route' => 'PagEdit/main/ver', 
            	],
                'editor-paginas' => 'PagEdit/main/inicio', //agregado
				'edit-estatica' => 'PagEdit/main/editar', //agregado
				'guardar-estatica' => 'PagEdit/main/guardar', //agregado
                'webplayer' => 'webplayer/wp/index',
                'tageditor' => 'mp3editor/music-editor/index',
                'tageditor/<action:(navigate|set-tags|get-tags)>' => 'mp3editor/music-editor/<action>',
                [
                    'pattern' => 'webplayer/<action:(connection-params|obtener-lista|social|index)>/<i:\w{1}>/<c:\d+>/<a:\d+>/<x>',
                    'route' => 'webplayer/wp/<action>',
                    'defaults' => ['i' => '', 'c'=> '', 'a'=>'', 'x' => 'http://www.radioalbum.com.ar/basic/web/images/logora.png'],
                    
                ],
                [
					'pattern' => 'suscriptor/<action:(suscribe|confirmation)>/<i:\d+>/<c:\w+>',
					'route' =>  'suscriptor/default/<action>',
					'defaults' => ['i'=>'', 'c'=>''],
				],
            ],
         ];
