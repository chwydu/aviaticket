-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 12 2020 г., 16:17
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `aviaticket`
--

-- --------------------------------------------------------

--
-- Структура таблицы `airport`
--

CREATE TABLE `airport` (
  `airportID` int(11) NOT NULL,
  `airport` varchar(255) DEFAULT NULL COMMENT 'аэропорт',
  `index_airport` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `landingSite` varchar(30) DEFAULT NULL COMMENT 'места посадки',
  `arrivalLocations` varchar(30) DEFAULT NULL COMMENT 'места прилетов',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'город'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `airport`
--

INSERT INTO `airport` (`airportID`, `airport`, `index_airport`, `landingSite`, `arrivalLocations`, `city`) VALUES
(1, 'ppe', NULL, 'perm', 'domodedovo', 'moscow'),
(2, NULL, NULL, 'pulkovo', NULL, 'moscow'),
(3, NULL, NULL, 'pulkovo', NULL, 'moscow'),
(4, NULL, NULL, 'pulkovo', NULL, 'moscow');

-- --------------------------------------------------------

--
-- Структура таблицы `flight`
--

CREATE TABLE `flight` (
  `city_of_departure` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_of_arrival` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_of_departure` date DEFAULT NULL,
  `data_of_arrival` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `polsovatel`
--

CREATE TABLE `polsovatel` (
  `clientID` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL COMMENT 'полное имяя',
  `dateOfBirth` date NOT NULL COMMENT 'дата рождения',
  `mail` varchar(50) NOT NULL COMMENT 'почта',
  `telephone` varchar(50) NOT NULL COMMENT 'телефон',
  `documents` varchar(50) NOT NULL COMMENT 'документ',
  `vsa` varchar(50) NOT NULL COMMENT 'виза'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `polsovatel`
--

INSERT INTO `polsovatel` (`clientID`, `fullName`, `dateOfBirth`, `mail`, `telephone`, `documents`, `vsa`) VALUES
(2, 'Spanch BOB', '1999-06-22', 'moscow@mail.ru', '19507882266', '5714 200333', 'true');

-- --------------------------------------------------------

--
-- Структура таблицы `ticket`
--

CREATE TABLE `ticket` (
  `ticketid` int(11) NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clientid` int(11) DEFAULT NULL,
  `city_of_departure` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `city_of_arrival` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data_of_departure` date DEFAULT NULL,
  `data_of_arrival` date DEFAULT NULL,
  `flightid` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `boocking_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cost` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `place_number` int(11) DEFAULT NULL,
  `luggage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `place_class` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `airportid` int(11) DEFAULT NULL,
  `index_airport` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `ticket`
--

INSERT INTO `ticket` (`ticketid`, `fullname`, `clientid`, `city_of_departure`, `city_of_arrival`, `data_of_departure`, `data_of_arrival`, `flightid`, `boocking_code`, `cost`, `place_number`, `luggage`, `place_class`, `airportid`, `index_airport`) VALUES
(1, 'Spanch BOB', NULL, NULL, 'moscow', '2020-06-12', '2020-07-12', NULL, 'FGKJO20', '5000', 20, 'true', 'premium', NULL, NULL),
(2, 'Spanch BOB', NULL, 'perm', 'moscow', '2020-06-12', '2020-07-12', NULL, 'FGKJO20', '5000', 20, 'true', 'premium', NULL, NULL),
(3, NULL, NULL, 'moscow', 'perm', '2020-11-02', '2020-11-05', NULL, NULL, NULL, NULL, NULL, '', NULL, NULL),
(4, NULL, NULL, 'perm', 'moscow', '2020-11-01', '2020-11-03', NULL, NULL, NULL, NULL, NULL, '', NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `airport`
--
ALTER TABLE `airport`
  ADD PRIMARY KEY (`airportID`),
  ADD KEY `airport` (`airport`,`index_airport`),
  ADD KEY `city` (`city`);

--
-- Индексы таблицы `flight`
--
ALTER TABLE `flight`
  ADD KEY `city_of_departure` (`city_of_departure`,`city_of_arrival`),
  ADD KEY `city_of_arrival` (`city_of_arrival`);

--
-- Индексы таблицы `polsovatel`
--
ALTER TABLE `polsovatel`
  ADD PRIMARY KEY (`clientID`),
  ADD KEY `fullName` (`fullName`);

--
-- Индексы таблицы `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ticketid`),
  ADD KEY `clientid` (`clientid`),
  ADD KEY `fullname` (`fullname`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `airport`
--
ALTER TABLE `airport`
  MODIFY `airportID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `polsovatel`
--
ALTER TABLE `polsovatel`
  MODIFY `clientID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ticketid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `flight_ibfk_1` FOREIGN KEY (`city_of_arrival`) REFERENCES `airport` (`city`),
  ADD CONSTRAINT `flight_ibfk_2` FOREIGN KEY (`city_of_departure`) REFERENCES `airport` (`city`);

--
-- Ограничения внешнего ключа таблицы `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`clientid`) REFERENCES `polsovatel` (`clientID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
