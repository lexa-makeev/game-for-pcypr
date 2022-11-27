-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 27 2022 г., 14:37
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
(1, 200000, 4.9, 6000);

-- --------------------------------------------------------

--
-- Структура таблицы `usluga`
--

CREATE TABLE `usluga` (
  `id_usluga` int NOT NULL,
  `workers_id_workers` int DEFAULT NULL,
  `cost` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `usluga`
--

INSERT INTO `usluga` (`id_usluga`, `workers_id_workers`, `cost`) VALUES
(2, NULL, 10000),
(3, NULL, 10000),
(4, NULL, 10000),
(5, NULL, 10000),
(6, NULL, 10000),
(7, NULL, 10000),
(8, NULL, 10000),
(9, NULL, 6000);

-- --------------------------------------------------------

--
-- Структура таблицы `workers`
--

CREATE TABLE `workers` (
  `id_workers` int NOT NULL,
  `otv` float NOT NULL,
  `jumor` float NOT NULL,
  `kommun` float NOT NULL,
  `new` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `workers`
--

INSERT INTO `workers` (`id_workers`, `otv`, `jumor`, `kommun`, `new`) VALUES
(1, 4.15, 4.22, 4.74, 'false'),
(8, 4.8, 4.22, 2.82, 'true'),
(9, 4.94, 3.27, 3.74, 'true');

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
  ADD PRIMARY KEY (`id_usluga`),
  ADD UNIQUE KEY `workers_id_workers_UNIQUE` (`workers_id_workers`),
  ADD KEY `fk_usluga_workers1_idx` (`workers_id_workers`);

--
-- Индексы таблицы `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`id_workers`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `usluga`
--
ALTER TABLE `usluga`
  MODIFY `id_usluga` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `workers`
--
ALTER TABLE `workers`
  MODIFY `id_workers` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `usluga`
--
ALTER TABLE `usluga`
  ADD CONSTRAINT `fk_usluga_workers1` FOREIGN KEY (`workers_id_workers`) REFERENCES `workers` (`id_workers`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
