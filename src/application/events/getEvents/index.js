const {getAllEvents} = require('./auxiliaries')();


const getEvents = async () => {
    return getAllEvents()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getEvents;
