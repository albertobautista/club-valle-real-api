const getGateway = require('@compusoluciones/csmysql-gateway');


const defaultConfig = require('../../config/db.config');

module.exports = (config = defaultConfig) => getGateway(config);
