/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const queries = require('../db/queries');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

const ACTIVITIES_KEY    = 'idEvent';
const STATUS_KEY        = 'status';
const INACTIVE_STATUS   = 'I';
const DELETE_STATUS     = 'E';


/**
 * Get all events
 * @returns 
 */
async function GetAllEvents() {
    return queries.FindAll('events');
}

/**
 * Get an event by it's id
 * @param {any} id Id
 * @returns 
 */
async function GetEvent(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.FindById('events', query);
}

/**
 * Insert a new event
 * @param {any} obj Object 
 * @returns 
 */
async function InsertEvent(obj) {
    return queries.Insert('events', obj);
}

/**
 * Update an existing event
 * @param {any} id Id
 * @param {any} obj Object
 * @returns 
 */
async function UpdateEvent(id, obj) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    console.log("QUERY", query)
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.UpdateById('events', query, obj);
}

/**
 * Removes an event
 * @param {any} id Id
 * @returns 
 */
async function RemoveEvent(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    let obj     = {
        [STATUS_KEY] : DELETE_STATUS
    }
    return queries.UpdateById('events', query, obj);
}

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
    GetAllEvents,
    GetEvent,
    InsertEvent,
    UpdateEvent,
    RemoveEvent
}