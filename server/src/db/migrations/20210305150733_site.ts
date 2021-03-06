import * as Knex from 'knex';
import { OgrenimDurumu } from '../enums';

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
       ADD CONSTRAINT cc_lokasyon_tip CHECK (tip IN (${OgrenimDurumu.Ilkokul}, ${OgrenimDurumu.Lise},${OgrenimDurumu.OnLisans},${OgrenimDurumu.Lisans},${OgrenimDurumu.YuksekLisans}));`,
    )
    .createTable('site', (table) => {
      table.increments('id').primary();
      table.string('siteAdi', 255).notNullable();
      table.string('vergiNo', 25);
      table.specificType('blokSayisi', 'smallint').notNullable();
      table.specificType('bBolumSayisi', 'smallint').notNullable();
      table.integer('ilId').notNullable().references('id').inTable('lokasyon');
      table
        .integer('ilceId')
        .notNullable()
        .references('id')
        .inTable('lokasyon');
      table.string('adres', 500);
      table.string('postaKodu', 10);
      table.string('telNo', 25);
      table.string('ePosta', 255);
      table.float('toplamArsaPayi');
      table
        .integer('kullaniciId')
        .notNullable()
        .references('id')
        .inTable('kullanici');
      table.string('durum', 1);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('site').dropTableIfExists('lokasyon');
}
