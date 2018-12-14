const { Job } = require('../models');

module.exports.index = async ctx => {
    const { offset, limit } = ctx.state;

    const { rows: jobs, count: total } = await Job.findAndCountAll({
        offset,
        limit,
    });

    ctx.body = {
        data: jobs,
        total,
    };
};

module.exports.show = async ctx => {
    const { id } = ctx.params;

    const job = await Job.findByPk(id);

    if (job) {
        ctx.body = {
            data: job,
        };
    }
};

module.exports.create = async ctx => {
    const {
        request: { body },
    } = ctx;

    const job = { ...body };

    const jobs = await Job.create({ job });

    ctx.body = {
        data: jobs,
    };
};

module.exports.patch = async ctx => {
    const {
        params: { id },
        request: { body },
    } = ctx;

    const [, [job]] = await Job.update(body, {
        where: { id },
        individualHooks: true,
        returning: true,
    });

    if (job) {
        ctx.body = {
            data: job,
        };
    }
};
