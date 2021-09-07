const gateway = require("../helpers/gateway")();
const moment = require("moment");
const emailEvents = {};
const today = moment();

emailEvents.getCurrentEvent = () => {
  const columns = ["id", "titulo", "cuerpo", "imagen", "estatus"];
  return gateway.select("eventoscorreos", columns, { estatus: "A" });
};

emailEvents.getMailsToSend = () => {
  const columns = ["IdUsuariosCorreos", "Nombre", "Correo"];
  return gateway.query(
    "SELECT * FROM usuarioscorreos where Enviado = 0 AND Activo=1 limit 50"
  );
};

emailEvents.changeEmailStatus = (mail) => {
  const fields = {
    Enviado: 1,
    FechaEnvioUltimoCorreo: today.format("YYYY-MM-DD HH:mm:ss"),
  };
  return gateway.update("usuarioscorreos", fields, {
    IdUsuariosCorreos: mail,
  });
};

module.exports = emailEvents;
