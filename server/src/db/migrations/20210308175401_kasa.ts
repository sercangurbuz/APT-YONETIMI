import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('kasa', (table) => {
    table.increments('id').primary();
    table.string('ad', 255).notNullable();
    table.date('acilisTarihi');
    table.decimal('acilisBakiyesi', 10, 2);
    table.boolean('aktif').defaultTo(true);
    table.string('bankaAd', 50);
    table.string('hesapAd', 50);
    table.string('subeKodu', 25);
    table.string('hesapNo', 25);
    table.string('iban', 50);
    table.boolean('entegrasyon');
    table.string('entKullAdi', 255);
    table.string('entSifre', 500);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('kasa');
}
