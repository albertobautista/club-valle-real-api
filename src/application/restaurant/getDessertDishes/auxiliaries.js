const restaurant = require("../../../data/restaurant");

const auxiliariesFactory = () => {
  const getDishes = () => restaurant.getDessertDishes()

  const getAllDessertDishes = async () => {
    const dishes = await getDishes();
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { dishes },
    };

  }
  

 
  

  return {
    getAllDessertDishes,
  };
};

module.exports = auxiliariesFactory;
