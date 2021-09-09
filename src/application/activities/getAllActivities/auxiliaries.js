const activities = require("../../../data/activities");

const auxiliariesFactory = () => {
  const getActivities = () => activities.getAllActivities()

  const getAllActivities = async () => {
    const activities = await getActivities();
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { activities },
    };

  }

 
  

  return {
    getAllActivities,
  };
};

module.exports = auxiliariesFactory;
