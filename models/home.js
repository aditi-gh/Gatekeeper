const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Visitor = sequelize.define('Visitor', {
  full_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  visit_date: { type: DataTypes.DATEONLY, allowNull: false },
  visit_time: { type: DataTypes.TIME, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  purpose: { type: DataTypes.STRING, allowNull: false },
  person_to_visit: { type: DataTypes.STRING, allowNull: false },
  id_type: { type: DataTypes.STRING, allowNull: false },
  id_number: { type: DataTypes.STRING, allowNull: false },
}, {
  tableName: 'visitors'
});

sequelize.sync();

module.exports = { sequelize, Visitor };
