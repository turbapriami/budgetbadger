const knex = require('knex')({
  client: 'pg',
  database: 'bbdadger'
})

knex.schema.hasTable('users').then(exists => {
  if (!exists) {
    knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
    }).then(() => console.log('created table users'))
  }
})

const db = require('bookshelf')(knex);

module.exports = db;