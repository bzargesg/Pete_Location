// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/locations',
    migrations: {
      directory: `${__dirname}/server/database/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/server/database/seeds/`,
    },
  },
};
