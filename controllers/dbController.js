/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const activity  = require('../models/activity');
const event     = require('../models/events');
const location     = require('../models/location');
const teacher     = require('../models/teacher');
const carouselImage     = require('../models/carousel_image');



const debug     = require('debug')('dbController');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

// Test

/**
 * Get all activities
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
 async function GetTest(req, res, next) {
        const data = {
            message:"Hola mundo"
        }
        res.status(200).json(data);


}

// Activity

/**
 * Get all activities
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
async function GetAllActivities(req, res, next) {
    activity.GetAllActivities()
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Get an activity by it's id
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function GetActivity(req, res, next) {
    let { id } = req.params;
    activity.GetActivity(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Insert a new activity
 * @param {*} req Request
 *                Body:
 *                {
 *                      "idActivity":       number,
 *                      "name":             string,
 *                      "description":      string,
 *                      "idPlace":          number,
 *                      "idTeacher":        number,
 *                      "idClassSchedule":  number,
 *                      "principalImage":   string,
 *                      "icon":             string,
 *                      "status":           string,
 *                      "type":             string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function InsertActivity(req, res, next) {
    let obj = req.body;
    activity.InsertActivity(obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Update an existing activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 *                Body:
 *                {
 *                      "idActivity":       number,
 *                      "name":             string,
 *                      "description":      string,
 *                      "idPlace":          number,
 *                      "idTeacher":        number,
 *                      "idClassSchedule":  number,
 *                      "principalImage":   string,
 *                      "icon":             string,
 *                      "status":           string,
 *                      "type":             string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function UpdateActivity(req, res, next) {
    let { id } = req.params;
    let obj = req.body;
    activity.UpdateActivity(id, obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Removes an activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function RemoveActivity(req, res, next) {
    let { id } = req.params;
    activity.RemoveActivity(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

// Event

/**
 * Get all activities
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
 async function GetAllEvents(req, res, next) {
    event.GetAllEvents()
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Get an activity by it's id
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function GetEvent(req, res, next) {
    let { id } = req.params;
    event.GetEvent(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Insert a new activity
 * @param {*} req Request
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function InsertEvent(req, res, next) {
    let obj = req.body;
    event.InsertEvent(obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Update an existing activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function UpdateEvent(req, res, next) {
    let { id } = req.params;
    let obj = req.body;
    console.log(obj)
    event.UpdateEvent(id, obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Removes an activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function RemoveEvent(req, res, next) {
    let { id } = req.params;
    event.RemoveEvent(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

// Location

/**
 * Get all activities
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
 async function GetAllLocations(req, res, next) {
    location.GetAllLocations()
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Get an activity by it's id
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function GetLocation(req, res, next) {
    let { id } = req.params;
    location.GetLocation(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Insert a new activity
 * @param {*} req Request
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function InsertLocation(req, res, next) {
    let obj = req.body;
    location.InsertLocation(obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Update an existing activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function UpdateLocation(req, res, next) {
    let { id } = req.params;
    let obj = req.body;
    console.log(obj)
    location.UpdateLocation(id, obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Removes an activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function RemoveLocation(req, res, next) {
    let { id } = req.params;
    location.RemoveLocation(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

// Teacher

/**
 * Get all activities
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
 async function GetAllTeachers(req, res, next) {
    teacher.GetAllTeachers()
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Get an activity by it's id
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function GetTeacher(req, res, next) {
    let { id } = req.params;
    teacher.GetTeacher(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Insert a new activity
 * @param {*} req Request
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function InsertTeacher(req, res, next) {
    let obj = req.body;
    teacher.InsertTeacher(obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Update an existing activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function UpdateTeacher(req, res, next) {
    let { id } = req.params;
    let obj = req.body;
    console.log(obj)
    teacher.UpdateTeacher(id, obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Removes an activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function RemoveTeacher(req, res, next) {
    let { id } = req.params;
    teacher.RemoveTeacher(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

// Carousel_Image

/**
 * Get all activities
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
 async function GetAllCarouselImages(req, res, next) {
    carouselImage.GetAllCarouselImages()
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Get an activity by it's id
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function GetCarouselImage(req, res, next) {
    let { id } = req.params;
    carouselImage.GetCarouselImage(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Insert a new activity
 * @param {*} req Request
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function InsertCarouselImage(req, res, next) {
    let obj = req.body;
    carouselImage.InsertCarouselImage(obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Update an existing activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 *                Body:
 *                {
 *                      "idEvent":          number,
 *                      "title":            string,
 *                      "description":      string,
 *                      "image":            string,
 *                      "date":             string,
 *                      "status":           string,
 *                }
 * @param {*} res Response
 * @param {*} next Next
 */
async function UpdateCarouselImage(req, res, next) {
    let { id } = req.params;
    let obj = req.body;
    console.log(obj)
    carouselImage.UpdateCarouselImage(id, obj)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/**
 * Removes an activity
 * @param {*} req Request
 *                URL Params:
 *                /:id
 * @param {*} res Response
 * @param {*} next Next
 */
async function RemoveCarouselImage(req, res, next) {
    let { id } = req.params;
    carouselImage.RemoveCarouselImage(id)
    .then((data) => {
        debug(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        debug(err);
        res.status(500).json(err);
    })
}

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
    GetTest,
    // Activities
    GetAllActivities,
    GetActivity,
    InsertActivity,
    UpdateActivity,
    RemoveActivity,
    // Events
    GetAllEvents,
    GetEvent,
    InsertEvent,
    UpdateEvent,
    RemoveEvent,
    // Locations
    GetAllLocations,
    GetLocation,
    InsertLocation,
    UpdateLocation,
    RemoveLocation,
    // Teachers
    GetAllTeachers,
    GetTeacher,
    InsertTeacher,
    UpdateTeacher,
    RemoveTeacher,
     // Carousel Images
     GetAllCarouselImages,
     GetCarouselImage,
     InsertCarouselImage,
     UpdateCarouselImage,
     RemoveCarouselImage
}