/*DROP DATABASE dbLaGaleria;*/

CREATE DATABASE dbLaGaleria;

USE dbLaGaleria;

CREATE TABLE roles 
(id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
 );
 
 CREATE TABLE varieties
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 PRIMARY KEY (id)
 );
 
  CREATE TABLE categories
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 PRIMARY KEY (id)
 );
 
   CREATE TABLE payments
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 type VARCHAR(50) NOT NULL,
 PRIMARY KEY (id)
 );
 
 CREATE TABLE products
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 varietyId INT (10) UNSIGNED NOT NULL,
 description VARCHAR(200),
 price DECIMAL(10,2),
 categoryId INT (10) UNSIGNED NOT NULL,
 quantity INT (5),
 image VARCHAR(100),
PRIMARY KEY (id),
FOREIGN KEY (varietyId) REFERENCES varieties (id),
FOREIGN KEY (categoryId) REFERENCES categories (id)
 );
 
  CREATE TABLE promotions
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 description VARCHAR(400),
 price DECIMAL(10,2),
 quantity INT (5),
 image VARCHAR(100),
PRIMARY KEY (id)
 );
 
   CREATE TABLE users
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 lastName VARCHAR(50),
 email VARCHAR(50) NOT NULL,
 password VARCHAR(60) NOT NULL,
 image VARCHAR(100),
 roleID INT (10) unsigned NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (roleID) REFERENCES roles (id)
 );
 
   CREATE TABLE orders
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 userID INT (10) unsigned NOT NULL,
 date DATETIME,
 total DECIMAL(10,2),
PRIMARY KEY (id),
FOREIGN KEY (userID) REFERENCES users (id)
 );
 
    CREATE TABLE ordersItems
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 usersID INT (10) unsigned NOT NULL,
 productID INT (10) unsigned,
 orderID INT (10) unsigned,
 promotionID INT (10) unsigned,
 quantity INT (5),
 currentPrice DECIMAL(10,2),
 date DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (usersID) REFERENCES users (id),
FOREIGN KEY (productID) REFERENCES products (id),
FOREIGN KEY (orderID) REFERENCES orders (id),
FOREIGN KEY (promotionID) REFERENCES promotions (id)
 );
 
INSERT INTO roles (name) VALUES ("administrador"), ("usuario");

INSERT INTO payments (type) VALUES ("efectivo"), ("debito"), ("credito");

INSERT INTO categories (name) VALUES ("vinos"), ("whiskies") , ("spirits");

INSERT INTO varieties (name) VALUES ("Pinot"),("Malbec"), ("Syrah"),("Brut"), ("Single Malt"), ("Bourbon"),("Pisco"),("Gin"), ("Tequila"), ("Absenta"), ("Hidromiel"), ("Soju"), ("Pomencello"), ("Torrontes"),("Malbec");

INSERT INTO products (name, varietyId, description, price, categoryId, quantity, image) VALUES 
("Trumpeter Reserve", 1, "Amarillo cristalino, con matices verdosos y dorados. Sus aromas remiten a frutas blancas y citrus, con un fino toque de anís.", 1200, 1, 10, "/images/01_Trumpeter-Reserve-Pinot-Grigio.jpeg"), 
("Dominio", 4, "Tonos coral. Burbujas pequeñas y persistentes. En nariz posee una sutil complejidad aromática en las que se destacan notas florales y frutadas.", 1828, 1, 20, "/images/02_Dominio-Brut-Nature.jpg"),
("Rutini Rose", 2, "Rosado, color piel de cebolla con matices cobrizos. Su color anuncia la primavera. En nariz regala amenas notas florales, sutiles frutos rojos y frutos secos como almendra y nuez.", 2000, 1,40, "/images/03_Rutini-Rose-de-Malbec.jpeg"),
("Trumpeter", 2, "Granate intenso, con reflejos purpúras. Es un típico y bien logrado ejemplo de la variedad emblemática de la Argentina.", 3000, 1, 10, "/images/04_Trumpeter-Reserve-Malbec.jpeg"),
("The Yamazaki 18 Años 43%", 5, "Es bastante espesa y resinosa, hay una agradable oleosidad con cítricos y cáscaras y un toque de jerez. Un montón de frutas de roble y huerto.", 20000, 2, 10, "/images/07_Whisky-Single-Malt-Japonés-The-Yamazaki-18-Años-43.jpeg"), 
("Jack Daniel's Old No. 7", 6, "Resulta ligero, suave y limpio, con presencia notable de notas dulces. Matices a frutos secos, a un poco de humor y a especias, también están presentes.", 4500, 2, 20, "/images/08_jack-daniels-whiskey-2.jpg"),
("The Glenlivet Founder's Reserve Escocia", 5, "Whisky equilibrado y elegante, y según la marca posee delicados aromas cítricos, con notas de naranja dulce y pera, además de toques de caramelo y manzanas caramelizadas.", 4582,2, 30, "/images/09-the_glenlivet.jpg"),
("Glenfiddich 12 Años", 5,"Es un whisky suave y ligero, fácil de beber. Posee notas intensas de caramelo y vainilla al principio, que luego van matizándose en distintas notas frutales, como las mencionadas pera y manzana.", 6859, 2, 20, "/images/10_GLENFIDDICH-12-Años-1L.jpg"),
("Pisco Peruano Viñas De Oro", 7,"Este Pisco destaca por su dulzura. En el paladar se presenta a sedoso y dulce, con sensaciones persistentes a frutas y flores, y un final ligeramente tostado.", 4500, 3, 50, "/images/Pisco-Peruano-Vinas-De-Oro.jpg"),
("Gin Beefeater Gin Ingles", 8,"Beefeater Gin es de color blanco platinado. Sutil cítrico y elementos botánicos, cáscaras de naranja y de limón, cilantro y almendras", 3500, 3, 50, "/images/Gin-Beefeater-Gin-Ingles.jpg"),
("Tequila Reserva 1800 Reposado", 9,"Tequila Mexicano 100% original comprado en México. Cerrado Reserva 1800 reposado.", 11300, 3, 50, "/images/Tequila-Reserva-1800-Reposado.jpg"),
("Absenta Pere Kermann`s Verde", 10,"Absenta Pere Kermann`s Verde", 6900, 3, 50, "/images/Absenta-Pere-Kermann-Verde.jpg"),
("Hidromiel El Viejo San Marcos Dulce", 11,"Hidromiel artesanal elaborada en San Marcos Sierras, Córdoba, combinando una refinada receta ancestral con las mejores mieles orgánicas de monte.", 1800, 3, 13, "/images/Hidromiel-El-Viejo-San-Marcos-Dulce.jpg"),
("Soju Original", 12,"Soju Original", 650, 3, 10, "/images/Soju-Original.jpg"),
("Pomencello Di San Mauro", 13,"Pomencello", 750, 3, 10, "/images/Pomencello-Di-San-Mauro.jpg"),
("Vino blanco Torrontés Cafayate", 14,"En boca, el Torrontés tiene presente los sabores a cáscara de naranja, duraznos, ensalada de frutas, miel, orégano, manzanilla y uva moscatel.", 285, 1, 10, "/images/Vino-blanco-Torrontes-Cafayate.jpg"),
("Vino Rutini Cabernet Malbec", 2,"Rico gin", 1080, 1, 50, "/images/Vino-Rutini-Cabernet-Malbec.jpg"),
("Vino Colección Privada Malbec Navarro Correas", 2,"Atractivos tonos violáceos. De aromas frutales y florales que recuerdan a violetas.", 490, 1, 50, "/images/Vino-Coleccion-Privada-Malbec-Navarro-Correas.jpg"),
("Aberlour Single Malt 12 Años escocés", 5,"Es un whisky de 40% graduación alcohólica que ha sido envejecido al menos 12 años, y posee un “Double cask Matured”, lo cual significa que que ha madurado en 2 tipos de barricas distintas", 6057, 2, 5, "/images/Aberlour-Single-Malt-12-Anos-escoces.jpg"),
("Jameson Caskmates IPA Irlanda", 5,"Rico gin", 2300, 2, 5, "/images/Jameson-Caskmates-IPA-Irlanda.jpg"),
("Jack Daniel's Gentleman Jack ", 5,"Jack Daniel's Gentleman Jack es de color ámbar oscuro. En nariz notas dulzonas de azúcar moreno acompañadas de un buen ahumado y tostados, todo en muy buena armonía.", 11300, 2, 2, "/images/Jack-Daniel-Gentleman-Jack.jpg");