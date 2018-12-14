const cluster = require('cluster');
const chalk = require('chalk');
const os = require('os');
const { mode, name, port, version } = require('config');

const app = require('./app');
const logger = require('./helpers/logger');

module.exports = () => {
    if (cluster.isMaster && mode === 'production') {
        os.cpus().forEach(cluster.fork);

        cluster.on('exit', cluster.fork);
    } else {
        app.listen(port, () =>
            logger.info(`${chalk.cyan(`${name} v${version}`)} ${chalk.gray(`(${port})`)}`),
        );
    }
};
