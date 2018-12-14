const Router = require('koa-router');
const { paramPattern } = require('config');

const { create, index, show, patch } = require('../controllers/jobs');

const router = new Router({ prefix: '/jobs' });

router
    .post('/', create)
    .get('/', index)
    .get(`/:id(${paramPattern})`, show)
    .patch(`/:id(${paramPattern})`, patch);

module.exports = router;
