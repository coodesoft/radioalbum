<?php

namespace app\modules\mp3editor\models;

use Yii;
use yii\base\Model;

/**
 * ContactForm is the model behind the contact form.
 */
class SongForm extends Model
{
	public $title;
	public $album;
	public $artist;
	public $genre;
    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            // son campos requeridos a completar
            [['title', 'album', 'artist', 'genre'], 'required'],
        ];
    }

    /**
     * @return array customized attribute labels
     */
    public function attributeLabels()
    {
        return [
        	'title'  => 'Título',
        	'album' => 'Álbum',
        	'artist'=> 'Artista',
        	'genre' => 'Género'
        ];
    }
}