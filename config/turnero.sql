-- START config/turnero.sql

-- START config/turnero.sql

CREATE DATABASE IF NOT EXISTS `turnero` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `turnero`;

-- Creación de la tabla pacientes (existente)
CREATE TABLE IF NOT EXISTS `pacientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `edad` int(11) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Inserts para la tabla pacientes (existente)
INSERT INTO `pacientes` (`id`, `nombre`, `edad`, `telefono`, `direccion`) VALUES
  (1, 'Alejandra López', 28, '1122334455', 'Av. de Mayo 123'),
  (2, 'Martín Sánchez', 35, '9988776655', 'Calle Belgrano 456'),
  (3, 'Laura Fernández', 42, '6677889900', 'Av. San Martín 789');

-- Creación de la tabla profesionales (existente)
CREATE TABLE IF NOT EXISTS `profesionales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `edad` int(11) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Inserts para la tabla profesionales (existente)
INSERT INTO `profesionales` (`id`, `nombre`, `edad`, `telefono`, `direccion`) VALUES
  (1, 'Federico Gómez', 32, '1122334455', 'Av. 9 de Julio 123'),
  (2, 'Gabriela Martínez', 29, '9988776655', 'Calle Florida 456'),
  (3, 'Javier Torres', 45, '6677889900', 'Av. Corrientes 789');

-- Creación de la tabla tratamientos (existente)
CREATE TABLE IF NOT EXISTS `tratamientos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `costo` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Inserts para la tabla tratamientos (existente)
INSERT INTO `tratamientos` (`id`, `nombre`, `costo`) VALUES
  (1, 'Ortodoncia', 250.00),
  (2, 'Extracción Dental', 180.00),
  (3, 'Revisión Oftalmológica', 150.00);

-- Creación de la tabla turnos (existente)
CREATE TABLE IF NOT EXISTS `turnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `paciente_id` int(11) DEFAULT NULL,
  `profesional_id` int(11) DEFAULT NULL,
  `tratamiento_id` int(11) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `paciente_id` (`paciente_id`),
  KEY `profesional_id` (`profesional_id`),
  KEY `tratamiento_id` (`tratamiento_id`),
  CONSTRAINT `fk_turnos_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`),
  CONSTRAINT `fk_turnos_profesional` FOREIGN KEY (`profesional_id`) REFERENCES `profesionales` (`id`),
  CONSTRAINT `fk_turnos_tratamiento` FOREIGN KEY (`tratamiento_id`) REFERENCES `tratamientos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Inserts para la tabla turnos (existente)
INSERT INTO `turnos` (`id`, `fecha`, `hora`, `paciente_id`, `profesional_id`, `tratamiento_id`, `descripcion`) VALUES
  (1, '2024-07-04', '11:00:00', 1, 1, 1, 'Consulta de rutina'),
  (2, '2024-07-05', '16:30:00', 2, 2, 2, 'Limpieza y revisión anual'),
  (3, '2024-07-06', '14:00:00', 3, 3, 3, 'Control de tratamiento dermatológico');

-- Creación de la tabla usuarios (nueva)
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Inserts para la tabla usuarios (ejemplo)
INSERT INTO `usuarios` (`id`, `username`, `password`) VALUES
  (1, 'admin', '$2b$10$2rYYTwtj9UZ3J6z0D5MLhe58QUsIaUb4nQWZalp79xJGZug6JzQoK'); -- Contraseña encriptada con bcrypt para 'password'

-- END config/turnero.sql



-- END config/turnero.sql
