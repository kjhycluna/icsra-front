import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/edit-scheduleFaculty', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.editScheduleFaculty(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully edited schedule.'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while editting schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/add-scheduleFaculty', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.addScheduleFaculty(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully added schedule to a faculty'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while adding schedule to a faculty.';
        break;
      case 409:
        message = 'Schedule conflict';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/delete-scheduleFaculty', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.deleteScheduleFaculty(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully deleted schedule from a faculty'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message =
          'Internal server error while deleting schedule from a faculty.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/add-schedule', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.addSchedule(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully added schedule'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while adding schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});


router.post('/add-chfaculty', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.addCHFaculty(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully added consultation hours to a faculty'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while adding consultation hours to a faculty.';
        break;
      case 409:
        message = 'Schedule conflict';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/view-schedule', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.viewSchedule(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully viewed schedule.',
      data: data
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while viewing schedule.';
        break;
      case 404:
        message = 'Cannot view schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/view-schedule-by-courseno', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.viewScheduleByCourseNo(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully viewed schedule.',
      data: data
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while viewing schedule.';
        break;
      case 404:
        message = 'Cannot view schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/view-all-schedule', async (req, res) => {
  try {
    const data = await Ctrl.viewAllSchedule();
    res.status(200).json({
      status: 200,
      message: 'Successfully viewed all schedule.',
      data: data
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while viewing all schedule.';
        break;
      case 404:
        message = 'Cannot view all schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/view-schedule-by-empno', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.viewScheduleByEmpno(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully viewed schedule.',
      data: data
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while viewing schedule.';
        break;
      case 404:
        message = 'Cannot view schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/view-all-scheduleFaculty', async (req, res) => {
  try {
    const data = await Ctrl.viewAllScheduleFaculty();
    res.status(200).json({
      status: 200,
      message: 'Successfully viewed all schedule of faculties.',
      data: data
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message =
          'Internal server error while viewing all schedule of faculties.';
        break;
      case 404:
        message = 'Cannot view all schedule of faculties.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/edit-schedule', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.editSchedule(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully edited schedule.'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error while editting schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/delete-schedule', async (req, res) => {
  console.log('Request');
  try {
    const data = await Ctrl.deleteSchedule(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully deleted schedule.'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error deleting schedule.';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;

//git config --remove-section <name>
