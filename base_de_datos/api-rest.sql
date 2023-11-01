-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-11-2023 a las 20:23:28
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api-rest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--
-- Creación: 26-10-2023 a las 05:22:57
-- Última actualización: 01-11-2023 a las 19:05:16
--

CREATE TABLE `libros` (
  `Id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año_publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`Id`, `nombre`, `autor`, `categoria`, `año_publicacion`, `ISBN`) VALUES
(1, 'El corazón de la piedra', 'José María García López', 'Novela', '0000-00-00', '978-84-939750'),
(2, 'Salmos de Visperas', 'Esteban Hernandéz Castelló', 'Historia', '0000-00-00', '84 932914 8 X'),
(3, 'Tomás Luis de Victoria', 'Eugene Casjen Cramer', 'Historia', '0000-00-00', '0 8153 2096 5'),
(4, 'La polifonía clásica', 'Samuel Rubio', 'Másica', '0000-00-00', '92 8255 2096 '),
(5, 'Cien años de soledad', 'Gabriel García Marquez', 'Novela', '0000-00-00', '978-84-9759-2'),
(6, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 'Novela', '0000-00-00', '658-84-9759-2'),
(7, 'El Principito', 'Antoine de Saint-Exupéry', 'Literatura Infantil', '0000-00-00', '888-84-9759-2'),
(8, 'El retrato de Dorian Grey', 'Oscar Wilde', 'Novela', '0000-00-00', '856-94-9159-3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
