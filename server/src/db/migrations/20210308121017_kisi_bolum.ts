import * as Knex from 'knex';
import { Cinsiyet, Dil, KisiTipi, OgrenimDurumu } from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('kisi', (table) => {
      table.increments('id').primary();
      table
        .integer('siteId')
        .notNullable()
        .references('id')
        .inTable('site')
        .onDelete('CASCADE');
      table.string('adSoyad', 255).notNullable();
      table.string('tcKimlikVergiNo', 11);
      table.string('tel', 11);
      table.string('tel2', 11);
      table.string('ePosta', 255);
      table.string('adres', 500);
      table.string('aracPlaka', 15);
      table.string('meslek', 255);
      table.specificType('ogrenimDurumu', 'smallint');
      table.string('dil', 2).defaultTo('TR');
      table.string('cinsiyet', 1);
      table.boolean('aktif').defaultTo(true);
    })
    .raw(
      `ALTER TABLE kisi 
    ADD CONSTRAINT cc_ogrenim_durumu CHECK ("ogrenimDurumu" IN (${OgrenimDurumu.Ilkokul}, ${OgrenimDurumu.Lise},${OgrenimDurumu.OnLisans},${OgrenimDurumu.Lisans},${OgrenimDurumu.YuksekLisans})),
    ADD CONSTRAINT cc_dil CHECK ("dil" IN ('${Dil.En}', '${Dil.Tr}')),
    ADD CONSTRAINT cc_cinsiyet CHECK ("cinsiyet" IN ('${Cinsiyet.Erkek}', '${Cinsiyet.Kadin}'));    
    `,
    )

    .createTable('kisi_bbolum', (table) => {
      table.increments('id').primary();
      table.integer('kisiId').notNullable().references('id').inTable('kisi');
      table.integer('siteId').notNullable().references('id').inTable('site');
      table.string('kisiTipi').notNullable();
      table.date('girisTarihi').notNullable();
      table.date('cikisTarihi');
      table.integer('hissePayi').notNullable();
    })
    .raw(
      `ALTER TABLE kisi_bbolum 
       ADD CONSTRAINT cc_kisi_tip CHECK ("kisiTipi" IN ('${KisiTipi.Malik}','${KisiTipi.Kiraci}','${KisiTipi.DaireSakini}'));`,
    );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('kisi_bbolum').dropTableIfExists('kisi');
}
