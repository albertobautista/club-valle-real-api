/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const queries = require('../db/queries');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

const ACTIVITIES_KEY    = 'idTeacher';
const STATUS_KEY        = 'status';
const INACTIVE_STATUS   = 'I';
const DELETE_STATUS     = 'E';


/**
 * Get all activities
 * @returns 
 */
async function GetAllTeachers() {
    return queries.FindAll('teachers');
}

/**
 * Get an activity by it's id
 * @param {any} id Id
 * @returns 
 */
async function GetTeacher(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.FindById('teachers', query);
}

/**
 * Insert a new activity
 * @param {any} obj Object 
 * @returns 
 */
async function InsertTeacher(obj) {
    return queries.Insert('teachers', obj);
}

/**
 * Update an existing activity
 * @param {any} id Id
 * @param {any} obj Object
 * @returns 
 */
async function UpdateTeacher(id, obj) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.UpdateById('teachers', query, obj);
}

/**
 * Removes an activity
 * @param {any} id Id
 * @returns 
 */
async function RemoveTeacher(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    let obj     = {
        [STATUS_KEY] : INACTIVE_STATUS
    }
    return queries.UpdateById('teachers', query, obj);
}

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
    GetAllTeachers,
    GetTeacher,
    InsertTeacher,
    UpdateTeacher,
    RemoveTeacher
}