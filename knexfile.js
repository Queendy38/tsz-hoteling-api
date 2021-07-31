require('dotenv').config();

module.exports = {
  client: 'mssql',
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST.toString(),
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations',
  },
};
