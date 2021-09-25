const activities = require("../../../data/activities");

const auxiliariesFactory = () => {
  const getActivities = () => activities.getCulturalActivities()

  const getCulturalActivities = async () => {
    const activities = await getActivities();
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { activities },
    };

  }

 
  

  return {
    getCulturalActivities,
  };
};

module.exports = auxiliariesFactory;
