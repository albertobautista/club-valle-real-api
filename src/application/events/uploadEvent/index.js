const {updatePreviousEvents, prepareEventToInsert,insertEventToDB } = require('./auxiliaries')();


const uploadEvent = async (eventInfo) => {
    return updatePreviousEvents()
        .then(()=>prepareEventToInsert(eventInfo))
        .then(insertEventToDB)
    .catch(err =>console.log("ERROR,", err))

};

module.exports = uploadEvent;
