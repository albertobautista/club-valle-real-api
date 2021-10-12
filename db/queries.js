/***********************************************************************************************/
/******************************************** Imports ******************************************/
/***********************************************************************************************/
const manager = require('./connection/manager');

/***********************************************************************************************/
/************************************* Module Implementation ***********************************/
/***********************************************************************************************/

/**
 * Find by id query base
 */
const FindByIdQuery = {
    key: undefined,
    id:  undefined
};

/**
 * Find all items
 * @param {string} table Table
 * @returns 
 */
function FindAll(table) {
    return new Promise((res, rej) => {
        manager.pool.query(`SELECT * from ${table} where status in('A', 'I')`, (err, results, fields) => {
            if (err) {
                // TODO: Add return codes
                rej(err);
            } else {
                res(results);
            }
        });
    });
}

/**
 * Find an item by it's id
 * @param {string} table Table 
 * @param {FindByIdQuery} query Query
 * @returns 
 */
function FindById(table, query) {
    return new Promise((res, rej) => {
        manager.pool.query(`SELECT * from ${table} WHERE ${query.key}=${query.id}`, (err, results, fields) => {
            if (err) {
                // TODO: Add return codes
                rej(err);
            } else {
                res(results);
            }
        });
    });
}

/**
 * Insert an item to database
 * @param {string} table Table
 * @param {any} obj Object
 * @returns 
 */
function Insert(table, obj) {
    return new Promise((res, rej) => {
        manager.pool.query(GetInsertQuery(table, obj), (err, results, fields) => {
            if (err) {
                // TODO: Add return codes
                rej(err);
            } else {
                res(results);
            }
        });
    });
} 

/**
 * Updates an item by it's id
 * @param {Table} table Table
 * @param {any} obj Object 
 * @returns 
 */
function UpdateById(table, query, obj) {
    console.log("table UpdateById", table)
    console.log("QUERY UpdateById", query)
    console.log("obj UpdateById", obj)

    return new Promise((res, rej) => {
        manager.pool.query(GetUpdateQuery(table, query, obj), (err, results, fields) => {
            if (err) {
                // TODO: Add return codes
                rej(err);
            } else {
    console.log("results", results)

                res(results);
            }
        });
    });
}

/**
 * Converts an object to insert to an insert query
 * @param {Table} table Table
 * @param {any} obj Object
 * @returns 
 */
function GetInsertQuery(table, obj) {
    let ret     = `INSERT INTO ${table}`;
    let cols    = [];
    let vals    = [];
    let columns = ' (';
    let values  = ' VALUES (';

    // Get all properties
    for (const property in obj) {
        if (obj[property]) {
            cols.push(property.toString());
            if(isNaN(obj[property])) {
                vals.push('\'' + obj[property] + '\'');
            } else {
                // Number
                vals.push(obj[property]);
            }
        }
    }

    // Create query
    if (cols.length > 0) {
        for (let i = 0; i < cols.length - 1; i++) {
            columns += cols[i] + ',';
            values  += vals[i] + ',';
        }
        columns += cols[cols.length - 1];
        values  += vals[vals.length - 1];
    }

    columns += ')';
    values  += ')';
 
    ret += columns + values;
    
    return ret;
}

/**
 * Converts an object to insert to an insert query
 * @param {Table} table Table
 * @param {FindByIdQuery} query Query
 * @param {any} obj Object
 * @returns 
 */
 function GetUpdateQuery(table, query, obj) {
    console.log("table GetUpdateQuery", table)
    console.log("QUERY GetUpdateQuery", query)
    console.log("obj UpdatGetUpdateQueryeById", obj)

    let ret     = `UPDATE ${table} SET `;
    let cols    = [];
    let vals    = [];
    let values  = '';

    GetAllProperties(obj, cols, vals);
    console.log("cols UpdatGetUpdateQueryeById", cols)

    // Create query
    if (cols.length > 0) {
    console.log("cols.length UpdatGetUpdateQueryeById", cols.length)

        for (let i = 0; i < cols.length -1 ; i++) {
            values += cols[i] + ' = ' + vals[i] + ',';
            console.log("values UpdatGetUpdateQueryeById", values)

        }
        console.log("values2 UpdatGetUpdateQueryeById", values)

        values += cols[cols.length - 1] + ' = ' + vals[vals.length - 1];
        // console.log("values2 UpdatGetUpdateQueryeById", values)

    }
    console.log("values3 UpdatGetUpdateQueryeById", values)
    
    ret += values + ` WHERE ${query.key}=${query.id}`;
    console.log("ret UpdatGetUpdateQueryeById", ret)

    return ret;
}

/**
 * Get all properties of an object into a pair of arrays
 * @param {FindByIdQuery} query Query
 * @param {any[]} cols Columns
 * @param {any[]} vals Values
 */
function GetAllProperties(query, cols, vals) {
    // Get all properties
    for (const property in query) {
        if (query[property]) {
            cols.push(property.toString());
            if(isNaN(query[property])) {
                vals.push('\'' + query[property] + '\'');
            } else {
                // Number
                vals.push(query[property]);
            }
        }
    }
}

/***********************************************************************************************/
/******************************************** Exports ******************************************/
/***********************************************************************************************/

module.exports = {
    FindAll,
    FindById,
    Insert,
    UpdateById,
    FindByIdQuery
}