const gateway = require("../helpers/gateway")();

const activities = {};

activities.getAllActivities = () => {
  const columns = ["idActivity", "name", "description"];
  const qu = `SELECT activity.idActivity, activity.name, activity.description, places.name as place,teachers.name as teacher, classschedules.description as schedule, activity.principalImage, activity.icon 
  FROM activity 
  left join activityplace activityPlace on activityPlace.idActivityPlace = activity.idActivity
  left join places ON places.idPlace = activity.idPlace
  left join teachers on teachers.idTeacher = activity.idTeacher
  left join classschedules ON classschedules.idClassSchedule = activity.idClassSchedule;;`;
  return gateway.query(qu);
};

activities.getSportsActivities = () => {
  const columns = ["idActivity", "name", "description"];
  const qu = `SELECT activity.idActivity, activity.name, activity.description, places.name as place, teachers.name as teacher,classschedules.description as schedule, activity.principalImage, activity.icon 
  FROM activity 
  left join activityplace activityPlace on activityPlace.idActivityPlace = activity.idActivity
  left join places ON places.idPlace = activity.idPlace
  left join teachers on teachers.idTeacher = activity.idTeacher
  left join classschedules ON classschedules.idClassSchedule = activity.idClassSchedule
  WHERE type='S' and activity.status='A';`;
  return gateway.query(qu);
};

activities.getCulturalActivities = () => {
  const columns = ["idActivity", "name", "description"];
  const qu = `SELECT activity.idActivity, activity.name, activity.description, places.name as place,teachers.name as teacher,classschedules.description as schedule, activity.principalImage, activity.icon 
  FROM activity 
  left join activityplace activityPlace on activityPlace.idActivityPlace = activity.idActivity
  left join places ON places.idPlace = activity.idPlace
  left join teachers on teachers.idTeacher = activity.idTeacher
  left join classschedules ON classschedules.idClassSchedule = activity.idClassSchedule
  WHERE type='C' and activity.status='A';`;
  return gateway.query(qu);
};

module.exports = activities;
