const {getAllEnsaladDishes} = require('./auxiliaries')();


const getEnsaladDishes = async () => {
    return getAllEnsaladDishes()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getEnsaladDishes;
