const {getSportsActivities} = require('./auxiliaries')();


const getSActivities = async () => {
    return getSportsActivities()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getSActivities;
