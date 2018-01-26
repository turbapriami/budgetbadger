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
      table.string('school');
    }).then(() => console.log('created table users'))
  }
})

knex.schema.hasTable('transactions').then(exists => {
  if (!exists) {
    knex.schema.createTable('transactions', table => {
      table.increments('id').primary();
      table.integer('user_id');
      table.string('category_id');
      table.string('account_id');
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

knex.schema.hasTable('schools').then(exists => {
  if (!exists) {
    knex.schema.createTable('schools', table => {
      table.increments('id').primary();
      table.string('name');
    }).then(() => console.log('created table schools'));
  }
})

knex.schema.hasTable('banks').then(exists => {
  if (!exists) {
    knex.schema.createTable('banks', table => {
      table.string('id').primary();
      table.string('access_token');
      table.integer('user_id');
    }).then(() => console.log('created table banks'));
  }
})

knex.schema.hasTable('bills').then(exists => {
  if (!exists) {
    knex.schema.createTable('bills', table => {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('bill_category_id');
      table.string('description');
      table.float('amount');
      table.date('due_date');
      table.boolean('paid');
      table.date('paid_date');
      table.boolean('alert');
    }).then(() => console.log('created table bills'))
  }
})

knex.schema.hasTable('bill_categories').then(exists => {
  if (!exists) {
    knex.schema.createTable('bill_categories', table => {
      table.increments('id').primary();
      table.string('name');
    }).then(() => console.log('created table bill_categories'))
  }
})

const db = require('bookshelf')(knex);

module.exports = { db, knex };
