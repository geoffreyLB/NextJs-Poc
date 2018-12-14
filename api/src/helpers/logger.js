const chalk = require('chalk');
const { createLogger, format, transports } = require('winston');
const { mode, name, version } = require('config');

const logger = createLogger({
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ level, message, timestamp }) => {
            const type = level === 'error' ? chalk.red('error') : chalk.yellow('info');

            return `${chalk.inverse(timestamp)} ${type} ${message}`;
        }),
    ),
    transports: [new transports.Console()],
});

if (mode === 'production') {
    const config = level => ({
        filename: `/var/log/${name}-${version}-${level}.log`,
        level,
    });

    logger.add(new transports.File(config('error')));
    logger.add(new transports.File(config('info')));
}

module.exports = logger;
