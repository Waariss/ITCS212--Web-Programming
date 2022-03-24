DROP TABLE IF EXISTS `personal_info`;
CREATE TABLE `personal_info` (
  `StudentId` int NOT NULL,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `DOB` datetime NOT NULL,
  `MobilePhone` varchar(10) NOT NULL,
  PRIMARY KEY (`StudentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `personal_info` (`StudentId`, `FirstName`, `LastName`, `DOB`, `MobilePhone`) VALUES
(1, 'Robert', 'Dolls', '1985-01-20 00:00:00', '0919998877'),
(2, 'Peter', 'Jones', '1980-06-10 00:00:00', '0834455667'),
(3, 'Lily', 'James', '1991-10-20 00:00:00', '0889988776');