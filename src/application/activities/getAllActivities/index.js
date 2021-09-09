const {getAllActivities} = require('./auxiliaries')();


const getActivities = async () => {
    return getAllActivities()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getActivities;
