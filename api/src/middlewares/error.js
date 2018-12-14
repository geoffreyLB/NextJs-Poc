const { mode } = require('config');

module.exports = async (ctx, next) => {
    try {
        await next();

        if (ctx.status === 404) {
            ctx.throw(404);
        }
    } catch (error) {
        let { message, status = 500 } = error;

        if (error.name.startsWith('Sequelize')) {
            message = error.message;
            status = 400;
        }

        ctx.status = status;

        ctx.body = {
            error: {
                code: status,
                message,
            },
        };

        if (mode !== 'test') {
            ctx.app.emit('error', error, ctx);
        }
    }
};
