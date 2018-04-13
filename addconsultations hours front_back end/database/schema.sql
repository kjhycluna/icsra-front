DROP USER IF EXISTS 'icsra'@'localhost';
CREATE USER 'icsra'@'localhost' IDENTIFIED BY 'icsra';
DROP DATABASE IF EXISTS ICSRA;
CREATE DATABASE ICSRA;
GRANT SUPER ON *.* TO 'icsra'@'localhost';
GRANT ALL PRIVILEGES ON ICSRA.* TO 'icsra'@'localhost' WITH GRANT OPTION;

USE ICSRA;

CREATE TABLE faculty (
  empno INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  status VARCHAR(30) NOT NULL,
  rank VARCHAR(20) NOT NULL,
  teaching_load NUMERIC(3) DEFAULT 0,
  study_load NUMERIC(3) DEFAULT 0,
  place_of_study VARCHAR(50) DEFAULT '',
  committee_member VARCHAR(5) NOT NULL,
  position VARCHAR(30),
  picture_loc VARCHAR(36),
  picture_type VARCHAR(10),
  PRIMARY KEY (empno),
  CONSTRAINT chk_status CHECK (status IN ('Available', 'Not Available')),
  CONSTRAINT chk_committee_member CHECK (committee_member IN ('true', 'false')),
  UNIQUE KEY (email)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--split name to fname and lname
--removed preferences
--removed schedule
--removed advisees

CREATE TABLE course(
  course_no INT(3) NOT NULL,
  units INT(1) NOT NULL,
  title VARCHAR(30) NOT NULL,
  description VARCHAR(50) NOT NULL,
  unit int(1) NOT NULL DEFAULT 3,
  PRIMARY KEY (course_no)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE preferred_subjects (
  empno INT NOT NULL,
  course_no INT(3) NOT NULL,
  CONSTRAINT preferred_subjects_empno_fk FOREIGN KEY (empno) REFERENCES faculty (empno) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT preferred_subjects_course_no_fk FOREIGN KEY (course_no) REFERENCES course (course_no) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE schedule(
  schedule_id INT AUTO_INCREMENT,
  section varchar(10) NOT NULL,
  course_no int(3) NOT NULL,
  room varchar(10) NOT NULL,
  day varchar(10) NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  current_no_of_students int(3) NOT NULL,
  max_no_of_students int(3) NOT NULL,
  PRIMARY KEY(schedule_id),
  CONSTRAINT schedule_course_no_fk FOREIGN KEY (course_no) REFERENCES course(course_no) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE scheduleFaculty(
  empno int NOT NULL,
  schedule_id int NOT NULL,
  PRIMARY KEY(schedule_id),
  CONSTRAINT scheduleFaculty_empno_fk FOREIGN KEY (empno) REFERENCES faculty(empno) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT scheduleFaculty_schedule_id_fk FOREIGN KEY (schedule_id) REFERENCES schedule(schedule_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE chfaculty(
  empno int NOT NULL,
  consultation_id int NOT NULL AUTO_INCREMENT,
  room varchar(10) NOT NULL,
  day varchar(10) NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  PRIMARY KEY(consultation_id),
  CONSTRAINT chfaculty_empno_fk FOREIGN KEY (empno) REFERENCES faculty(empno) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE advisee (
  studno VARCHAR(10) NOT NULL,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  unitsearned INT(3) NOT NULL,
  registration_adviser INT NOT NULL,
  practicum_adviser INT NOT NULL,
  sp_adviser INT NOT NULL,
  thesis_adviser INT NOT NULL,
  regAdv_AssignedDate DATETIME NOT NULL,
  pracAdv_AssignedDate DATETIME NOT NULL,
  spAdv_AssignedDate DATETIME NOT NULL,
  thAdv_AssignedDate DATETIME NOT NULL,
  UNIQUE KEY (email),
  PRIMARY KEY (studno),
  CONSTRAINT advisee_registration_adviser_fk FOREIGN KEY (registration_adviser) REFERENCES faculty(empno) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT advisee_practicum_adviser_fk FOREIGN KEY (practicum_adviser) REFERENCES faculty(empno) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT advisee_sp_adviser_fk FOREIGN KEY (sp_adviser) REFERENCES faculty(empno) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT advisee_thesis_adviser_fk FOREIGN KEY (thesis_adviser) REFERENCES faculty(empno) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  --current_adviser - foreign key, empno of adviser

CREATE TABLE previous_advisers (
  advisee VARCHAR(10) NOT NULL,
  faculty INT NOT NULL,
  type VARCHAR(12) NOT NULL,
  date_assigned DATETIME NOT NULL,
  CONSTRAINT previous_advisers_advisee_fk FOREIGN KEY (advisee) REFERENCES advisee (studno) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT previous_advisers_faculty_fk FOREIGN KEY (faculty) REFERENCES faculty (empno) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--advisee - foreign key, studno of advisee
--faculty - foreign key, empno of faculty

CREATE TABLE curriculum (
  id VARCHAR(36) NOT NULL,
  title VARCHAR(60) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE log  (
  empno INT NOT NULL,
  log_timestamp TIMESTAMP NOT NULL,
  status VARCHAR(6) NOT NULL,
  CONSTRAINT log_empno_fk FOREIGN KEY (empno) REFERENCES faculty (empno) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DELIMITER //
CREATE PROCEDURE editAdviser (
  _studno VARCHAR(10),
  _empno INT,
  _type VARCHAR(12)
)
BEGIN
  DECLARE _date_assigned DATETIME;
  CASE
    WHEN _type = 'registration' THEN
      SET _date_assigned = (SELECT regAdv_AssignedDate FROM advisee WHERE studno = _studno);
      UPDATE advisee SET
        registration_adviser = _empno,
        regAdv_AssignedDate = NOW()
      WHERE studno = _studno;
    WHEN _type = 'practicum' THEN
      SET _date_assigned = (SELECT pracAdv_AssignedDate FROM advisee WHERE studno = _studno);
      UPDATE advisee SET
        practicum_adviser = _empno,
        pracAdv_AssignedDate = NOW()
      WHERE studno = _studno;
    WHEN _type = 'sp' THEN
      SET _date_assigned = (SELECT spAdv_AssignedDate FROM advisee WHERE studno = _studno);
      UPDATE advisee SET
        sp_adviser = _empno,
        spAdv_AssignedDate = NOW()
      WHERE studno = _studno;
    ELSE
      SET _date_assigned = (SELECT thAdv_AssignedDate FROM advisee WHERE studno = _studno);
      UPDATE advisee SET
        thesis_adviser = _empno,
        thAdv_AssignedDate = NOW()
      WHERE studno = _studno;
  END CASE;
  INSERT INTO previous_advisers
  VALUES (_studno, _empno, _type, _date_assigned);
END;
//
DELIMITER ;