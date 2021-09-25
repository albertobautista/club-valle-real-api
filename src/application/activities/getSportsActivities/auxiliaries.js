const activities = require("../../../data/activities");

const auxiliariesFactory = () => {
  const getActivities = () => activities.getSportsActivities()

  const getSportsActivities = async () => {
    const activities = await getActivities();
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { activities },
    };

  }

 
  

  return {
    getSportsActivities,
  };
};

module.exports = auxiliariesFactory;
