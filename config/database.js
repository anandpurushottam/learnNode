const Sequelize = require('sequelize');
const env = require('./env');
var pg = require('pg');
pg.defaults.ssl = true;

const dbConfig=env.db;

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

module.exports=db;
