<?php

namespace app\modules\EditorPaginas\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\modules\EditorPaginas\models\Estaticas;

/**
 * EstaticasSearch represents the model behind the search form about `app\modules\EditorPaginas\models\Estaticas`.
 */
class EstaticasSearch extends Estaticas
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['titulo', 'cuerpo', 'opciones'], 'safe'],
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
        $query = Estaticas::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'titulo', $this->titulo])
            ->andFilterWhere(['like', 'cuerpo', $this->cuerpo])
            ->andFilterWhere(['like', 'opciones', $this->opciones]);

        return $dataProvider;
    }
}
