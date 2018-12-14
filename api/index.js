const logger = require('./src/helpers/logger');
const server = require('./src/server');

const init = async () => {
    server();
};

init().catch(logger.error);
