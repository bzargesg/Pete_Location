exports.up = function (knex, Promise) {
  return knex.schema.createTable('attractions', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.integer('areaID').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('attractions');
};
