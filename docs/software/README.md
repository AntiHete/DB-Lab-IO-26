# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється:
## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- MySQL Script generated by MySQL Workbench
-- Mon Apr 29 21:15:10 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DB-lab-IO-26
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DB-lab-IO-26
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DB-lab-IO-26` DEFAULT CHARACTER SET utf8 ;
USE `DB-lab-IO-26` ;

-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`permissions` (
  `Id` INT NOT NULL,
  `Permission` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`projects` (
  `Id` INT NOT NULL,
  `Name` VARCHAR(50) NOT NULL,
  `Description` VARCHAR(100) NOT NULL,
  `Status` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`payments` (
  `Id` INT NOT NULL,
  `CardNumber` INT NOT NULL,
  `CardCVV` INT NOT NULL,
  `CardExpireDate` DATETIME NOT NULL,
  `Email` VARCHAR(50) NOT NULL,
  `ProjectId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_payments_projects_idx` (`ProjectId` ASC) VISIBLE,
  CONSTRAINT `fk_payments_projects`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DB-lab-IO-26`.`projects` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`reles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`reles` (
  `Id` INT NOT NULL,
  `Name` VARCHAR(30) NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`role_grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`role_grant` (
  `RoleID` INT NOT NULL,
  `PermissionId` INT NOT NULL,
  INDEX `fk_role_grant_reles1_idx` (`RoleID` ASC) VISIBLE,
  INDEX `fk_role_grant_permissions1_idx` (`PermissionId` ASC) VISIBLE,
  CONSTRAINT `fk_role_grant_reles1`
    FOREIGN KEY (`RoleID`)
    REFERENCES `DB-lab-IO-26`.`reles` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_grant_permissions1`
    FOREIGN KEY (`PermissionId`)
    REFERENCES `DB-lab-IO-26`.`permissions` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`reviews` (
  `Id` INT NOT NULL,
  `Text` VARCHAR(100) NOT NULL,
  `Rate` INT NOT NULL,
  `ProjectId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_reviews_projects1_idx` (`ProjectId` ASC) VISIBLE,
  CONSTRAINT `fk_reviews_projects1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DB-lab-IO-26`.`projects` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`tasks` (
  `Id` INT NOT NULL,
  `Name` VARCHAR(50) NOT NULL,
  `Developer` VARCHAR(45) NOT NULL,
  `Status` VARCHAR(20) NOT NULL,
  `Deadline` DATETIME NOT NULL,
  `ProjectId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_tasks_projects1_idx` (`ProjectId` ASC) VISIBLE,
  CONSTRAINT `fk_tasks_projects1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DB-lab-IO-26`.`projects` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`users` (
  `Id` INT NOT NULL,
  `Login` VARCHAR(45) NOT NULL,
  `Picture` MEDIUMBLOB NOT NULL,
  `Password` BLOB NOT NULL,
  `Email` VARCHAR(50) NOT NULL,
  `Role` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`members`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`members` (
  `Id` INT NOT NULL,
  `RoleId` INT NOT NULL,
  `UserId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_members_users1_idx` (`RoleId` ASC) VISIBLE,
  INDEX `fk_members_reles1_idx` (`UserId` ASC) VISIBLE,
  CONSTRAINT `fk_members_users1`
    FOREIGN KEY (`RoleId`)
    REFERENCES `DB-lab-IO-26`.`users` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_members_reles1`
    FOREIGN KEY (`UserId`)
    REFERENCES `DB-lab-IO-26`.`reles` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB-lab-IO-26`.`projects_members`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB-lab-IO-26`.`projects_members` (
  `MemberID` INT NOT NULL,
  `ProjectId` INT NOT NULL,
  INDEX `fk_projects_members_projects1_idx` (`MemberID` ASC) VISIBLE,
  INDEX `fk_projects_members_members1_idx` (`ProjectId` ASC) VISIBLE,
  CONSTRAINT `fk_projects_members_projects1`
    FOREIGN KEY (`MemberID`)
    REFERENCES `DB-lab-IO-26`.`projects` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_projects_members_members1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DB-lab-IO-26`.`members` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`permissions`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`permissions` (`Id`, `Permission`) VALUES (1, 'Read');
INSERT INTO `DB-lab-IO-26`.`permissions` (`Id`, `Permission`) VALUES (2, 'Write');
INSERT INTO `DB-lab-IO-26`.`permissions` (`Id`, `Permission`) VALUES (3, 'Execute');

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`projects`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`projects` (`Id`, `Name`, `Description`, `Status`) VALUES (1, 'Project A', 'Description for Project A', 'Active');
INSERT INTO `DB-lab-IO-26`.`projects` (`Id`, `Name`, `Description`, `Status`) VALUES (2, 'Project B', 'Description for Project B', 'Inactive');
INSERT INTO `DB-lab-IO-26`.`projects` (`Id`, `Name`, `Description`, `Status`) VALUES (3, 'Project C', 'Description for Project C', 'Pending');

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`payments`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`payments` (`Id`, `CardNumber`, `CardCVV`, `CardExpireDate`, `Email`, `ProjectId`) VALUES (1, 123456, 123, '2024-04-26', 'payment1@example.com', 1);
INSERT INTO `DB-lab-IO-26`.`payments` (`Id`, `CardNumber`, `CardCVV`, `CardExpireDate`, `Email`, `ProjectId`) VALUES (2, 112233, 456, '2024-04-27', 'payment2@example.com', 2);
INSERT INTO `DB-lab-IO-26`.`payments` (`Id`, `CardNumber`, `CardCVV`, `CardExpireDate`, `Email`, `ProjectId`) VALUES (3, 123424, 789, '2024-04-29', 'payment3@example.com', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`reles`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`reles` (`Id`, `Name`) VALUES (1, 'Teamlead');
INSERT INTO `DB-lab-IO-26`.`reles` (`Id`, `Name`) VALUES (2, 'Developer');
INSERT INTO `DB-lab-IO-26`.`reles` (`Id`, `Name`) VALUES (3, 'Admin');

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`role_grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`role_grant` (`RoleID`, `PermissionId`) VALUES (1, 1);
INSERT INTO `DB-lab-IO-26`.`role_grant` (`RoleID`, `PermissionId`) VALUES (1, 2);
INSERT INTO `DB-lab-IO-26`.`role_grant` (`RoleID`, `PermissionId`) VALUES (2, 1);
INSERT INTO `DB-lab-IO-26`.`role_grant` (`RoleID`, `PermissionId`) VALUES (2, 3);
INSERT INTO `DB-lab-IO-26`.`role_grant` (`RoleID`, `PermissionId`) VALUES (3, 2);
INSERT INTO `DB-lab-IO-26`.`role_grant` (`RoleID`, `PermissionId`) VALUES (3, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`reviews`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`reviews` (`Id`, `Text`, `Rate`, `ProjectId`) VALUES (1, 'Good project!', 5, 1);
INSERT INTO `DB-lab-IO-26`.`reviews` (`Id`, `Text`, `Rate`, `ProjectId`) VALUES (2, 'Could be better', 3, 2);
INSERT INTO `DB-lab-IO-26`.`reviews` (`Id`, `Text`, `Rate`, `ProjectId`) VALUES (3, 'Excellent work', 5, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`tasks`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`tasks` (`Id`, `Name`, `Developer`, `Status`, `Deadline`, `ProjectId`) VALUES (1, 'Task 1', 'dev_user1', 'In Progress', '2024-04-25', 1);
INSERT INTO `DB-lab-IO-26`.`tasks` (`Id`, `Name`, `Developer`, `Status`, `Deadline`, `ProjectId`) VALUES (2, 'Task 2', 'dev_user2', 'To Do', '2024-04-28', 2);
INSERT INTO `DB-lab-IO-26`.`tasks` (`Id`, `Name`, `Developer`, `Status`, `Deadline`, `ProjectId`) VALUES (3, 'Task 3', 'dev_user3', 'Completed', '2024-04-29', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`users` (`Id`, `Login`, `Picture`, `Password`, `Email`, `Role`) VALUES (1, 'admin_user', admin_picture_blob, admin_password_blob, 'admin@example.com', 'Teamlead');
INSERT INTO `DB-lab-IO-26`.`users` (`Id`, `Login`, `Picture`, `Password`, `Email`, `Role`) VALUES (2, 'dev_user1', dev_picture_blob1, dev_password_blob1, 'dev1@example.com', 'Developer');
INSERT INTO `DB-lab-IO-26`.`users` (`Id`, `Login`, `Picture`, `Password`, `Email`, `Role`) VALUES (3, 'dev_user2', dev_picture_blob2, dev_password_blob2, 'dev2@example.com', 'Developer');
INSERT INTO `DB-lab-IO-26`.`users` (`Id`, `Login`, `Picture`, `Password`, `Email`, `Role`) VALUES (4, 'manager_user', manager_picture_blob, manager_password_blob, 'manager@example.com', 'Admin');

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`members`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`members` (`Id`, `RoleId`, `UserId`) VALUES (1, 1, 1);
INSERT INTO `DB-lab-IO-26`.`members` (`Id`, `RoleId`, `UserId`) VALUES (2, 2, 2);
INSERT INTO `DB-lab-IO-26`.`members` (`Id`, `RoleId`, `UserId`) VALUES (3, 2, 3);
INSERT INTO `DB-lab-IO-26`.`members` (`Id`, `RoleId`, `UserId`) VALUES (4, 3, 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `DB-lab-IO-26`.`projects_members`
-- -----------------------------------------------------
START TRANSACTION;
USE `DB-lab-IO-26`;
INSERT INTO `DB-lab-IO-26`.`projects_members` (`MemberID`, `ProjectId`) VALUES (1, 1);
INSERT INTO `DB-lab-IO-26`.`projects_members` (`MemberID`, `ProjectId`) VALUES (2, 1);
INSERT INTO `DB-lab-IO-26`.`projects_members` (`MemberID`, `ProjectId`) VALUES (3, 2);
INSERT INTO `DB-lab-IO-26`.`projects_members` (`MemberID`, `ProjectId`) VALUES (4, 3);

COMMIT;

```

## RESTfull сервіс для управління даними
### Корневий файл серверу:

```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database");

connection.connect();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", require("./controls"));

app.listen(8000, "0.0.0.0", () => {
  console.log(`Started server: http://localhost:8080`);
});
```

### Файл для підключення до бази даних:

```js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "shrek",
  password: "pass123",
  database: "imbaza",
});

module.exports = connection;
```

### Файл контроллерів для обробки запитів:

```js
const { v4: uuid } = require("uuid");
const { Router } = require("express");
const connection = require("./database");

const router = Router();

const decodeId = (bufferArray) => {
  return Buffer.from(bufferArray).toString("hex");
};

const ERRORS = {
  SERVER_ERROR: "Error on server. Try later",
  ALL_FIELDS_REQUIRED: "Required fields are missing",
  NOT_FOUND: "Board was not found. Check the id",
};

const sql = {
  getAllBoards: "SELECT * FROM board",
  createBoard: `INSERT INTO board(id, name, description, project_id) VALUES (unhex(?), ?, ?, unhex(?))`,
  getBoard: `SELECT * FROM board WHERE id = unhex(?)`,
  updateBoard: `UPDATE board SET name = ?, description = ?, project_id = unhex(?) WHERE id = unhex(?)`,
  deleteBoard: `DELETE FROM board WHERE id = unhex(?)`,
};

router.get("/boards", (req, res) => {
  connection.query(sql.getAllBoards, (err, boards) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    const convertedData = boards.map(
      ({ id, name, description, project_id }) => ({
        name,
        description,
        id: decodeId(id),
        project_id: decodeId(project_id),
      })
    );

    res.status(200).json({
      data: convertedData,
    });
  });
});

router.get("/board/:id", (req, res) => {
  const { id } = req.params;
  connection.query(sql.getBoard, [id], (err, [board]) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!board) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    res.status(200).json({
      data: {
        ...board,
        id: decodeId(board.id),
        project_id: decodeId(board.project_id),
      },
    });
  });
});

router.post("/board", (req, res) => {
  const { name, description, project_id } = req.body;

  if (!(name && description && project_id)) {
    res.status(400).json({
      message: ERRORS.ALL_FIELDS_REQUIRED,
    });
    return;
  }
  const id = uuid().replaceAll("-", "");

  connection.query(
    sql.createBoard,
    [id, name, description, project_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      res.status(200).json({
        message: "Successfully created board - " + name,
      });
    }
  );
});

router.put("/board/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    `select * from board where id = unhex("${id}")`,
    (err, [board]) => {
      if (err) {
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      if (!board) {
        res.status(404).json({
          message: ERRORS.NOT_FOUND,
        });
        return;
      }

      const { name, description, project_id } = {
        ...board,
        project_id: decodeId(board.project_id),
        ...req.body,
      };

      connection.query(
        sql.updateBoard,
        [name, description, project_id, id],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              message: ERRORS.SERVER_ERROR,
            });
            return;
          }

          res.status(200).json({
            message: "Successfully updated board " + name,
          });
        }
      );
    }
  );
});

router.delete("/board/:id", (req, res) => {
  const { id } = req.params;

  connection.query(sql.deleteBoard, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    res.status(200).json({
      message: "Successfully deleted board",
    });
  });
});

module.exports = router;
```