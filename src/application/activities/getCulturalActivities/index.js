const {getCulturalActivities} = require('./auxiliaries')();


const getCActivities = async () => {
    return getCulturalActivities()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getCActivities;
