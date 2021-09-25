const restaurant = require("../../../data/restaurant");

const auxiliariesFactory = () => {
  const getDishes = () => restaurant.getEnsaladDishes()

  const getAllEnsaladDishes = async () => {
    const dishes = await getDishes();
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { dishes },
    };

  }

 
  

  return {
    getAllEnsaladDishes,
  };
};

module.exports = auxiliariesFactory;
