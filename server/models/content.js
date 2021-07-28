const { Sequelize, DataTypes} = require('sequelize')
const db = require('../db')

const Content = db.define('content', {
    word: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }

});

module.exports = Content 