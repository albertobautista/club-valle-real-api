const { Router } = require("express");
const dbConn = require("../../config/db.config");
const path = require("path");
const sendEmail = require("../../config/emailConfig");
const cron = require('node-cron')

cron.schedule(" * * * * *", () =>{
  console.log("HOLA");
})

const router = Router();

const connection = dbConn();

router.get("/", (req, res) => {
  connection.query("SELECT Correo FROM usuarioscorreos", (error, result) => {
    const queryResult = result;
    const emailArray = [];

    queryResult.map((email) => {
      emailArray.push(email.Correo);
    });

    return res.json(emailArray);
  });
});

// router.get("/sendEmails", (req, res) => {
//   function getCurrenteEvent(callback) {
//     var sql = "SELECT * FROM eventoscorreos WHERE estatus='A'";
//     connection.query(sql, function (err, results) {
//       if (err) {
//         message = err.sqlMessage;
//         success = 0;
//         response = { success, message };

//         return callback(response);
//       }
//       message = results;
//       success = 1;
//       response = { success, message };

//       return callback(response);
//     });
//   }
//   function getEmailsUsers(callback) {
//     let queryResult = [];
//     var sql = "SELECT Correo FROM usuarioscorreos";
//     connection.query(sql, function (err, results) {
//       if (err) {
//         message = err.sqlMessage;
//         success = 0;
//         response = { success, message };

//         return callback(response);
//       }
//       queryResult = results;
//       const emailArray = [];

//       queryResult.map((email) => {
//         emailArray.push(email.Correo);
//       });
//       message = emailArray;
//       success = 1;
//       response = { success, message };

//       return callback(response);
//     });
//   }

//   getCurrenteEvent(function (result) {
//     let currentEvent = {};
//     currentEvent = JSON.parse(JSON.stringify(result));
//     console.log("currentEvent", currentEvent);
//     console.log("currentEvent", currentEvent.message[0].titulo);

//     getEmailsUsers(function (result) {
//       let arregloMail = [];
//       let resultEmail = JSON.parse(JSON.stringify(result));
//       arregloMail =resultEmail.message;
//       console.log("arregloMail correos", arregloMail.message);

//       const { titulo, cuerpo, imagen } = currentEvent.message[0];
//       const message = {
//         from: "Club Valle Real de Guadalajara <clubvallerealredes@gmail.com>", // Sender address
//         // to: 'dachb_10@hotmail.com',
//         bcc: arregloMail, // recipients
//         subject: titulo, // Subject line
//         html: `<p>Buen día estimado usuario del *Club Valle Real*:</p>
//         <p>${cuerpo}</p>
//         <p>Que tenga un excelente día</p>`, // Plain text body
//         attachments: [
//           {
//             // Use a URL as an attachment
//             filename: "Canelo.jpg",
//             // path: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
//             path: path.join(__dirname, `../public/img/${imagen}`),

//             // path: './img/chivas.jpg'
//           },
//         ],
//       };
//       console.log("Mensaje Final", message);
//       // sendEmail(message)
//       //   .then((response) => {
//       //     console.log("MIA RESPONSE", response);
//       //   })
//       //   .catch((error) => {
//       //     console.log("Error: Correos", error);
//       //   });
//     });
//   });

//   console.log("sending email..");


// });

router.post("/uploadEvent", (req, res) => {
  console.log("Entroooo")
  let response = {};
  let message = "";
  let success = 0;
  console.log(req.file);

  function insertEmailEvent(title, body, image, callback) {
    console.log("title", title);
    var sql =
      "INSERT INTO eventoscorreos(titulo, cuerpo, imagen, estatus) VALUES ('" +
      title +
      "','" +
      body +
      "','" +
      image +
      "','A')";
    connection.query(sql, function (err, results) {
      if (err) {
        message = err.sqlMessage;
        success = 0;
        response = { success, message };

        return callback(response);
      }
      message = "Se insertó el registro";
      success = 1;
      response = { success, message };

      return callback(response);
    });
  }

  if (!req.file) {
    message = "La imágen es requerida";
    success = 0;
    response = { success, message };

    res.send(response);
  } else {
    const { title, body } = req.body;
    const { filename } = req.file;
    console.log("titleEvent", title, body);

    insertEmailEvent(title, body, filename, function (result) {
      response = result;
      res.send(response);
    });
  }
});

router.post("/editEvent", (req, res) => {
  let response = {};
  let message = "";
  let success = 0;

  function updateEmailEvent(id, title, body, image, callback) {
    var sql =
      "UPDATE eventoscorreos SET titulo='" +
      title +
      "', cuerpo='" +
      body +
      "', imagen='" +
      image +
      "' WHERE id =" +
      id +
      "";
    console.log("sql", sql);
    connection.query(sql, function (err, results) {
      if (err) {
        message = err.sqlMessage;
        success = 0;
        response = { success, message };

        return callback(response);
      }
      message = "Se modificó el registro";
      success = 1;
      response = { success, message };

      return callback(response);
    });
  }

  if (!req.file) {
    message = "La imágen es requerida";
    success = 0;
    response = { success, message };

    res.send(response);
  } else {
    const { id, title, body } = req.body;
    const { filename } = req.file;
    console.log("titleEvent", title, body, id);

    updateEmailEvent(id, title, body, filename, function (result) {
      response = result;
      res.send(response);
    });
  }
});

router.post("/enableEvent", (req, res) => {
  let response = {};
  let message = "";
  let success = 0;

  function updateEmailEvent(id, callback) {
    var sql = "UPDATE eventoscorreos SET estatus ='A' WHERE id =" + id + "";
    console.log("sql", sql);
    connection.query(sql, function (err, results) {
      if (err) {
        message = err.sqlMessage;
        success = 0;
        response = { success, message };

        return callback(response);
      }
      message = "Se modificó el registro";
      success = 1;
      response = { success, message };

      return callback(response);
    });
  }

  const { id } = req.body;
  console.log("titleEvent", id);

  updateEmailEvent(id, function (result) {
    response = result;
    res.send(response);
  });
});

router.post("/disableEvent", (req, res) => {
  let response = {};
  let message = "";
  let success = 0;

  function updateEmailEvent(id, callback) {
    var sql = "UPDATE eventoscorreos SET estatus ='I' WHERE id =" + id + "";
    console.log("sql", sql);
    connection.query(sql, function (err, results) {
      if (err) {
        message = err.sqlMessage;
        success = 0;
        response = { success, message };

        return callback(response);
      }
      message = "Se modificó el registro";
      success = 1;
      response = { success, message };

      return callback(response);
    });
  }

  const { id } = req.body;
  console.log("titleEvent", id);

  updateEmailEvent(id, function (result) {
    response = result;
    res.send(response);
  });
});

router.post("/deleteEvent", (req, res) => {
  let response = {};
  let message = "";
  let success = 0;

  function deleteEmailEvent(id, callback) {
    var sql = "UPDATE eventoscorreos SET estatus ='E' WHERE id =" + id + "";
    console.log("sql", sql);
    connection.query(sql, function (err, results) {
      if (err) {
        message = err.sqlMessage;
        success = 0;
        response = { success, message };

        return callback(response);
      }
      message = "Se modificó el registro";
      success = 1;
      response = { success, message };

      return callback(response);
    });
  }

  const { id } = req.body;
  console.log("titleEvent", id);

  deleteEmailEvent(id, function (result) {
    response = result;
    res.send(response);
  });
});

// app.post("/persons", (req, res) => {
//   console.log(req.body);

//   const { nombre, descripcion } = req.body;

//   console.log("req.body", req.body);
//   connection.query(
//     "INSERT INTO persona SET?",
//     {
//       nombre,
//       descripcion,
//     },
//     (err, result) => {
//       res.redirect("/");
//     }
//   );
// });

module.exports = router;
