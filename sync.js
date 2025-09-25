require('dotenv').config();
const { sequelize } = require('./models');

const args = process.argv.slice(2);
const force = args.includes('--force');
const alter = args.includes('--alter');

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force, alter });
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
