const { version } = require('../package');

module.exports = {
    name: 'misterjob',
    version,
    prefix: '/v2',
    sequelize: {
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: null,
        dialect: 'postgres',
    },
};
