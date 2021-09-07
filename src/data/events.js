const gateway = require("../helpers/gateway")();

const events = {};

events.getAllEventsToUpdate = () => {
    const columns = ["id"];
    return gateway.select("eventoscorreos", columns, { estatus: "A" });
  };

  events.changeEventsStatus = event => {
    const fields = {
      estatus: 'I',
    };
    return gateway.update("eventoscorreos", fields, {
      id: event
    });
  };

events.insertEvent = fields => {
  console.log("fields",fields)
  return gateway.insert('eventoscorreos', {
      titulo: fields.title,
      cuerpo: fields.body,
      imagen: fields.image
    })
};





module.exports = events;
