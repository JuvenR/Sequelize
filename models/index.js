const { sequelize } = require('../db');
const makeAutor = require('./Autor');
const makeEditorial = require('./Editorial');
const makeLibro = require('./Libro');

const Autor = makeAutor(sequelize);
const Editorial = makeEditorial(sequelize);
const Libro = makeLibro(sequelize);

Autor.hasMany(Libro, { foreignKey: 'autor_id', as: 'libros' });
Libro.belongsTo(Autor, { foreignKey: 'autor_id', as: 'autor' });

Editorial.hasMany(Libro, { foreignKey: 'editorial_id', as: 'libros' });
Libro.belongsTo(Editorial, { foreignKey: 'editorial_id', as: 'editorial' });

module.exports = { sequelize, Autor, Editorial, Libro };
