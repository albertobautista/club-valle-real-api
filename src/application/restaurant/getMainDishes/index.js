const {getAllMainDishes} = require('./auxiliaries')();


const getMainDishes = async () => {
    return getAllMainDishes()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getMainDishes;
