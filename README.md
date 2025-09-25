# Biblioteca - Proyecto Sequelize + MySQL

Este proyecto es un ejemplo práctico para trabajar con Sequelize y MySQL, usando relaciones entre modelos, operaciones CRUD y variables de entorno con dotenv.

---

## Tecnologías

- Node.js
- Sequelize
- MySQL
- dotenv

---

## Estructura del proyecto

biblioteca/
├─ models/
│  ├─ Autor.js
│  ├─ Editorial.js
│  ├─ Libro.js
│  └─ index.js
├─ db.js
├─ index.js
├─ index_alter.js
├─ sync.js
├─ package.json
├─ .env.example
└─ .gitignore

- models/ → Contiene los modelos de la base de datos y sus relaciones.  
- db.js → Configuración de conexión a MySQL usando dotenv.  
- index.js → CRUD básico con creación, consulta, actualización y eliminación.  
- index_alter.js → Sincronización de tablas sin borrar datos (alter: true).  
- sync.js → Script para sincronizar la base de datos con force o alter.  
- .env.example → Ejemplo de variables de entorno.  

---

## Instalación

1. Clona el repositorio:

git clone https://github.com/JuvenR/Sequelize.git
cd Sequelize

2. Instala las dependencias:

npm install

3. Crea un archivo .env basado en .env.example y completa tus datos de conexión:

DB_HOST=localhost
DB_PORT=3306
DB_NAME=biblioteca
DB_USER=tu_usuario
DB_PASS=tu_contraseña

4. Crea la base de datos en MySQL si aún no existe:

CREATE DATABASE biblioteca;

---

## Uso

- Ejecutar el CRUD completo:

npm start

- Sincronizar tablas desde cero (elimina datos existentes):

npm run sync:force

- Sincronizar tablas y aplicar cambios sin eliminar datos:

npm run sync:alter

---

## Funcionalidades

- Creación automática de tablas a partir de los modelos.  
- Inserción de registros (create).  
- Consultas con relaciones (findAll + include).  
- Actualización de registros (update).  
- Eliminación de registros (destroy).  
- Uso de variables de entorno para no exponer credenciales.  
- Sincronización de tablas de manera segura con alter.  

---

## Notas

- Usa .env.example como referencia.  
- Si agregas campos a los modelos, ejecuta npm run sync:alter para actualizar las tablas sin perder datos.  

---

## Licencia

ISC
