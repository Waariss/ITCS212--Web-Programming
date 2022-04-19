CREATE TABLE `reminders` (
  `reminderID` INT NOT NULL,
  `header` VARCHAR(45) NULL,
  `content` VARCHAR(200) NULL,
  `duedate` DATE NULL,
  PRIMARY KEY (`reminderID`));


INSERT INTO Reminders VALUES
(1, "Project Phase III due soon!!", "Your project Phase III is due on Sunday April 24, 2021 at 11:55PM Good Luck!!", "2022-04-24" ),
(2, "Extra Point: Talk on April 27", "We are organizing the talk on Web Programming by the expert. Do not forget to attend to get an extra point", "2022-04-27" ),
(3, "Quiz 5 incoming", "We are planning to put Quiz 5 after April 25 ... Maybe around your Final Week", "2022-04-25" ),
(4, "Class Evaluation", "We are welcome your feedback :)", "2022-05-01" );