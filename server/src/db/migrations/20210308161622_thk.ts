import * as Knex from 'knex';
import { DagitimTipi, GecikmeTipi, HareketTipi, HizmetTipi } from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('thk', (table) => {
      table.increments('id').primary();
      table.integer('kisiId').notNullable().references('id').inTable('kisi');
      table
        .integer('bbolumId')
        .notNullable()
        .references('id')
        .inTable('bbolum');
      table.string('aciklama', 500);
      table
        .integer('hizmetId')
        .notNullable()
        .references('id')
        .inTable('hizmet');
      table.date('tarih').notNullable();
      table.date('sonOdeTar').notNullable();
      table.decimal('tutar', 10, 2).notNullable();
      table.decimal('odenen', 10, 2);
      table.boolean('gecikme');
      table.date('gecBasTar');
      table.decimal('gecYuzde', 3, 2);
      table.string('gecTipi', 1);
      table.date('gecHesapTar');
      table.boolean('makbuz');
    })
    .raw(
      `ALTER TABLE thk 
     ADD CONSTRAINT cc_gec_tipi CHECK ("gecTipi" IN ('${GecikmeTipi.Aylık}','${GecikmeTipi.Gunluk}'));`,
    );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('thk');
}
