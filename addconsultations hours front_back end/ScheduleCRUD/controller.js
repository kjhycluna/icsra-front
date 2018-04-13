import db from '../../database';

export const editScheduleFaculty = ({ empno, schedule_id }) => {
  return new Promise((resolve, reject) => {
    let sql = `UPDATE scheduleFaculty SET
      empno = ?
    WHERE
      schedule_id = ?;`;

    const values = [empno, schedule_id];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve();
    });
  });
};

export const addScheduleFaculty = ({ empno, schedule_id }) => {
  return new Promise((resolve, reject) => {
    let data = [];
    let sql = `select scheduleFaculty.schedule_id, start_time, end_time from scheduleFaculty left join schedule on schedule.schedule_id = scheduleFaculty.schedule_id
    where
      empno = ?
    and
      (TIME_TO_SEC(start_time) >= (select TIME_TO_SEC(a.start_time) from schedule a where a.schedule_id = ?) and
      TIME_TO_SEC(end_time) <= (select TIME_TO_SEC(b.start_time) from schedule b where b.schedule_id = ?)) or
      TIME_TO_SEC(start_time >= (select TIME_TO_SEC(c.end_time) from schedule c where c.schedule_id = ?) and
      TIME_TO_SEC(end_time) <= (select TIME_TO_SEC(d.end_time) from schedule d where d.schedule_id = ?)) and
      (day IN (select day from schedule where schedule_id = ?));`;

    db.query(
      sql,
      [empno, schedule_id, schedule_id, schedule_id, schedule_id, schedule_id],
      (err, rows) => {
        data = rows;
        console.log('Data: ' + data);

        if (data.length < 1) {
          sql = `insert into scheduleFaculty values (?,?);`;

          const values = [empno, schedule_id];

          db.query(sql, values, (err, rows) => {
            if (err) {
              console.log(err);
              return reject(500);
            }

            return resolve();
          });
        } else {
          return reject(409);
        }
      }
    );
  });
};

export const addCHFaculty = ({ empno, start_time, end_time, room, day }) => {
  return new Promise((resolve, reject) => {
    let data = [];
    let sql = `select scheduleFaculty.schedule_id, start_time, end_time from scheduleFaculty left join schedule on schedule.schedule_id = scheduleFaculty.schedule_id
    WHERE
      empno = ?
    and 
      (TIME_TO_SEC(start_time) >= TIME_TO_SEC(STR_TO_DATE(?, "%H:%i")) and
      TIME_TO_SEC(end_time) <= TIME_TO_SEC(STR_TO_DATE(?, "%H:%i")) or 
      TIME_TO_SEC(start_time) >= TIME_TO_SEC(STR_TO_DATE(?, "%H:%i")) and
      TIME_TO_SEC(end_time) <= TIME_TO_SEC(STR_TO_DATE(?, "%H:%i")) and
      (day like ?));`

    db.query(sql, [empno, start_time, start_time, end_time, end_time, day],

      (err, rows) => {
        data = rows;
        console.log('Data: ' + data);
        if(data.length < 1) {
          let sql = `insert into chfaculty(empno, start_time, end_time, room, day) values (?,?,?,?,?)`;

          const values = [
            empno,
            start_time,
            end_time,
            room,
            day
          ]

          db.query(sql, values, (err, rows) => {
            if (err) {
              console.log(err);
              return reject(500);
            }

            return resolve();
          });
        }else{
          reject(409)
        }
      }
    );
  });
};

export const deleteScheduleFaculty = ({ schedule_id }) => {
  return new Promise((resolve, reject) => {
    let sql = `delete from scheduleFaculty where schedule_id = ?;`;

    const values = [schedule_id];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve();
    });
  });
};

export const viewAllSchedule = () => {
  return new Promise((resolve, reject) => {
    let sql = `select * from schedule;`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      return resolve(rows);
    });
  });
};

export const viewScheduleByEmpno = ({ empno }) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM scheduleFaculty natural join schedule
    WHERE empno = ?;`;

    const values = [empno];

    db.query(sql, values, (err, rows) => {
      if (err) {
        return reject(500);
      }

      if (!rows.length) {
        console.log(rows.length);
        return reject(404);
      }

      return resolve(rows);
    });
  });
};

export const viewAllScheduleFaculty = () => {
  return new Promise((resolve, reject) => {
    let sql = `select * from scheduleFaculty natural join schedule;`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      if (!rows.length) {
        return reject(404);
      }

      return resolve(rows);
    });
  });
};

export const addSchedule = ({
  section,
  course_no,
  room,
  day,
  start_time,
  end_time,
  current_no_of_students,
  max_no_of_students
}) => {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO schedule (
        section,
        course_no,
        room,
        day,
        start_time,
        end_time,
        current_no_of_students,
        max_no_of_students
      )
    VALUES (
      ?,?,?,?,?,?,?,?
    );`;

    const values = [
      section,
      course_no,
      room,
      day,
      start_time,
      end_time,
      current_no_of_students,
      max_no_of_students
    ];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve();
    });
  });
};


export const editSchedule = ({
  schedule_id,
  section,
  course_no,
  room,
  day,
  start_time,
  end_time,
  teacher,
  current_no_of_students,
  max_no_of_students
}) => {
  console.log(schedule_id);

  return new Promise((resolve, reject) => {
    let sql = `UPDATE schedule SET
      section = ?,
      course_no = ?,
      room = ?,
      day = ?,
      start_time = ?,
      end_time = ?,
      teacher = ?,
      current_no_of_students = ?,
      max_no_of_students = ?
    WHERE
      schedule_id = ?;`;
    switch (teacher) {
      case '':
        teacher = null;
    }
    const values = [
      section,
      course_no,
      room,
      day,
      start_time,
      end_time,
      teacher,
      current_no_of_students,
      max_no_of_students,
      schedule_id
    ];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve();
    });
  });
};

export const deleteSchedule = ({ schedule_id }) => {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM schedule
    WHERE schedule_id = ?;`;

    const values = [schedule_id];

    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve();
    });
  });
};

export const viewSchedule = ({ schedule_id }) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM schedule
    WHERE schedule_id = ?;`;

    const values = [schedule_id];

    db.query(sql, values, (err, rows) => {
      if (err) {
        return reject(500);
      }

      if (!rows.length) {
        console.log(rows.length);
        return reject(404);
      }

      return resolve(rows[0]);
    });
  });
};

export const viewScheduleByCourseNo = ({ course_no }) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM schedule
    WHERE course_no = ?;`;

    const values = [course_no];

    db.query(sql, values, (err, rows) => {
      if (err) {
        return reject(500);
      }

      if (!rows.length) {
        console.log(rows.length);
        return reject(404);
      }

      return resolve(rows);
    });
  });
};
