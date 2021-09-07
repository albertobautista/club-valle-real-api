const events = require("../../../data/events");
const jsftp = require("jsftp");

const Ftp = new jsftp({
  host: "66.96.147.117",
  port: 21, // defaults to 21
  user: "clubvallerealcom", // defaults to "anonymous"
  pass: "ClubValleReal123?", // defaults to "@anonymous"
});

const auxiliariesFactory = () => {
  const getAllEventsToUpdate = () => events.getAllEventsToUpdate();

  const insertEvent = (event) => events.insertEvent(event);

  const prepareEventToInsert = async (eventInfo) => {
    console.log("eventInfo ", eventInfo);

    const event = {
      title: eventInfo.body.title,
      body: eventInfo.body.body,
      image: eventInfo.file.filename,
    };
    console.log("event ", event);
    return event;
  };

  const updatePreviousEvents = async () => {
    const arregloEvents = [];
    const previousEvents = await getAllEventsToUpdate();
    console.log("previousEvents", previousEvents);

    previousEvents.map((event) => {
      arregloEvents.push(event.id);
    });
    console.log("arregloEvent Update, ", arregloEvents);
    return Promise.all(
      arregloEvents.map((event) => updateStatusPreviousEvents(event))
    );
  };

  const updateStatusPreviousEvents = (event) => {
    console.log("event", event);
    events.changeEventsStatus(event);
  };

  const insertEventToDB = (event) => {
    return insertEvent(event)
      .then((result) => {
        const response = {
          succes: 1,
          message: "El evento se insertó correctamente",
          data: result,
        };
        return response;
      })
      .catch((error) => {
        const response = {
          succes: 0,
          message: "Error al insertar evento",
          data: error,
        };
        return response;
      });
  };

  return {
    updatePreviousEvents,
    prepareEventToInsert,
    insertEventToDB,
  };
};

module.exports = auxiliariesFactory;
