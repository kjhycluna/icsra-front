USE ICSRA;

DELETE FROM faculty;

INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (1, 'abcd@up.edu.ph','nani', 'Hasper','Sunga','Available','Instructor 1', 'Canada', 'True', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (2, 'abd@up.edu.ph','nano', 'Jasper','Sungha','Available','Instructor 2', 'Japan', 'False', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (3, 'afedg@up.edu.ph','qwe', 'Casper','Sunghae','Available','Instructor 3', 'Hwaikiki', 'False', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (4, 'afas@up.edu.ph','dfs', 'Jorge','Sunghaejo','Available','Instructor 4', 'Mars', 'False', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (5, 'asd@up.edu.ph','fghj', 'Gohn','Sungha','Available','Instructor 5', 'Jupiter', 'False',  'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (6, 'er@up.edu.ph','ghkj', 'Qwerty','Sungha','Available','Instructor 6', 'Ionia', 'True', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (7, 'gf@up.edu.ph','fsad', 'Gon','Sungha','Available','Instructor 7', 'Czechoslovakia', 'True', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (8, 'uyfgh@up.edu.ph','sadf', 'Naruto','Sungha','Available','Instructor 8', 'Pilipinas', 'False', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (9, 'ggh@up.edu.ph','asd', 'Mans','Sungha','Available','Instructor 9', 'Pilipinas', 'False', 'ICS Director');
INSERT INTO faculty (empno, email, password, fname, lname, status, rank, place_of_study, committee_member, position) VALUES (10, 'bgg@up.edu.ph','sad', 'Ted','Sungha','Available','Instructor 1000', 'Aleman', 'True', 'ICS Director');

DELETE FROM advisee;

INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02340','nani', 'asdqwe','a12@up.edu.ph',119,1,2,3,2, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02341','nani', ',mnbasd','a13@up.edu.ph',119,2,3,1,2, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02342','nani', 'asldkj','a14@up.edu.ph',119,3,2,1,2, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02343','nani', 'qyweyt','a15@up.edu.ph',119,4,5,6,2, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02344','nani', 'shht','a16@up.edu.ph',119,5,6,7,8, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02345','nani', 'zxczxczxc','a17@up.edu.ph',119,9,8,7,6, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02346','nani', 'mark','a18@up.edu.ph',119,1,4,5,6, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02347','nani', 'asdgdfg','a19@up.edu.ph',119,2,3,7,8, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02348','nani', 'asdqwe','a11a@up.edu.ph',119,8,8,8,8, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');
INSERT INTO advisee (studno, fname, lname, email, unitsearned, registration_adviser, practicum_adviser, sp_adviser, thesis_adviser, regAdv_AssignedDate, pracAdv_AssignedDate, spAdv_AssignedDate, thAdv_AssignedDate) VALUES ('2015-02349','nani', 'nani','a11x@up.edu.ph',119,1,1,1,1, '2014-01-26 13:00:00', '2015-02-26 13:00:00', '2016-03-26 13:00:00', '2017-04-26 13:00:00');

DELETE FROM course;

INSERT INTO course (course_no, units, title, description) VALUES (2, 3, 'Intro to HTML and CSS', 'Sunga');
INSERT INTO course (course_no, units, title, description) VALUES (11, 3,'CMSC 11', 'Sungha');
INSERT INTO course (course_no, units, title, description) VALUES (21, 3,'CMSC 21', 'Sunghae');
INSERT INTO course (course_no, units, title, description) VALUES (22, 3,'CMSC 22', 'Sunghaejo');
INSERT INTO course (course_no, units, title, description) VALUES (100, 3,'CMSC 100','Sungha');
INSERT INTO course (course_no, units, title, description) VALUES (123, 3,'CMSC 123','Sungha');
INSERT INTO course (course_no, units, title, description) VALUES (124, 3,'CMSC 124','Sungha');
INSERT INTO course (course_no, units, title, description) VALUES (125, 3,'CMSC 125','Sungha');
INSERT INTO course (course_no, units, title, description) VALUES (127, 3,'CMSC 127', 'Sungha');
INSERT INTO course (course_no, units, title, description) VALUES (128, 3,'CMSC 128', 'Sungha');

DELETE FROM schedule;

INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-1l', 128,'pc lab 2','TTH', '8:30','10:00', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-2l', 128,'pc lab 4','TTH', '10:00','11:30', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-3l', 128,'pc lab 3','TTH', '11:30','1:00', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-4l', 128,'pc lab 4','TTH', '1:00','2:30', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-5l', 128,'pc lab 5','TTH', '2:30','4:00', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-6l', 128,'pc lab 6','TTH', '4:00','5:30', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-7l', 128,'pc lab 7','TTH', '5:30','7:00', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-8l', 128,'pc lab 8','TTH', '7:00','8:30', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-9l', 128,'pc lab 9','TTH', '8:30','10:00', 15, 15);
INSERT INTO schedule (section, course_no, room, day, start_time, end_time, current_no_of_students, max_no_of_students) VALUES ('a-10l', 128,'pc lab ','TTH', '10:00','11:30', 15, 15);

INSERT INTO scheduleFaculty(1, 1);

DELETE FROM previous_advisers;
DELETE FROM preferred_subjects;

INSERT INTO preferred_subjects (empno, course_no) VALUES (2, 2);
INSERT INTO preferred_subjects (empno, course_no) VALUES (9, 11);
INSERT INTO preferred_subjects (empno, course_no) VALUES (7, 100);
INSERT INTO preferred_subjects (empno, course_no) VALUES (5, 123);
INSERT INTO preferred_subjects (empno, course_no) VALUES (8, 123);
INSERT INTO preferred_subjects (empno, course_no) VALUES (2, 125);
INSERT INTO preferred_subjects (empno, course_no) VALUES (1, 100);
INSERT INTO preferred_subjects (empno, course_no) VALUES (4, 128);
INSERT INTO preferred_subjects (empno, course_no) VALUES (5, 127);
INSERT INTO preferred_subjects (empno, course_no) VALUES (6, 11);
