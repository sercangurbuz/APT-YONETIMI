import * as Knex from 'knex';
import { DagitimTipi, HareketTipi, HizmetTipi } from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('hizmet_grup', (table) => {
      table.increments('id').primary();
      table.string('grupAdi', 255).notNullable();
    })
    .createTable('hizmet', (table) => {
      table.increments('id').primary();
      table.string('hizmetAdi', 255).notNullable();
      table
        .integer('grupId')
        .references('id')
        .inTable('hizmet_grup')
        .onDelete('SET NULL');
      table.specificType('tip', 'smallint').notNullable();
      table.string('dagitimTipi', 1);
      table.dateTime('acilisTarihi');
      table.decimal('acilisBakiyesi', 10, 2);
      table.string('hareketTipi', 1);
    })
    .raw(
      `ALTER TABLE hizmet 
       ADD CONSTRAINT cc_hizmet_tip CHECK (tip IN (${HizmetTipi.Gelir},${HizmetTipi.Gider},${HizmetTipi.GelirGider})),
       ADD CONSTRAINT cc_hizmet_dagitim_tipi CHECK ("dagitimTipi" IN ('${DagitimTipi.Esit}', '${DagitimTipi.TipeGore}','${DagitimTipi.GrubaGore}','${DagitimTipi.BBolumlereGore}')),
       ADD CONSTRAINT cc_hizmet_hareket_tipi CHECK ("hareketTipi" IN ('${HareketTipi.Borc}', '${HareketTipi.Alacak}'));`,
    );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('hizmet')
    .dropTableIfExists('hizmet_grup');
}
