const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const cors = require('@koa/cors');
const etag = require('koa-etag');
const helmet = require('koa-helmet');
const Koa = require('koa');

const error = require('./middlewares/error');
const logger = require('./middlewares/logger');
const router = require('./routes');

const app = new Koa();

app.use(cors())
    .use(compress())
    .use(etag())
    .use(helmet())
    .use(bodyParser())
    .use(logger)
    .use(error)
    .use(router.routes());

module.exports = app;
