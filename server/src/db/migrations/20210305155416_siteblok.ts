import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('site_blok', (table) => {
    table.increments('id').primary();
    table.string('blokAdi', 255).notNullable();
    table.string('cepTel', 25).notNullable();
    table
      .integer('siteId')
      .notNullable()
      .references('id')
      .inTable('site')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('site_blok');
}
