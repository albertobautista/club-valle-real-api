/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const queries = require('../db/queries');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

const ACTIVITIES_KEY    = 'idPlace';
const STATUS_KEY        = 'status';
const INACTIVE_STATUS   = 'I';
const DELETE_STATUS     = 'E';


/**
 * Get all activities
 * @returns 
 */
async function GetAllLocations() {
    return queries.FindAll('places');
}

/**
 * Get an activity by it's id
 * @param {any} id Id
 * @returns 
 */
async function GetLocation(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.FindById('places', query);
}

/**
 * Insert a new activity
 * @param {any} obj Object 
 * @returns 
 */
async function InsertLocation(obj) {
    return queries.Insert('places', obj);
}

/**
 * Update an existing activity
 * @param {any} id Id
 * @param {any} obj Object
 * @returns 
 */
async function UpdateLocation(id, obj) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.UpdateById('places', query, obj);
}

/**
 * Removes an activity
 * @param {any} id Id
 * @returns 
 */
async function RemoveLocation(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    let obj     = {
        [STATUS_KEY] : INACTIVE_STATUS
    }
    return queries.UpdateById('places', query, obj);
}

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
    GetAllLocations,
    GetLocation,
    InsertLocation,
    UpdateLocation,
    RemoveLocation
}