const { mode, name, version } = require('config');

module.exports.index = async ctx => {
    ctx.body = {
        data: {
            name,
            version,
            environment: mode,
        },
    };
};
