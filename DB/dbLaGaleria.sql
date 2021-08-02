usersCREATE DATABASE dbLaGaleria;

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
 
 CREATE TABLE products
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 varietyId INT (10) UNSIGNED NOT NULL,
 description VARCHAR(200),
 price DECIMAL(8,2),
 categoryId INT (10) UNSIGNED NOT NULL,
 quantity INT (5),
 image VARCHAR(50),
PRIMARY KEY (id),
FOREIGN KEY (varietyId) REFERENCES varieties (id),
FOREIGN KEY (categoryId) REFERENCES categories (id)
 );
 
  CREATE TABLE promotions
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 description VARCHAR(200),
 price DECIMAL(8,2),
 quantity INT (5),
 image VARCHAR(50),
PRIMARY KEY (id)
 );
 
   CREATE TABLE users
 (id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
 name VARCHAR(50) NOT NULL,
 lastName VARCHAR(50),
 email VARCHAR(50) NOT NULL,
 password VARCHAR(50) NOT NULL,
 image VARCHAR(50),
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
 productID INT (10) unsigned,
 orderID INT (10) unsigned,
 promotionID INT (10) unsigned,
 quantity INT (5),
 currentPrice DECIMAL(10,2),
 date DATETIME,
PRIMARY KEY (id),FOREIGN KEY (productID) REFERENCES users (id),
FOREIGN KEY (productID) REFERENCES products (id),
FOREIGN KEY (orderID) REFERENCES orders (id),
FOREIGN KEY (promotionID) REFERENCES promotions (id)
 );
 
INSERT INTO roles (name) VALUES ("ADMIN"), ("USER");
