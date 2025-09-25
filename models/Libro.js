const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Libro', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING, allowNull: true, unique: true },
    año: { type: DataTypes.INTEGER, allowNull: true },
    paginas: { type: DataTypes.INTEGER, allowNull: true }
  }, { tableName: 'libros' });
};
