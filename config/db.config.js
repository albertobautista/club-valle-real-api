// const mysql = require('mysql')

// module.exports =() =>{
//     return mysql.createConnection({
//         host:'us-cdbr-east-04.cleardb.com',
//         user:'bbed746737b641',
//         password:'7c1f2418',
//         database:'heroku_56993ee4b78575c'
//     });
// }

// const joi = require('joi');


// const envDatabaseVarsSchema = joi.object({
//   DB_HOST: joi.string().required(),
//   DB_USER: joi.string().required(),
//   DB_PASSWORD: joi.string().required(),
//   DB_NAME: joi.string().required(),
//   DB_DATE_STRINGS: joi.string().default('date'),
//   DB_DEBUG: joi.boolean()
//     .truthy('TRUE')
//     .truthy('true')
//     .falsy('FALSE')
//     .falsy('false')
//     .default(false),
//   DB_SHOW_QUERIES: joi.boolean()
//   .truthy('TRUE')
//   .truthy('true')
//   .falsy('FALSE')
//   .falsy('false')
//   .default(false),
//   DB_CONNECTION_LIMIT: joi.number().default(10),
// }).unknown().required();

// const { error, value: envDatabaseVars } = joi.validate(process.env, envDatabaseVarsSchema);
// if (error) throw new Error(`Database Config validation error: ${error.message}`);
// DB_HOST=10.3.102.70
// DB_USER=root
// DB_PASSWORD=Inn0vaci0n
// DB_NAME=azureJulio
// DB_DATE_STRINGS=date
// DB_DEBUG=false
// DB_SHOW_QUERIES=false
// DB_CONNECTION_LIMIT=15
// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'club_valle_real_website',

// };

const config = {
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dateStrings: process.env.DB_DATE_STRINGS,
    debug: process.env.DB_DEBUG,
    showQueries: process.env.DB_SHOW_QUERIES,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
  };

  //:7c1f2418@us-cdbr-east-04.cleardb.com/heroku_56993ee4b78575c?reconnect=true

module.exports = config;
