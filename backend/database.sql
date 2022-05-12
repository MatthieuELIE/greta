-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`username`, `password`) VALUES
('admin', 'admin');

--
-- Structure de la table `daily`
--

DROP TABLE IF EXISTS `daily`;

CREATE TABLE `daily` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `objectives` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `weekly`
--

DROP TABLE IF EXISTS `weekly`;

CREATE TABLE `weekly` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `objectives` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `random`
--

DROP TABLE IF EXISTS `random`;

CREATE TABLE `random` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `objectives` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
