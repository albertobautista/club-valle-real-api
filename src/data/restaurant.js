const gateway = require("../helpers/gateway")();

const restaurant = {};

restaurant.getSoupDishes= () =>{
  const columns = ["idActivity","name", "description"];
  const qu = "SELECT * from restaurant WHERE type='Sopas';"
  return gateway.query(qu);

}

restaurant.getEnsaladDishes= () =>{
  const columns = ["idActivity","name", "description"];
  const qu = "SELECT * from restaurant WHERE type='Ensaladas';"
  return gateway.query(qu);

}

restaurant.getMainDishes= () =>{
  const columns = ["idActivity","name", "description"];
  const qu = "SELECT * from restaurant WHERE type='Principal';"
  return gateway.query(qu);

}

restaurant.getDessertDishes= () =>{
  const columns = ["idActivity","name", "description"];
  const qu = "SELECT * from restaurant WHERE type='Postres';"
  return gateway.query(qu);

}





module.exports = restaurant;
