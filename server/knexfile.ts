import 'dotenv/config';

export default {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: 5433,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: '_migrations',
      directory: './src/db/migrations',
      extension: 'ts',
    },
    seeds: { directory: './src/db/seeds' },
    debug: false,
  },
};
