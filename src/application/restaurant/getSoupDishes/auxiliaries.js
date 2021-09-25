const restaurant = require("../../../data/restaurant");

const auxiliariesFactory = () => {
  const getDishes = () => restaurant.getSoupDishes()

  const getAllSoupDishes = async () => {
    const dishes = await getDishes();
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { dishes },
    };

  }

 
  

  return {
    getAllSoupDishes,
  };
};

module.exports = auxiliariesFactory;
