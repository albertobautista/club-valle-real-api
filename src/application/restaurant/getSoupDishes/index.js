const {getAllSoupDishes} = require('./auxiliaries')();


const getSoupDishes = async () => {
    return getAllSoupDishes()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getSoupDishes;
