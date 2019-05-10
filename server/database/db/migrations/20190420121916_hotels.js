exports.up = function (knex, Promise) {
  return knex.schema.createTable('hotels', (table) => {
    table.increments();
    table.index('name');
    table.string('name').notNullable();
    table.string('addr1').notNullable();
    table.integer('walkablescore');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('phone').notNullable();
    table.string('postalcode');
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('nearestairport').notNullable();
    table.integer('nearestairportdistance');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('hotels');
};
