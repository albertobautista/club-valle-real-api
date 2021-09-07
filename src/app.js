const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const jobs = require("./application/jobs");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img"),
  filename: (req, file, cb) => {
    // cb(null, uuidv4() + path.extname(file.originalname).toLowerCase() );
    cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
  },
});

//Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(
  multer({
    storage,
    dest: path.join(__dirname, "public/img"),
    // limits: { fileSize: 9000000 },
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|JPG|jpg|png|PNG/;
      const mimeType = fileTypes.test(file.mimetype);
      const extName = fileTypes.test(path.extname(file.originalname));
      console.log("mimeType", mimeType);
      console.log("extName", extName);
      if (mimeType && extName) {
        return cb(null, true);
      } else {
        cb("Error: Archivo debe ser una imágen valida");
      }
    },
  }).single("image")
);

//Routes
// app.use(require("./routes/emailEvents"));
// const emailEvents = require("./api-routes/email-events");
// app.use("/", emailEvents);
// const events = require("./api-routes/events");
// app.use("/", events);
app.get('/alberto', (req,res)=>{
  res.send("Bienvenido Alberto")
})

// Inicializador de Jobs
// jobs.start()

app.listen(app.get("port"), () => {
  console.log("Server en Port 3000");
});
