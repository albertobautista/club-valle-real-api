/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const activity  = require('../models/activity');
const event     = require('../models/events');
const location     = require('../models/location');

const debug     = require('debug')('dbController');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

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


/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
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
    RemoveLocation
}