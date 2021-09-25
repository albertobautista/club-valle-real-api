const restaurant = require("../../../data/restaurant");

const auxiliariesFactory = () => {
  const getDishes = () => restaurant.getMainDishes()

  const getAllMainDishes = async () => {
    const dishes = await getDishes();
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { dishes },
    };

  }

 
  

  return {
    getAllMainDishes,
  };
};

module.exports = auxiliariesFactory;
