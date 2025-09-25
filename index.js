require('dotenv').config();
const { sequelize, Autor, Editorial, Libro } = require('./models');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Tablas creadas');

    const autor = await Autor.create({ nombre: 'Gabriel García Márquez', fecha_nacimiento: '1927-03-06' });
    console.log('Autor creado:', autor.toJSON());

    const editorial = await Editorial.create({ nombre: 'Editorial Ficción', pais: 'Colombia' });
    console.log('Editorial creada:', editorial.toJSON());
    
    const libro = await Libro.create({
      titulo: 'Cien años de soledad',
      isbn: '123-ABC-456',
      año: 1967,
      paginas: 417,
      autor_id: autor.id,
      editorial_id: editorial.id
    });
    console.log('Libro creado:', libro.toJSON());

    const libros = await Libro.findAll({
      include: [
        { model: Autor, as: 'autor' },
        { model: Editorial, as: 'editorial' }
      ]
    });
    console.log('Libros con relaciones:', JSON.stringify(libros, null, 2));

    await autor.update({ biografia: 'Escritor colombiano, Premio Nobel de Literatura 1982' });
    console.log('Autor actualizado con biografía:', (await Autor.findByPk(autor.id)).toJSON());

    await libro.update({ paginas: 420 });
    console.log('Libro actualizado:', (await Libro.findByPk(libro.id)).toJSON());

  } catch (err) {
    console.error(err);
  } finally {
    await sequelize.close();
    console.log('Conexión cerrada');
  }
})();
