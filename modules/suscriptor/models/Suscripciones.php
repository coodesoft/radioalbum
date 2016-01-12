<?php

namespace app\modules\suscriptor\models;

use Yii;

/**
 * This is the model class for table "suscripciones".
 *
 * @property integer $id
 * @property string $mail
 * @property string $nombre
 * @property string $tipo
 * @property string $codigo
 */
class Suscripciones extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'suscripciones';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['mail', 'nombre', 'tipo'], 'required'],
            [['mail', 'nombre'], 'string', 'max' => 45],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'mail' => 'Mail',
            'nombre' => 'Nombre',
            'tipo' => 'Tipo de suscripción',
        ];
    }
}
