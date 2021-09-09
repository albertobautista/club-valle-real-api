const gateway = require("../helpers/gateway")();

const activities = {};

activities.getAllActivities= () =>{
  const columns = ["idActivity","name", "description"];
  const qu = "SELECT activity.idActivity, activity.name, activity.description, activityPlace.name as place, activity.principalImage, activity.icon FROM activity left join activityplace activityPlace on activityPlace.idActivityPlace = activity.idActivity;"
  return gateway.query(qu);

}





module.exports = activities;
