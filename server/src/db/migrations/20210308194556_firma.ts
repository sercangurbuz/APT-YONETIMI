import * as Knex from 'knex';
import { DagitimTipi, GecikmeTipi, HareketTipi, HizmetTipi } from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('firma', (table) => {
    table.increments('id').primary();
    table.string('ad', 255).notNullable();
    table.string('verNoTcKimlik', 11);
    table.string('verDairesi', 255);
    table.string('isTel', 25);
    table.string('cepTel', 25);
    table.string('iban', 35);
    table.string('hesapAd', 255);
    table.string('ePosta', 255);
    table.string('adres', 500);
    table.date('acilisTarihi');
    table.decimal('acilisBakiyesi', 10, 2);
    table.string('hareketTip', 1).defaultTo(HareketTipi.Borc);
    table.string('yetkiliKisi', 255);
    table.string('aciklama', 500);
    table.boolean('aktif').defaultTo(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('firma');
}
