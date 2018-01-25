const knex = require('knex')({
  client: 'pg',
  connection: {
    user: process.env.DB_USER,
    database: 'bbadger',
    charset: 'utf8',
  }
});

knex.schema.hasTable('users').then(exists => {
  if (!exists) {
    knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
      table.string('first_name');
      table.string('last_name');
      table.string('street');
      table.string('zip_code');
      table.string('state');
      table.string('phone');
    }).then(() => console.log('created table users'))
  }
})

knex.schema.hasTable('transactions').then(exists => {
  if (!exists) {
    knex.schema.createTable('transactions', table => {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('category_id');
      table.integer('account_id');
      table.string('amount');
      table.string('name');
      table.string('street');
      table.string('zip_code');
      table.string('state');
    }).then(() => console.log('created table transactions'))
  }
})

knex.schema.hasTable('accounts').then(exists => {
  if (!exists) {
    knex.schema.createTable('accounts', table => {
      table.string('id').primary();
      table.integer('user_id');
      table.string('bank_name');
      table.string('type');
      table.string('access_token');
    }).then(() => console.log('created table accounts'))
  }
})

knex.schema.hasTable('categories').then(exists => {
  if (!exists) {
    knex.schema.createTable('categories', table => {
      table.increments('id').primary();
      table.string('name');
    }).then(() => console.log('created table categories'))
  }
})

const db = require('bookshelf')(knex);

module.exports = { db, knex };
