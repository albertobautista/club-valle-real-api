const emailEvents = require("../../../data/email-events");
const path = require("path");
const sendEmail = require("../../../../config/emailConfig");
const selectEmail = require("./emailTypes");

const auxiliariesFactory = () => {
  const getCurrenteEvent = () => emailEvents.getCurrentEvent();

  const getMailsAccounts = () => emailEvents.getMailsToSend();

  const prepareMailsToSend = async () => {
    const arregloMail = [];
    const eventToSend = await getCurrenteEvent();
    const emailsAccounts = await getMailsAccounts();

    emailsAccounts.map((email) => {
      arregloMail.push(email.Correo);
    });

    console.log("arregloMail", arregloMail);
    // const hola = path.join(__dirname, `../../../public/img/`);
    const { titulo, cuerpo, imagen } = eventToSend[0];
    const mensaje = `Como parte de los operativos que realiza la Asociación de Colonos, y siempre preocupados por la seguridad de nuestra comunidad, la Comisión de Seguridad y Vialidad ha implementado la colocación de radares móviles dentro del Fraccionamiento, por lo que es nuestra obligación informarle que a partir del día 19 de Abril del año en curso, entrarán en funcionamiento dichos radares, desactivando el tag a los vehículos infractores y en el caso de proveedores y visitantes, la sanción será la restricción del ingreso del vehículo, es decir, que la persona podrá ingresar a Valle Real caminando o en otro vehículo.
    Es importante hacer de su conocimiento que la cuota por la reactivación del tag será de $430.00 pesos, cantidad que deberá ser cubierta a fin de que el tag sea reactivado, o se pueda permitir el ingreso de visitantes y proveedores que hayan infringido nuestro reglamento de vialidad.
    Por lo anterior, solicitamos de su apoyo y cooperación a fin de que no se vea afectado con esta medida, así mismo, hacer extensiva esta información a sus visitantes y proveedores, de igual manera lo invitamos a respetar el límite máximo de velocidad de 30km/h.
    Quedamos a sus órdenes para cualquier información o duda en el departamento de Relaciones Públicas en el teléfono 333832-0188 o al correo electrónico relacionespublicas@colonosvallereal.com.`;
    const message = {
      from: "Club Valle Real de Guadalajara <clubvallerealredes@gmail.com>", // Sender address
      bcc: arregloMail, // recipients
      // subject: titulo,
      subject: "CAMPAÑA DE RECOLECCIÓN DE RESIDUOS ELECTRÓNICOS", // Subject line
       // Subject line
      // subject: "Recordatorio radares móviles de velocidad", // Subject line
      // attachments: [
      //   {
      //     // utf-8 string as an attachment
      //     filename: "ReglamentoDeTenis.pdf",
      //     path: "https://clubvallereal.com/imagenCorreos/ReglamentoDeTenis.pdf",
      //   },
      // ],
      // html: selectEmail.selectEmail("image", imagen, ""), // Plain text body
      html: selectEmail.selectEmail("text", "", mensaje), // Plain text body

      // attachments: [
      //   {
      //     // Use a URL as an attachment
      //     filename: `${titulo}.png`,
      //     // // path: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      //     path: path.join(__dirname, `../../../public/img/${imagen}`),
      //     cid: 'unique@kreata.ee'

      //     // path: './img/chivas.jpg'
      //   },
      // ],
    };

    return message;
  };

  const sendEmails = (message) => sendEmail(message);

  const verifyEmailSentResults = (response) => {
    let acceptedResults = [];
    let rejectedResults = [];
    acceptedResults = response.accepted;
    rejectedResults = response.rejected;

    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { acceptedResults, rejectedResults },
    };
  };

  const updateSentMails = (mail) => {
    emailEvents.changeEmailStatus(mail);
  };
  const correosEnviados = (correos) => {
    return { respuesta: "Nueva funcion", correos };
  };
  const changeEmailStatus = async (correos) => {
    const arregloMail = [];
    const emailsAccounts = await getMailsAccounts();

    emailsAccounts.map((email) => {
      arregloMail.push(email.IdUsuariosCorreos);
    });

    // console.log("arregloMail Update, ", arregloMail);

    Promise.all(arregloMail.map((mail) => updateSentMails(mail)));
    return { respuesta: "Envío de correos", correos };
  };

  return {
    prepareMailsToSend,
    sendEmails,
    verifyEmailSentResults,
    correosEnviados,
    changeEmailStatus,
  };
};

module.exports = auxiliariesFactory;
