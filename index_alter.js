require('dotenv').config();
const { sequelize, Autor, Editorial, Libro } = require('./models');

(async () => {
  try {
    console.log('Conectando y sincronizando la base de datos con alter...');
    await sequelize.sync({ alter: true });
    console.log('Base de datos sincronizada (alter: true)');

    const [autor, autorCreated] = await Autor.findOrCreate({
      where: { nombre: 'Gabriel García Márquez' },
      defaults: {
        fecha_nacimiento: '1927-03-06',
        biografia: 'Escritor colombiano, Premio Nobel de Literatura 1982'
      }
    });
    console.log('Autor:', autor.nombre, autorCreated ? '(nuevo)' : '(existente)');

    const [editorial, editorialCreated] = await Editorial.findOrCreate({
      where: { nombre: 'Editorial Ficción' },
      defaults: { pais: 'Colombia' }
    });
    console.log('Editorial:', editorial.nombre, editorialCreated ? '(nuevo)' : '(existente)');

    const [libro, libroCreated] = await Libro.findOrCreate({
      where: { titulo: 'Cien años de soledad' },
      defaults: {
        isbn: '123-ABC-456',
        año: 1967,
        paginas: 417,
        autor_id: autor.id,
        editorial_id: editorial.id
      }
    });
    console.log('Libro:', libro.titulo, libroCreated ? '(nuevo)' : '(existente)');

    const libros = await Libro.findAll({
      include: [
        { model: Autor, as: 'autor' },
        { model: Editorial, as: 'editorial' }
      ]
    });
    console.log('Libros en la base de datos:', JSON.stringify(libros, null, 2));

    await libro.update({ paginas: 420 });
    console.log('Libro actualizado:', (await Libro.findByPk(libro.id)).toJSON());

    await autor.update({ biografia: 'Escritor colombiano, Premio Nobel de Literatura 1982' });
    console.log('Autor actualizado:', (await Autor.findByPk(autor.id)).toJSON());

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await sequelize.close();
    console.log('Conexión cerrada');
  }
})();
