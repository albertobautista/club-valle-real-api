const {getAllDessertDishes} = require('./auxiliaries')();


const getDessertDishes = async () => {
    return getAllDessertDishes()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getDessertDishes;
