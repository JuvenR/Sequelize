const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Editorial', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    pais: { type: DataTypes.STRING, allowNull: true }
  }, { tableName: 'editoriales' });
};
