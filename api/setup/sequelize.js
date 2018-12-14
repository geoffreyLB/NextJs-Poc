const glob = require('glob');
const path = require('path');
const Sequelize = require('sequelize');
const {
    sequelize: { database, username, password, ...options },
} = require('config');
const { upperFirst } = require('lodash');

const db = new Sequelize(database, username, password, options);

const models = glob.sync('./src/models/[A-Z]*.js').reduce((accumulator, filename) => {
    const model = db.import(path.resolve(filename));

    accumulator[upperFirst(model.name)] = model;

    return accumulator;
}, {});

Object.values(models)
    .filter(model => model.associate)
    .forEach(model => model.associate(models));

module.exports = { db, models };
