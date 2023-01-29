const configDb = require('../../app.config').database;

const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : configDb.host,
      port : configDb.port,
      user : configDb.user,
      password : configDb.password,
      database : configDb.database
    }
});

module.exports = knex;