CREATE DATABASE IF NOT EXISTS `DhSports_db`;
USE `DhSports_db`;


CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(50) NOT NULL,
   `apellido` VARCHAR(50) NOT NULL,
   `email` VARCHAR(50) NOT NULL,
   `contraseña` VARCHAR(255) NOT NULL,
   `categoria` VARCHAR(50) NOT NULL,
   `avatar` VARCHAR(255) NOT NULL,
   `role` VARCHAR(50) NOT NULL,
   `deleted` TINYINT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sizes` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `talle` VARCHAR(20) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `marca` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `precio` INT,
    `descuento` TINYINT,
    `deporteId` INT,
    `marcaId` INT,
    `categoriaId` INT,
    `talleId` INT,
	`colorId` INT,
    `userId` INT,
	`descripcion` TEXT NOT NULL,
    `deleted` TINYINT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `categoria` VARCHAR(50),
   PRIMARY KEY (`id`)
);

CREATE TABLE `sports` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `sport` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `color` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

ALTER TABLE `products` ADD CONSTRAINT `FK_user` FOREIGN KEY (`userId`) REFERENCES `users`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_deporte` FOREIGN KEY (`deporteId`) REFERENCES `sports`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_marca` FOREIGN KEY (`marcaId`) REFERENCES `brands`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_talle` FOREIGN KEY (`talleId`) REFERENCES `sizes`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_categoria` FOREIGN KEY (`categoriaId`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_color` FOREIGN KEY (`colorId`) REFERENCES `colors`(`id`)  ;