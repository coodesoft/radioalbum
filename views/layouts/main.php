<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-69944354-1', 'auto');
  ga('send', 'pageview');

</script>
	<?php $this->head() ?>
</head>
<body>

<?php $this->beginBody() ?>
    <div class="wrap">
        <?php
            
            NavBar::begin([
                'brandLabel' => 'Radio Album',
                'brandUrl' => ['/webplayer/wp/index'],
                'options' => ['class' => 'navbar-inverse navbar-fixed-top',],
            ]);
            if (!Yii::$app->user->isGuest) {
                echo Nav::widget([
                'options' => ['class' => 'navbar-nav navbar-right'],
                'items' => [
                    ['label' => 'Inicio', 'url' => ['/site/index']],
                    ['label' => 'Novedades', 'url' => ['/novedades']],
                    ['label' => 'Nosotros', 'url' => ['/estatica/nosotros']],
                    ['label' => 'Contacto', 'url' => ['/site/contact'],'options' =>['class'=>'']],
                    ['label' => 'Administrador',
                        'items' => [
                            ['label' => 'Editor de canciones', 'url' => ['/tageditor'], 'options' => ['class' => 'blanco']],
                            ['label' => 'Editor de páginas', 'url' => ['/editor-paginas'], 'options' => ['class' => 'blanco']],
                            ['label' => 'Logout (' . Yii::$app->user->identity->username . ')','url' => ['/site/logout'],'linkOptions' => ['data-method' => 'post'], 'options' => ['class' => 'blanco']],
                        ],
                    ],
                ],
            ]);
            } else {
                echo Nav::widget([
                'options' => ['class' => 'navbar-nav navbar-right'],
                'items' => [
                    ['label' => 'Inicio', 'url' => ['/site/index']],
                    ['label' => 'Novedades', 'url' => ['/novedades']],
                    ['label' => 'Nosotros', 'url' => ['/estatica/nosotros']],
                    ['label' => 'Contacto', 'url' => ['/site/contact'],'options' =>['class'=>'']],    
                ],
            ]);
            }
            
            NavBar::end();
        ?>

        <div class="container">
            <?= $content ?>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p class="pull-right">Desarrollado por Coodesoft</p>
        </div>
    </footer>

<?php $this->endBody() ?>
<div id="dinamic-assets" style="display:none;"></div>
</body>
</html>
<?php $this->endPage() ?>
