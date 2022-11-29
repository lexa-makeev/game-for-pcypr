-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 29 2022 г., 18:31
-- Версия сервера: 8.0.31
-- Версия PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `pcyrp`
--

-- --------------------------------------------------------

--
-- Структура таблицы `info`
--

CREATE TABLE `info` (
  `id` int NOT NULL,
  `cost_oborot` int NOT NULL,
  `raiting` float NOT NULL,
  `cost_usluga` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `info`
--

INSERT INTO `info` (`id`, `cost_oborot`, `raiting`, `cost_usluga`) VALUES
(1, 200000, 2.5, 10000);

-- --------------------------------------------------------

--
-- Структура таблицы `usluga`
--

CREATE TABLE `usluga` (
  `id_usluga` int NOT NULL,
  `cost` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `usluga`
--

INSERT INTO `usluga` (`id_usluga`, `cost`) VALUES
(160, 6000),
(161, 10000),
(162, 10000),
(163, 10000),
(164, 10000);

-- --------------------------------------------------------

--
-- Структура таблицы `workers`
--

CREATE TABLE `workers` (
  `id_workers` int NOT NULL,
  `otv` float NOT NULL,
  `jumor` float NOT NULL,
  `kommun` float NOT NULL,
  `new` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `usluga_id_usluga` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `workers`
--

INSERT INTO `workers` (`id_workers`, `otv`, `jumor`, `kommun`, `new`, `usluga_id_usluga`) VALUES
(8, 4.88, 3.62, 3.97, 'false', NULL),
(12, 4.95, 3.67, 3.86, 'false', NULL),
(17, 3.9, 4.61, 2.64, 'true', NULL),
(18, 4.63, 3.25, 2.6, 'true', NULL),
(19, 4.36, 4.23, 2.8, 'true', NULL),
(20, 2.7, 3.7, 2.67, 'true', NULL),
(21, 3.38, 4.9, 4.49, 'true', NULL),
(22, 2.64, 3.36, 3.48, 'true', NULL),
(23, 3.33, 4.17, 4.93, 'true', NULL),
(24, 2.39, 3.35, 2.25, 'true', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `usluga`
--
ALTER TABLE `usluga`
  ADD PRIMARY KEY (`id_usluga`);

--
-- Индексы таблицы `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`id_workers`),
  ADD UNIQUE KEY `usluga_id_usluga_UNIQUE` (`usluga_id_usluga`),
  ADD KEY `fk_workers_usluga_idx` (`usluga_id_usluga`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `usluga`
--
ALTER TABLE `usluga`
  MODIFY `id_usluga` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT для таблицы `workers`
--
ALTER TABLE `workers`
  MODIFY `id_workers` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `workers`
--
ALTER TABLE `workers`
  ADD CONSTRAINT `fk_workers_usluga` FOREIGN KEY (`usluga_id_usluga`) REFERENCES `usluga` (`id_usluga`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
