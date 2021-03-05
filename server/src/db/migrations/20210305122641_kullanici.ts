import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('kullanici', (table) => {
    table.increments('id').primary();
    table.string('adSoyad', 255).notNullable();
    table.string('cepTel', 25).notNullable();
    table
      .enum('dil', ['EN', 'TR'], {
        enumName: 'DilType',
        useNative: true,
      })
      .defaultTo('TR');
    table.string('ePosta', 255);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('kullanici').raw('DROP TYPE "DilType"');
}
