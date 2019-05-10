exports.up = function (knex, Promise) {
  return knex.schema.createTable('attractions', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('type');
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('postalcode').notNullable();
    table.index('latitude');
    table.index('longitude');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('attractions');
};
