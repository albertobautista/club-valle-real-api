/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const queries = require('../db/queries');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

const ACTIVITIES_KEY    = 'idCarouselImage';
const STATUS_KEY        = 'status';
const INACTIVE_STATUS   = 'I';
const DELETE_STATUS     = 'E';


/**
 * Get all activities
 * @returns 
 */
async function GetAllCarouselImages() {
    return queries.FindAll('carousel_image');
}

/**
 * Get an activity by it's id
 * @param {any} id Id
 * @returns 
 */
async function GetCarouselImage(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.FindById('carousel_image', query);
}

/**
 * Insert a new activity
 * @param {any} obj Object 
 * @returns 
 */
async function InsertCarouselImage(obj) {
    return queries.Insert('carousel_image', obj);
}

/**
 * Update an existing activity
 * @param {any} id Id
 * @param {any} obj Object
 * @returns 
 */
async function UpdateCarouselImage(id, obj) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    return queries.UpdateById('carousel_image', query, obj);
}

/**
 * Removes an activity
 * @param {any} id Id
 * @returns 
 */
async function RemoveCarouselImage(id) {
    let query   = Object.assign({}, queries.FindByIdQuery);
    query.key   = ACTIVITIES_KEY;
    query.id    = id;
    let obj     = {
        [STATUS_KEY] : DELETE_STATUS
    }
    return queries.UpdateById('carousel_image', query, obj);
}

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
    GetAllCarouselImages,
    GetCarouselImage,
    InsertCarouselImage,
    UpdateCarouselImage,
    RemoveCarouselImage
}