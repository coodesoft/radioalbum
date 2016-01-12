-- phpMyAdmin SQL Dump
-- version 3.3.7deb7
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 12-01-2016 a las 13:04:05
-- Versión del servidor: 5.5.38
-- Versión de PHP: 5.4.41-1~dotdeb+6.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `radioalbum`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estaticas`
--

CREATE TABLE IF NOT EXISTS `estaticas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `cuerpo` text NOT NULL,
  `opciones` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcar la base de datos para la tabla `estaticas`
--

INSERT INTO `estaticas` (`id`, `titulo`, `cuerpo`, `opciones`) VALUES
(1, 'Nosotros', '<p><br></p><p><br></p><p><br></p><strong></strong><p>RadioAlbum&nbsp;&nbsp;&nbsp; Hacela tuya</p><p><br></p><p>Conectate a las colecciones de discos completos en</p><p><br></p><p><a data-cke-saved-href="http://www.radioalbum.com.ar/" href="http://www.radioalbum.com.ar/">www.radioalbum.com.ar</a></p><p><br></p><p>Explorando y recorriendo los canales día a día renovados</p><p><br></p><p>RadioAlbum un universo musical en expansión!!!</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>', 'ninguna en particular');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) DEFAULT NULL,
  `cuerpo` text,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=106 ;

--
-- Volcar la base de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `cuerpo`, `fecha`) VALUES
(54, 'Nuevos discos', '<p>GOGOL BORDELLO balc&aacute;nicos y rockeros en el canal ROCK</p>\r\n', '2015-03-20'),
(55, 'JAZZ ', '<p>Lee Morgan The cooker sonando&nbsp;</p>\r\n', '2015-03-20'),
(56, 'Radio Fantasma', '<p>El canal para el indie en espa&ntilde;ol de Radio Album&nbsp;</p>\r\n', '2015-03-20'),
(57, 'Los elegidos de Patti Smith', '<p>Doce canciones en la versi&oacute;n de Patti Smith, de Hendrix a Nirvana. En el canal Rock de la radio</p>\r\n', '2015-03-24'),
(58, 'Nacional e independiente', '<p>Bandas argentinas de producci&oacute;n independiente sonando en Radio Fantasma.&nbsp;</p>\r\n', '2015-03-24'),
(59, 'Canal NOVEDADES', '<p>Escuch&aacute; en el canal novedades una selecci&oacute;n de los discos m&aacute;s recientes del cat&aacute;logo&nbsp;</p>\r\n', '2015-04-08'),
(60, 'Reggae Dub', '<p>Explor&aacute; el canal Reggae de Radioalbum y disfrut&aacute; de la mejor selecci&oacute;n de discos</p>\r\n', '2015-04-09'),
(61, 'Jazz', '<p>Desde Billie Holiday a Ornette Coleman, grandes discos del jazz de todos los tiempos en Radioalbum</p>\r\n', '2015-04-09'),
(62, 'Daniel Johnston', '<p>Un compilado para conocer el&nbsp;enigmatico mundo de Daniel Johnston y sus canciones de cassette</p>\r\n\r\n<p>En el canal INDIE de RadioAlbum</p>\r\n', '2015-04-10'),
(63, 'Explosión de garaje salvaje', '<p>Los Peyotes, banda salvaje por esencia suena en Radio Fantasma, nuestro canal para las bandas independientes&nbsp;</p>\r\n', '2015-04-13'),
(64, 'Radio Fantasma', '<p>Es nuestro canal para las banda independientes que cantan en espa&ntilde;ol.</p>\r\n\r\n<p>Bandas de Argentina Espa&ntilde;a y otros rincones de ibaroam&eacute;rica&nbsp;</p>\r\n\r\n<p>Encontrala en RadioAlbum</p>\r\n', '2015-04-13'),
(65, 'Canal Rock', '<p>Nuevos discos se suman todos los d&iacute;as en nuestro canal Rock</p>\r\n\r\n<p>Hoy Fugazi, Beck, Eddie Vedder y m&aacute;s</p>\r\n', '2015-04-14'),
(66, 'Indie indie', '<p>Nuevos discos en el canal Indie de RadioAlbum hoy se suman The Futureheads, Ride y m&aacute;s</p>\r\n\r\n<p>Descubrilos con el selector de canales</p>\r\n', '2015-04-15'),
(67, 'Desde España', '<p>En el canal&nbsp;Radio Fantasma podes encontrar discos de&nbsp;bandas independientes espa&ntilde;olas&nbsp;</p>\r\n\r\n<p>Descubrilos en RadioAlbum</p>\r\n', '2015-04-16'),
(68, 'MIngus', '<p>Trep&aacute; al Mingus Tree en el canal Jazz de</p>\r\n\r\n<p>RadioAlbum</p>\r\n', '2015-04-16'),
(69, 'REGGAE', '<p>En nuestro canal Reggae podes escuchar los mejores discos.. Explorala en RadioAlbum</p>\r\n\r\n<p>&nbsp;</p>\r\n', '2015-04-20'),
(70, 'Punk rock en RadioAlbum', '<p>En el canal Rock podes escuchar The Clash Joy Division The Stranglers y mucho m&aacute;s.</p>\r\n', '2015-04-21'),
(71, 'Nuevos discos todos los días!!!', '<p>Nuevos discos en el canal Indie y lo mejor del indie en espa&ntilde;ol en el canal Radio Fantasma</p>\r\n\r\n<p>Descubrilos en RadioAlbum</p>\r\n\r\n<p>HACELA TUYA!!!!</p>\r\n', '2015-04-23'),
(72, 'Rock + Punk + Alternativo', '<p>En el canal Rock de RadioAlbum podes escuchar discos de Pixies, Johnny Thunders, Joe Strummer y muchos m&aacute;s..</p>\r\n\r\n<p>Descubrilos en RadioAlbum</p>\r\n', '2015-04-27'),
(73, 'Canal INDIE', '<p>En el canal Indie podes escuchar The Vaselines, The Coral, Wavves y muchos discos m&aacute;s</p>\r\n\r\n<p>DESCUBRILOS EN RadioAlbum!!!!!</p>\r\n', '2015-04-28'),
(74, 'Bowie and Pixies', '<p>En el canal Rock de RadioAlbum podes escuchar Heathen de David Bowie, el disco en el que toca un cover de Pixies.</p>\r\n\r\n<p>Descubrilo en RadioAlbum</p>\r\n', '2015-04-30'),
(75, 'Siempre creciendo ', '<h2>Todos los d&iacute;as nuevos discos...hoy en el canal Rock: Patti Smith, New York Dolls, Pavement y mucho m&aacute;s.</h2>\r\n\r\n<h2>DESCUBRILOS EN RadioAlbum!!!!!</h2>\r\n', '2015-05-04'),
(76, 'Indie en RadioAlbum', '<h2>En la radio podes encontrar una selecci&oacute;n de discos completos renovados todos los d&iacute;as.</h2>\r\n\r\n<h1>RadioAlbum &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hacela Tuya!!!</h1>\r\n', '2015-05-06'),
(77, 'Clásicos en RadioAlbum', '<p>En nuestros canales podes escuchar Talking Heads (77), Meat Puppets (Too high to die), y mucho m&aacute;s..</p>\r\n\r\n<p>Descubrilos en el canal Rock de RadioAlbum</p>\r\n\r\n<p>HACELA TUYA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>\r\n', '2015-05-11'),
(78, 'Nina Simone', '<p>En el canal Jazz podes escuchar a Nina Simone, Fela Kuti, Charles Mingus y mucho m&aacute;s</p>\r\n\r\n<p>RadioAlbum Hacela Tuya!!!!!!</p>\r\n', '2015-05-12'),
(79, 'Nuevos en el canal Rock', '<p>Encontr&aacute; a The Jam, Patti Smith. The Hives y mucho m&aacute;s en RadioAlbum</p>\r\n', '2015-05-16'),
(80, 'Reggae celta', '<p>Escuch&aacute; en el canal Reggae de RadioAlbum el disco completo de The Trojans y su Ska con gaitas</p>\r\n\r\n<p>&nbsp;</p>\r\n', '2015-05-20'),
(81, 'Sonidos independientes', '<h1>Nuevos discos de bandas independientes argentinas suenan en RadioAlbum</h1>\r\n\r\n<h1>HacelaTuya!!!&nbsp;</h1>\r\n', '2015-05-21'),
(82, 'Canal Indie en RadioAlbum', '<p>En el canal indie se suman discos todos los dias, hoy King Khan, Citizen y Vetiver</p>\r\n\r\n<p>Descubrilos en RadioAlbum</p>\r\n', '2015-05-26'),
(83, 'Canal ROCK de RadioAlbum', '<h1>Jon Spencer Blues Explosion , Dream Syndicate - Morrissey Kula Shaker y otros discos se suman a nuestro canal ROCK hoy</h1>\r\n\r\n<p>&nbsp;</p>\r\n', '2015-05-27'),
(84, 'Nuevos nuevos', '<h2>Nuevos discos en RadioAlbum This is The Sonics y Sonics Highways de Foo Fighters&nbsp;</h2>\r\n', '2015-06-01'),
(85, 'Dub sideral', '<h2>U-Roy y King Tubby en nuestro canal REGGAE&nbsp;</h2>\r\n\r\n<h1>Disfrutalos en RadioAlbum!!!</h1>\r\n', '2015-06-05'),
(86, 'Más indie en RadioAlbum', '<h1>Veronica Falls - The Dodos - Thee Oh Sees y mucho m&aacute;s en el gran canal INDIE de RadioAlbum</h1>\r\n\r\n<h1>HACELA TUYA!!!!</h1>\r\n', '2015-06-08'),
(87, 'Recién salidos ', '<h1>Noel Gallagher y Paul Weller suenan en el canal ROCK de</h1>\r\n\r\n<h1>RadioAlbum</h1>\r\n\r\n<p>&nbsp;</p>\r\n', '2015-06-09'),
(88, 'Siempre nuevos discos', '<h1>Yo La Tengo - Stiv Bators - Teenage Fanclub y m&aacute;s discos se sumaron a</h1>\r\n\r\n<h1>RadioAlbum</h1>\r\n', '2015-06-15'),
(89, 'Dr Feelgood y el Jetty', '<h1>Dr Feelgood y su primer disco Down by the jetty suena en RadioAlbum</h1>\r\n\r\n<h2>Encontralo en el canal Rock y en Novedades</h2>\r\n', '2015-06-18'),
(90, 'Todos los días nuevos discos', '<h1>Strokes , Radio Birdman, Byron Lee y mucho m&aacute;s en los variados canales de RadioAlbum</h1>\r\n', '2015-06-19'),
(91, ' Nuevos discos en el canal ROCK', '<h1>The Animals - Violent Femmes - The Ventures - Los Natas y m&aacute;s se sumaron hoy a las selecciones de RadioAlbum</h1>\r\n', '2015-06-22'),
(92, 'Bandas independientes en RadioAlbum', '<h1>Bandas argentinas independientes en RadioAlbum</h1>\r\n\r\n<h1>Aguas T&oacute;nicas - Los Nuevos Monstruos - Riel - Kill West y m&aacute;s</h1>\r\n', '2015-06-30'),
(93, 'Clásicos del jazz', '<h1>Algunos incunables del jazz suenan en RadioAlbum</h1>\r\n\r\n<h1>Mingus Ah Um</h1>\r\n\r\n<h1>Dave Brubeck Time out</h1>\r\n\r\n<h1>y m&aacute;s</h1>\r\n', '2015-07-07'),
(94, 'Novedades desde España', '<h1>Univers y Novedades Carminha dos bandas de Barcelona que suenan en la radio fantasma de RadioAlbum</h1>\r\n', '2015-07-11'),
(95, 'Jazz , Rock, reggae y mucho más', '<h1>Descubr&iacute; los canales de RadioAlbum y su diversidad</h1>\r\n', '2015-07-20'),
(96, 'Nuevos discos y nuevas bandas', '<h1>Nuevas bandas en RadioAlbum</h1>\r\n\r\n<h1>The Duppies - The Bluebeaters - Los Accidentes y m&aacute;s&nbsp;</h1>\r\n', '2015-07-27'),
(97, 'Joyas argentinas - Discos recuperados', '<h1>- Los Pillos y su sonido Joy Division volviendo desde los ochenta</h1>\r\n\r\n<h1>- Historia del crimen y su rockabilly de alta gama</h1>\r\n\r\n<h1>Todo suena en RadioAlbum</h1>\r\n', '2015-08-03'),
(98, 'CLÁSICOS ', '<h1>L.A Woman (The Doors) - Closer (Joy Division) - Travel with your mind (The Seeds)</h1>\r\n\r\n<h1>y otros bellos discos en RadioAlbum</h1>\r\n', '2015-08-26'),
(99, 'SUPER REGGAE DUB', '<h1>EN EL CANAL REGGAE ENCONTR&Aacute; UNA SELECCI&Oacute;N DE DISCOS CL&Aacute;SICOS DE REGGAE SKA Y DUB</h1>\r\n', '2015-09-08'),
(100, 'DISCOS INDISPENSABLES ', '<h1>ENCONTR&Aacute; EN LAS BATEAS DE RADIOALBUM ESOS DISCOS A LOS QUE SIEMPRE SE VUELVE....</h1>\r\n', '2015-09-14'),
(101, 'RADIOALBUM HACELA TUYA!!', '<h2>Encontr&aacute; en nuestros canales la selecci&oacute;n de discos para musicalizar tu d&iacute;a.</h2>\r\n', '2015-10-12'),
(102, 'Siempre creciendo', '<h1>Nuestra selecci&oacute;n de discos crece todos los d&iacute;as, descubrilos navegando nuestros canales.</h1>\r\n', '2015-12-09'),
(103, 'REGGAE Y DUB EN RADIOALBUM', '<h1>CLIMA IDEAL PARA UNA TARDE DE REGGAE Y UNA NOCHE DE DUB ESPACIAL. DESCUBR&Iacute; LA MAGIA DE LAS MAQUINAS DE KING TUBBY EN NUESTRO CANAL REGGAE</h1>\r\n', '2015-12-16'),
(104, 'Bandas independientes en RadioAlbum', '<h1>Ok Piramides - Valle de Mu&ntilde;ecas - Los Freneticos - Rayos Laser y otras bandas independientes argentinas suenan en RadioAlbum</h1>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h1>Hacela Tuya!!</h1>\r\n', '2015-12-21'),
(105, 'Novedades en Enero', '<h1>Siempre sumando discos a nuestro cat&aacute;logo.</h1>\r\n\r\n<h1>Ramones - End of the century</h1>\r\n\r\n<h1>Luna - Romantica</h1>\r\n\r\n<h1>Soul Syndicate - Dub Classics&nbsp;</h1>\r\n\r\n<h1>Boom Pam - Boom Pam</h1>\r\n\r\n<h1>The Bristol Reggae Explosion 1978-1983</h1>\r\n', '2016-01-05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripciones`
--

CREATE TABLE IF NOT EXISTS `suscripciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `verificado` tinyint(1) NOT NULL,
  `codigo` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=30 ;

--
-- Volcar la base de datos para la tabla `suscripciones`
--

INSERT INTO `suscripciones` (`id`, `mail`, `nombre`, `tipo`, `verificado`, `codigo`) VALUES
(28, 'maikndawer@gmail.com', 'laion diaz', 'semanal', 1, '8981a92bca36bbedabb30cc07a3a9cf8'),
(29, 'albertogagetti@gmail.com', 'Alberto Gagetti', 'semanal', 0, 'faaf8c0a04f1661393e07774d0b373b3');
