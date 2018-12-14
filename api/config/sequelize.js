const { sequelize: common } = require('./default');
const { sequelize: development } = require('./development');

module.exports = {
    development: { ...common, ...development },
};
