/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const dotenv          = require('dotenv');
dotenv.config({path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.development'});

const express         = require('express');
const multer          = require('multer');
const dbController    = require('./controllers/dbController');
const imageMiddleware = require('./middleware/images');
const path            = require('path');
const fs              = require('fs');
const cors            = require('cors');
/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/
const app                = express();
const router             = express.Router();
const storage            = multer.diskStorage({
                            destination: function (req, file, cb) {
                                cb(null, `${process.env.STATIC_FOLDER}/`);
                            },
                            filename: function (req, file, cb) {
                                cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
                            }
                         });
const upload             = multer({ storage });

if (!fs.existsSync(`${process.env.STATIC_FOLDER}`)) {
    fs.mkdirSync(`${process.env.STATIC_FOLDER}`);
}


app.use(express.static(`${process.env.STATIC_FOLDER}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

// Activity
router.get(     '/activity',                                                            dbController.GetAllActivities);
router.get(     '/activity/:id',                                                        dbController.GetActivity);
router.post(    '/activity',        upload.single('principalImage'),  imageMiddleware,  dbController.InsertActivity);
router.patch(   '/activity/:id',    upload.single('principalImage'),  imageMiddleware,  dbController.UpdateActivity);
router.delete(  '/activity/:id',                                                        dbController.RemoveActivity);

// Events
router.get(     '/event',                                                               dbController.GetAllEvents);
router.get(     '/event/:id',                                                           dbController.GetEvent);
router.post(    '/event',           upload.single('image'),           imageMiddleware,  dbController.InsertEvent);
router.patch(   '/event/:id',       upload.single('image'),           imageMiddleware,  dbController.UpdateEvent);
router.delete(  '/event/:id',                                                           dbController.RemoveEvent);

// Locations
router.get(     '/location',                                                               dbController.GetAllLocations);
router.get(     '/location/:id',                                                           dbController.GetLocation);
router.post(    '/location',           upload.single('image'),           imageMiddleware,  dbController.InsertLocation);
router.patch(   '/location/:id',       upload.single('image'),           imageMiddleware,  dbController.UpdateLocation);
router.delete(  '/location/:id',                                                           dbController.RemoveLocation);

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/
module.exports = {
    app
};
