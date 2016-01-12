<?php

namespace app\modules\EditorPaginas\models;

use Yii;

/**
 * This is the model class for table "novedades".
 *
 * @property string $id
 * @property string $titulo
 * @property string $cuerpo
 * @property string $fecha
 */
class Novedades extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'novedades';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
			[['titulo', 'cuerpo'], 'required'],
            [['cuerpo'], 'string'],
            [['fecha'], 'safe'],
            [['titulo'], 'string', 'max' => 100]
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
            'fecha' => 'Fecha',
        ];
    }

}
