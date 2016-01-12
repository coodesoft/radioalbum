<?php

namespace app\modules\EditorPaginas\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\modules\EditorPaginas\models\Novedades;

/**
 * NovedadesSearch represents the model behind the search form about `app\models\Novedades`.
 */
class NovedadesSearch extends Novedades
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['titulo', 'cuerpo', 'fecha'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Novedades::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
			'pagination'=>array('pageSize'=>7), // personalizamos la paginación
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'fecha' => $this->fecha,
        ]);

        $query->andFilterWhere(['like', 'titulo', $this->titulo])
            ->andFilterWhere(['like', 'cuerpo', $this->cuerpo]);

        return $dataProvider;
    }
}
