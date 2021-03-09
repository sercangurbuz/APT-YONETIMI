import * as Knex from 'knex';
import { LokasyonTipi } from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('lokasyon', (table) => {
      table.increments('id').primary();
      table.string('lokasyonAd', 255).notNullable();
      table.specificType('tip', 'smallint').notNullable();
      table
        .integer('ustLokasyonId')
        .references('id')
        .inTable('lokasyon')
        .onDelete('CASCADE');
    })
    .raw(
      `ALTER TABLE lokasyon    
       ADD CONSTRAINT cc_lokasyon_tip CHECK (tip IN (${LokasyonTipi.Ulke},${LokasyonTipi.Il},${LokasyonTipi.Ilce},${LokasyonTipi.Mahalle},${LokasyonTipi.Sokak}));`,
    );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('lokasyon');
}
