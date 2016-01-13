<?php

namespace app\commands;

use app\modules\EditorPaginas\models\Novedades;
use app\modules\suscriptor\models\Suscripciones;
use yii\console\Controller;


class ConsoleController extends Controller {

	public function sendMail($to, $title, $msg){
		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$cabeceras .= 'From: Radioalbum <soporte@radioalbum.com.ar>' . "\r\n";
	
		mail($to, $title, $msg, $cabeceras);
	
	}
    
    public function buildNewsBodyContent($novedades, $type){
    	$mensaje = '
		<html>
			<head><title>Novedades '.$type.' de Radioalbum</title></head>
			<body>
		';
    	foreach($novedades as $novedad){
    		$title = $novedad->titulo;
    		$body = $novedad->cuerpo;
    		$mensaje .='<div style="border-bottom: 1px solid grey; margin-bottom: 5px">';
    		$mensaje .=		'<h3>'.$title.'</h3>';
    		$mensaje .=		'<div>'.$body.'</div>';
    		$mensaje .='</div >';
    	}
    	$mensaje .='
			</body>
		</html>
		';
    	return $mensaje;
    }

    public function actionMail(){
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
    			
    		//si hay novedades para enviar
    		if (count($novedades)>0){
	    		$msg = $this->buildNewsBodyContent($novedades, 'mensuales');
	    		foreach ($suscriptores as $suscriptor)
	    			$this->sendMail($suscriptor->mail, 'Novedades de Radioalbum', $msg);
    		}
    	}
    
    	/*
    	 * Armado de envío de novedades por suscripción semanal
    	*/
    
    	//pregunto si el día actual es Domingo
    	$dateToCompare = date('N');
    	if ($dateToCompare == '7'){
    		$suscriptores = Suscripciones::findAll(['tipo' => 'semanal']);
    			
    		/*
    		 * Obtenemos la fecha actual y le restamos 7 días
    		*/
    		$dateToCompare 	= new \DateTime('now', $timezone);
    		$dateToCompare->sub(new \DateInterval('P7D'));
    			
    		//buscamos las novedades con fecha mayor a la de comparación
    		$novedades = Novedades::find()->where(['>', 'fecha',  $dateToCompare->format('Y-m-d')])->all();
    
    		//si hay novedades para enviar
    		if (count($novedades)>0){
	    		$msg = $this->buildNewsBodyContent($novedades, 'semanales');
	    		foreach ($suscriptores as $suscriptor)
	    			$this->sendMail($suscriptor->mail, 'Novedades de Radioalbum', $msg);
    		}
    	}
    }

}
