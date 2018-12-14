const Router = require('koa-router');
const { prefix } = require('config');

const jobs = require('./jobs');
const root = require('./root');

const router = new Router({ prefix });

router.use(root.middleware()).use(jobs.middleware());

module.exports = router;
