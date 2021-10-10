/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const queries = require('../db/queries');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

const ACTIVITIES_KEY    = 'idActivity';
const STATUS_KEY        = 'status';
const INACTIVE_STATUS   = 'I';

/**
 * Get all activities
 * @returns 
 */
async function GetAllActivities() {
    return queries.FindAll('activity');
}

/**
 * Get an activity by it's id
 * @param {any} id Id
 * @returns 
 */
async function GetActivity(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.FindById('activity', query);
}

/**
 * Insert a new activity
 * @param {any} obj Object 
 * @returns 
 */
async function InsertActivity(obj) {
    return queries.Insert('activity', obj);
}

/**
 * Update an existing activity
 * @param {any} id Id
 * @param {any} obj Object
 * @returns 
 */
async function UpdateActivity(id, obj) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.UpdateById('activity', query, obj);
}

/**
 * Removes an activity
 * @param {any} id Id
 * @returns 
 */
async function RemoveActivity(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    let obj     = {
        [STATUS_KEY] : INACTIVE_STATUS
    }
    return queries.UpdateById('activity', query, obj);
}

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
    GetAllActivities,
    GetActivity,
    InsertActivity,
    UpdateActivity,
    RemoveActivity
}