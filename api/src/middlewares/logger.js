const koaLogger = require('koa-logger');

const logger = require('../helpers/logger');

module.exports = koaLogger(str => {
    logger.info(str.trim());
});
