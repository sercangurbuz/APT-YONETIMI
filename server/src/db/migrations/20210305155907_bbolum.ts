import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('bbolum_tip', (table) => {
      table.increments('id').primary();
      table.string('ad', 255).notNullable();
      table.decimal('aidat', 10, 2);
    })

    .createTable('bbolum', (table) => {
      table.increments('id').primary();
      table
        .integer('siteId')
        .notNullable()
        .references('id')
        .inTable('site')
        .onDelete('CASCADE');
      table
        .integer('blokId')
        .references('id')
        .inTable('site_blok')
        .onDelete('SET NULL');
      table.specificType('kat', 'smallint');
      table.string('no',3);
      table.decimal('aidat', 10, 2);
      table
        .integer('tipId')
        .references('id')
        .inTable('bbolum_tip')
        .onDelete('SET NULL');

      table.specificType('brutM2', 'smallint');
      table.specificType('netM2', 'smallint');
      table.specificType('arsaPayi', 'smallint');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('bbolum')
    .dropTableIfExists('bbolum_tip');
}
