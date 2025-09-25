const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Autor', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: true },
    biografia: { type: DataTypes.TEXT, allowNull: true }
  }, { tableName: 'autores' });
};
