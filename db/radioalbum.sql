-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-02-2015 a las 17:37:45
-- Versión del servidor: 5.5.41-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


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
-- Volcado de datos para la tabla `estaticas`
--

INSERT INTO `estaticas` (`id`, `titulo`, `cuerpo`, `opciones`) VALUES
(1, 'Nosotros', '<p><br></p><p><br></p><p><br></p><p><strong>Desde RadioAlbum </strong>podrás enviar un mensaje musicalizado a tus amistades recomendando canciones y bandas.&nbsp;</p><div><p>Los canales de RadioAlbuhm están dedicados a un amplio, libre y novedoso espectro de tendencias pop, rock e indie.&nbsp;</p><p>Además de las compilaciones encontrarás un canal dedi<span style="font-family:verdana,geneva,sans-serif">cado a un a</span>lbum o un artista.</p><p>RadioAlbum además colaborará ayudando a difundir la obra de artistas independientes a través de nuestra página, consultá en: ####&nbsp;</p><p>También estamos desarrollando una tienda ecléctica donde podrás encontrar accesorios de computación y audio y expresiones artistícas en diversos formatos.</p><p>Esperamos que disfrutes participando de <em>RadioAlbum.</em></p></div><div><h3><br></h3></div><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>', 'ninguna en particular');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=51 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `cuerpo`, `fecha`) VALUES
(20, 'fdgdfgdfgdfgd', '<p>jhghjghjghjghjghjgasd ad asd sd</p>\r\n', '2015-02-12'),
(21, 'fgjjhgfjgfjh', 'gfjgfjgfjgfjfgjgfjfgjfg', '2015-02-12'),
(22, 'fghfghfhfdh', 'fdhfdhfdghfdhfdghfddfhdfh', '2015-02-12'),
(23, 'ddd', 'dddd', '2015-02-12'),
(24, 'jjjjjk', 'kkkkuuiuiuiu', '2015-02-12'),
(25, 'qqqqqq', 'rrrrr', '2015-02-12'),
(26, 'tttttt', 'uuuuuu', '2015-02-12'),
(27, 'ooooo', 'oasas', '2015-02-12'),
(28, 'bbbbbb', 'nnnnn', '2015-02-12'),
(29, 'hjjhjhj', 'ggggg', '2015-02-12'),
(30, 'ioioioioio', 'uiuiuiui', '2015-02-12'),
(31, 'opopopo', 'oooo', '2015-02-12'),
(32, '67676', 'yjhnbn', '2015-02-12'),
(33, '234324', 'nmmnmnm', '2015-02-12'),
(34, '2324234', '11213123', '2015-02-12'),
(35, '567567567', '3433345', '2015-02-12'),
(36, 'er3e', 'fhjgh', '2015-02-12'),
(37, 'descubrimos un nuevo gorila...', '<b>Los gorilas (género Gorilla) son primates herbívoros</b> que habitan los bosques de África central. Es el más grande de los primates vivos. Su ADN está compuesto de 3.041.976.159 pares de bases que codifican 20.962 genes proteicos compuestos de 237.216 exones.1 Su ADN es un 97%–98% igual al humano, siendo el más cercano a éste después de las dos especies de chimpancé.\r\n\r\nEl físico y misionero estadounidense Thomas Staughton Savage fue el primero en describir el gorila occidental, al que llamó Troglodytes gorilla, en 1847 a partir de especímenes obtenidos en Liberia. El nombre es derivado de la palabra griega ???????? (gorillai), que designaba a una «tribu de mujeres peludas», pero también de hombres con cola de caballo que, portando antorchas, asaltaban los barcos y torturaban y violaban a las mujeres que los marineros les ofrecían, descrita por Hannón el Navegante.', '2015-02-12'),
(38, 'Ahora vamos a hacer una prueba con el complemento ', '<p>apretando retur</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>ahora negrita </strong><em>ahora&nbsp;italic <sub>ahora italic y subindice</sub></em></p>\r\n\r\n<p><em><sub><span dir="ltr" lang="es"><a href="http://localhost/basic/web/index.php/PagEdit/novedades/create">http://localhost/basic/web/index.php/PagEdit/novedades/create</a>&nbsp;</span></sub></em></p>\r\n\r\n<p style="text-align: center;"><em><sub><span dir="ltr" lang="es">ahora centrado!</span></sub></em></p>\r\n\r\n<p style="text-align: center;">&nbsp;</p>\r\n\r\n<p style="text-align: center;">&nbsp;</p>\r\n', '2015-02-13'),
(39, 'prueba con img', '<p><img alt="img de prueba" src="http://www.fmdelriotunuyan.com.ar/sites/default/files/precio-barato-seguro-auto234588.jpg" style="height:56px; width:100px" /></p>\r\n', '2015-02-13'),
(44, 'probando 2', '<p>sss</p>\r\n', '2015-02-17'),
(45, 'prueba3', '<blockquote>\r\n<p>sssssssssss<em>dddddddddddddddd</em>ddddddddddddddddddd<strong>ssssssssssssssssssddddddddd</strong></p>\r\n</blockquote>\r\n\r\n<p>&nbsp;</p>\r\n', '2015-02-17'),
(50, 'ahora otra prueba ', '<p>el objetivo es ver que no se redirija &nbsp;a la vista view de este campo una vez terminado de escribir el texto</p>\r\n', '2015-02-17');

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
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `suscripciones`
--

INSERT INTO `suscripciones` (`id`, `mail`, `nombre`, `tipo`, `verificado`) VALUES
(8, 'wqdqwd', 'qwdqwd', 'semanal', 0),
(9, 'maikndawer@gmail.com', 'leonardo', 'mensual', 0),
(10, 'asd', 'asd', 'semanal', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
