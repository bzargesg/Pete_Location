exports.up = function (knex, Promise) {
  return knex.schema.createTable('areas', (table) => {
    table.increments();
    table.string('addr1').notNullable();
    table.string('city').notNullable();
    table.integer('postalcode').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('areas');
};
