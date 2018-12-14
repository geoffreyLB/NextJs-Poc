const Router = require('koa-router');

const { index } = require('../controllers/root');

const router = new Router();

router.get('/', index);

module.exports = router;
