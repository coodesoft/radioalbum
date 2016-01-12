<?php

namespace app\modules\EditorPaginas\models;

use Yii;

/**
 * This is the model class for table "estaticas".
 *
 * @property integer $id
 * @property string $titulo
 * @property string $cuerpo
 * @property string $opciones
 */
class Estaticas extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'estaticas';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['titulo', 'cuerpo'], 'required'],
            [['cuerpo'], 'string'],
            [['titulo'], 'string', 'max' => 100],
            [['opciones'], 'string', 'max' => 256]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'titulo' => 'Titulo',
            'cuerpo' => 'Cuerpo',
            'opciones' => 'Opciones',
        ];
    }
}
