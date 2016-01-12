<?php

namespace app\modules\EditorPaginas\controllers;

use Yii;
use app\modules\EditorPaginas\models\Novedades;
use app\modules\EditorPaginas\models\NovedadesSearch;
use app\modules\EditorPaginas\models\Estaticas;
use app\modules\EditorPaginas\models\EstaticasSearch;

use app\controllers\RadioAlbumController;	

use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

class MainController extends RadioAlbumController
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['view', 'create', 'update', 'delete', 'inicio','editar','guardar'],
                'rules' => [
                    [
                        'allow' => true,
                        'actions' => ['view', 'create', 'update', 'delete','inicio','editar','guardar'],
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }
/*
    
    /**
	 "Accion" para ver el contenido de un registro de la tabla novedades     
	*/
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
      "Accion" para crear un nuevo registro en la tabla novedades 
	*/
    public function actionCreate()
    {
        $model = new Novedades();
    	$timezone = new \DateTimeZone('America/Argentina/Buenos_Aires');
    	$date = new \DateTime('now', $timezone);
    	
        $model->fecha = $date->format('Y-m-d');
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect('inicio');
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     "Accion" para actualizar un registro de la tabla novedades
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
   "Accion" para borrar un registro de la tabla novedades
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['inicio']);
    }

    /**
 	funcion que debuelve un registro de acuerdo al id buscado
     */
    protected function findModel($id)
    {
        if (($model = Novedades::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
	//la $h es la pagina a la que hay que ir, y la $p indica la paginacion (registros por hoja) 
    public function actionPresent()
    {
		$req = Yii::$app->request;
    	$h = $req->get('h');
		$p = $req->get('p');
		$r = $req->get('r');
        return $this -> render('presentacion',[
			'pagina' => $h,
			'paginacion' => $p,
        	'RegAbierto' => $r,
			'rutaweb' => $this->getWebPath(),
		]);
    }
	//"accion" que muestra la página principal del editor de páginas
    public function actionInicio()
	{
		$searchModel = new NovedadesSearch();
		$datosEstatica = new Estaticas;
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

		return $this -> render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
			'modelEstatica' => $datosEstatica,
        ]);	
	}
	//"accion" para ver una pagina determinada de la tabla "estaticas"
	public function actionVer()
    {
    	$req = Yii::$app->request;
    	$i = $req->get('i');
        return $this->render('ver', [
            'Modelo' => $this->findModelE($i),
        ]);
    }

    /**
	"accion" para ver la vista de edicion de un pagina estatica
     */
    public function actionEditar($i)
    {
       $model = $this->findModelE($i);

       return $this->render('Editestaticas', [
       	'model' => $model,
       ]);
       
    }
	//"accion" para guardar el registro de la pagina estatica
	public function actionGuardar()
	{
		$model = $this->findModelE($_POST['i']);
		$model->cuerpo=$_POST['texto'];
		$model->save();
	}
    /**
     //funcion que debuelve un registro determinado por su campo titulo*/
    protected function findModelE($id)
    {
        if (($model = Estaticas::find()->where(['titulo' => $id])->one()) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('La página especificada no existe!');
        }
    }
}
