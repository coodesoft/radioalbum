<?php

namespace app\modules\suscriptor\controllers;

use Yii;
use yii\helpers\Html;
use yii\helpers\Url;

use app\modules\suscriptor\models\SuscripcionesSearch;
use app\modules\suscriptor\models\Suscripciones;
use app\controllers\MailSenderController;
use yii\filters\VerbFilter;
use app\modules\EditorPaginas\models\Novedades;

class DefaultController extends MailSenderController{

    
    public function actionSuscriptorForm(){
    	$model = new app\modules\suscriptor\models\Suscripciones();
    
    	if ($model->load(Yii::$app->request->post())) {
    		if ($model->validate()) {
    			// form inputs are valid, do something here
    			return;
    		}
    	}
    
    	return $this->render('site/suscriptorForm', [
    			'model' => $model,
    			]);
    }
    
    public function behaviors(){
    	return [
    		'verbs' => [
    			'class' => VerbFilter::className(),
    			'actions' => [
    				'delete' => ['post'],
    				],
    			],
    		];
    }
    
    /**
     * Lists all Suscripciones models.
     * @return mixed
     */
    public function actionIndex(){
    	$searchModel = new SuscripcionesSearch();
    	$dataProvider = $searchModel->search(Yii::$app->request->queryParams);
    
    	return $this->render('index', [
    			'searchModel' => $searchModel,
    			'dataProvider' => $dataProvider,
    			]);
    }
    
    /**
     * Displays a single Suscripciones model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id){
    	return $this->render('view', [
    			'model' => $this->findModel($id),
    			]);
    }
    
    /**
     * Creates a new Suscripciones model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
   public function actionSuscribe(){
        $model = new Suscripciones();

        if ($model->load(Yii::$app->request->post())) {
        	$result = Suscripciones::find()->where(['mail' => $model->mail])->one();
        	
        	if ($result == null){
        		$model->codigo = md5($model->mail);
        		
        		if ($model->save()){
        			$arr = ['id'=>$model->id, 'key'=>$model->mail];
        			$msg = $this->buildSuscriptionMailContent($arr);
        			$this->sendMail($model->mail, 'Suscripcion a Radioalbum', $msg);
        			return $this->renderAjax('create', ['model' => $model, 'response' => 'success']);
        		}
        	} else
        		return $this->renderAjax('create', ['model' => $model, 'response'=> 'exist']);
        } else {
                return $this->renderAjax('create', ['model' => $model, 'response'=> 'create']);
        }
    }

    public function actionConfirmation(){
    	$model = new Suscripciones();
	$c = Yii::$app->request->get('c');
    	$model = Suscripciones::find()->where(['codigo' => $c])->one();
    	if ($model != null) {
		$model->verificado = true;
		if ($model->save()){
			return $this->render('confirmation', ['model' => $model]);
		}

    	}

    }

    /**
     * Updates an existing Suscripciones model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id){
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
     * Deletes an existing Suscripciones model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
    	$this->findModel($id)->delete();
    
    	return $this->redirect(['index']);
    }
    
    /**
     * Finds the Suscripciones model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Suscripciones the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
    	if (($model = Suscripciones::findOne($id)) !== null) {
    		return $model;
    	} else {
    		throw new NotFoundHttpException('The requested page does not exist.');
    	}
    }
    
	public function buildSuscriptionMailContent($arr = null){
		$url = Url::to(['confirmation', 'i' => $arr['id'], 'c' => md5($arr['key'])], true);
		$mensaje = '
			<html>
				<head>
  					<title>Suscripción a Radioalbum</title>
				</head>
				<body>
					<p>Felicitaciones! Has iniciado el proceso de suscripción a las novedades de Radiolbum.</p>
					<p>Para completarlo has click enel siguiente enlace:</p>'.
						Html::a($url, $url, ['class' => 'text-primary'])    .'				
				</body>
			</html>
		';
		return $mensaje;
	}
	
	public function buildNewsBodyContent($novedades, $type){
		$mensaje = '
		<html>
			<head><title>Novedades '.$type.' de Radioalbum</title></head>
			<body>
		';
		foreach($nodevades as $novedad){
			$title = $novedad->titulo;
			$body = $novedad->cuerpo;
			$mensaje .='<div>';
			$mensaje .=		'<h4>'.$title.'</h4>';
			$mensaje .=		'<div>'.$body.'</div>';
			$mensaje .='</div style="border-bottom: 1px solid grey; margin-bottom: 5px">';
		}
		$mensaje .='
			</body>
		</html>
		';
		return $mensaje;
	}
	
	public function sendFilteredNews(){
		$timezone 		= new \DateTimeZone('America/Argentina/Buenos_Aires');
		$date			= new \DateTime('now', $timezone);
		$dateToCompare 	= new \DateTime('now', $timezone);

		
		/*
		 * Armado de envío de novedades por suscripción mensual
		 */
		
		//modifico la fecha de comparación para llevarla a fin de mes
		$dateToCompare->modify('last day of this month');
		
		if ($date->format('Y-m-d') == $dateToCompare->format('Y-m-d')){
			$suscriptores = Suscripciones::findAll(['tipo' => 'mensual']);
			
			$dateToCompare->modify('first day of this month');
			$novedades = Novedades::find()->where(['>=', 'fecha',  $dateToCompare->format('Y-m-d')])->all();
			
			$msg = $this->buildNewsBodyContent($novedades, 'mensuales');
			foreach ($suscriptores as $suscriptor)
				$this->sendMail($suscriptor->mail, 'Novedades de Radioalbum', $msg);
		}
		
		/*
		 * Armado de envío de novedades por suscripción semanal
		*/
		
		//pregunto si el día actual es Domingo
		$dateToCompare = date('l');
		if ($dateToCompare == 'Saturday'){
			$suscriptores = Suscripciones::findAll(['tipo' => 'semanal']);
			
			/*
			 * Obtenemos la fecha actual y le restamos 7 días
			 */
			$dateToCompare 	= new \DateTime('now', $timezone);
			$dateToCompare->sub(new DateInterval('P7D'));
			
			//buscamos las novedades con fecha mayor a la de comparación
			$novedades = Novedades::find()->where(['>', 'fecha',  $dateToCompare->format('Y-m-d')])->all();

			$msg = $this->buildNewsBodyContent($novedades, 'semanales');
			foreach ($suscriptores as $suscriptor)
				$this->sendMail($suscriptor->mail, 'Novedades de Radioalbum', $msg);			
		}	
	}
}
