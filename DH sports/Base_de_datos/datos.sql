/* SIZES */

INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (1, '8');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (2, '9');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (3, 'XS');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (4, 'S');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (5, 'M');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (6, 'L');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (7, 'XL');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (8, 'XXL');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (9, '33');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (10, '34');
INSERT INTO `dhsports_db`.`sizes` (`id`,`talle`) VALUES (11, '35');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (12, '36');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (13, '37');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (14, '38');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (15, '39');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (16, '40');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (17, '41');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (18, '42');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (19, '43');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (20, '44');
INSERT INTO `dhsports_db`.`sizes` (`id`, `talle`) VALUES (21, '45'); 

/* BRANDS */

INSERT INTO `dhsports_db`.`brands` (`id`,`marca`) VALUES (1,'Adidas');
INSERT INTO `dhsports_db`.`brands` (`id`,`marca`) VALUES (2,'Nike');
INSERT INTO `dhsports_db`.`brands` (`id`,`marca`) VALUES (3,'Everlast');
INSERT INTO `dhsports_db`.`brands` (`id`,`marca`) VALUES (4,'Umbro');
INSERT INTO `dhsports_db`.`brands` (`id`,`marca`) VALUES (5,'Puma');


/* CATEGORIES */

INSERT INTO `dhsports_db`.`categories` (`id`,`categoria`) VALUES (1,'Camisetas');
INSERT INTO `dhsports_db`.`categories` (`id`,`categoria`) VALUES (2,'Botines');
INSERT INTO `dhsports_db`.`categories` (`id`,`categoria`) VALUES (3,'Guantes');
INSERT INTO `dhsports_db`.`categories` (`id`, `categoria`) VALUES (4, 'Otras');

/* SPORTS */

INSERT INTO `dhsports_db`.`sports` (`id`, `sport`) VALUES (1, 'Básquet');
INSERT INTO `dhsports_db`.`sports` (`id`, `sport`) VALUES (2, 'Fútbol');
INSERT INTO `dhsports_db`.`sports` (`id`, `sport`) VALUES (3, 'Boxeo');
INSERT INTO `dhsports_db`.`sports` (`id`, `sport`) VALUES (4, 'Hockey');

/* COLORS */
INSERT INTO `dhsports_db`.`colors` (`id`, `color`) VALUES (1, 'Rojo');
INSERT INTO `dhsports_db`.`colors` (`id`, `color`) VALUES (2, 'Negro');
INSERT INTO `dhsports_db`.`colors` (`id`, `color`) VALUES (3, 'Verde');
INSERT INTO `dhsports_db`.`colors` (`id`, `color`) VALUES (4, 'Azul');
INSERT INTO `dhsports_db`.`colors` (`id`, `color`) VALUES (5, 'Blanco');

/* USERS */

INSERT INTO `dhsports_db`.`users` (`id`,`nombre`,`apellido`,`email`,`contraseña`,`avatar`,`role`,`deleted`) VALUES (1,'Tomas','Figini','tomasfigini79@gmail.com','$2a$10$MXo6xTPFjFxNVj9lSNHBbOTJ1bUvwbBQyzEE2lrBw0URRBccKov8W','systemusers_94754.png','Admin',0);
INSERT INTO `dhsports_db`.`users` (`id`,`nombre`,`apellido`,`email`,`contraseña`,`avatar`,`role`,`deleted`) VALUES (2,'Nicolas','Castiglioni','nicolascastiglioni@gmail.com','$2a$10$MXo6xTPFjFxNVj9lSNHBbOTJ1bUvwbBQyzEE2lrBw0URRBccKov8R','systemusers_94754.png','Admin',0);


/* PRODUCTS */

INSERT INTO `dhsports_db`.`products`(`id`,`nombre`,`precio`,`descuento`,`deporteId`,`marcaId`,`categoriaId`,`talleId`,`colorId`,`userId`,`descripcion`,`deleted`,`imagen`) VALUES(1, 'camiseta Argentina', 20000, 10, 2, 1, 1, 5, 5, 1, 'camiseta campeon oficial 3 estrellas', 0,'Camiseta-Argentina.png');
INSERT INTO `dhsports_db`.`products`(`id`,`nombre`,`precio`,`descuento`,`deporteId`,`marcaId`,`categoriaId`,`talleId`,`colorId`,`userId`,`descripcion`,`deleted`,`imagen`) VALUES(2, 'botin preator', 30000, 20, 2, 1, 1, 19, 4, 2, 'botines preator azules', 0,'botines-rugby.jpg');
INSERT INTO `dhsports_db`.`products`(`id`,`nombre`,`precio`,`descuento`,`deporteId`,`marcaId`,`categoriaId`,`talleId`,`colorId`,`userId`,`descripcion`,`deleted`,`imagen`) VALUES(3, 'guantes everlast', 6000, 0, 3, 3, 3, 2, 1, 1, 'guentes de boxeo everlast', 0),'guantes-imagen3.webp';
INSERT INTO `dhsports_db`.`products`(`id`,`nombre`,`precio`,`descuento`,`deporteId`,`marcaId`,`categoriaId`,`talleId`,`colorId`,`userId`,`descripcion`,`deleted`,`imagen`) VALUES(4, 'palo de hockey', 15000, 10, 4, 1, 4, null, 3, 2, 'palo de Hockey para cesped', 0,'Hockey.jpg');
INSERT INTO `dhsports_db`.`products`(`id`,`nombre`,`precio`,`descuento`,`deporteId`,`marcaId`,`categoriaId`,`talleId`,`colorId`,`userId`,`descripcion`,`deleted`,`imagen`) VALUES(5, 'pelota al rihla', 10000, 0, 2, 1, 4, null, 5, 1, 'pelota oficial del mundial qatar 2022', 0,'pelota-imagen3.jpg');