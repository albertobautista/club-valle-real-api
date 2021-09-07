const events = require("../../../data/events");

const auxiliariesFactory = () => {
  const getAllEvents = () => events.getAllEventsQuery()

 
  

  return {
    getAllEvents,
  };
};

module.exports = auxiliariesFactory;
