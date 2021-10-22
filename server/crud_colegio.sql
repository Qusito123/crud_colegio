CREATE DATABASE IF NOT EXISTS crud_colegio;

USE crud_colegio;

CREATE TABLE IF NOT EXISTS alumno(
	id_alumno INT NOT NULL AUTO_INCREMENT,
    nombre_alumno VARCHAR(50) NOT NULL,
    apellidos_alumno VARCHAR(50) NOT NULL,
    genero_alumno CHAR NOT NULL,
    fnacimiento_alumno DATE NOT NULL,
    PRIMARY KEY (id_alumno)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS profesor(
	id_profesor INT NOT NULL AUTO_INCREMENT,
    nombre_profesor VARCHAR(50) NOT NULL,
    genero_profesor CHAR NOT NULL,
    PRIMARY KEY (id_profesor)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS grado(
	id_grado INT NOT NULL AUTO_INCREMENT,
    nombre_grado VARCHAR(50) NOT NULL,
    id_profesor INT NOT NULL,
    PRIMARY KEY (id_grado)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS alumnogrado(
	id_agrado INT NOT NULL AUTO_INCREMENT,
    id_alumno INT NOT NULL,
    id_grado INT NOT NULL,
    seccion_agrado VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_agrado)
) engine = InnoDB;