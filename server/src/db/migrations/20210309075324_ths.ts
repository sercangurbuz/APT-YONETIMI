import * as Knex from 'knex';
import {
  DagitimTipi,
  GecikmeTipi,
  HareketTipi,
  HizmetTipi,
  ThsTipi,
} from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('ths', (table) => {
      table.increments('id').primary();
      table.integer('kisiId').notNullable().references('id').inTable('kisi');
      table
        .integer('bbolumId')
        .notNullable()
        .references('id')
        .inTable('bbolum');
      table.dateTime('tarih').notNullable();
      table.integer('kasaId').notNullable().references('id').inTable('kasa');
      table.string('thsTipi', 1);
    })
    .raw(
      `ALTER TABLE ths
     ADD CONSTRAINT cc_ths_tipi CHECK ("thsTipi" IN ('${ThsTipi.BorclandirmaTuruneGore}','${ThsTipi.EvrakSecerek}','${ThsTipi.Otomatik}'));`,
    )

    .createTable('thk_ths', (table) => {
      table.integer('thkId').notNullable().references('id').inTable('thk').onDelete("CASCADE");
      table.integer('thsId').notNullable().references('id').inTable('ths').onDelete("CASCADE");
      table.decimal('tutar', 10, 2);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('ths').dropTableIfExists('thk_ths');
}
