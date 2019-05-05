const Sequelize = require('sequelize');
const db = require('../config/database')

const USER = db.define('users', {
    first_name: {
        type: Sequelize.STRING
    }, last_name: {
        type: Sequelize.STRING
    }, email: {
        type: Sequelize.STRING
    }, password: {
        type: Sequelize.STRING
    }
});

module.exports=USER