import * as Knex from 'knex';
import { FaturaTipi } from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('fatura', (table) => {
      table.increments('id').primary();
      table.specificType('faturaTipi', 'smallint');
      table.string('belgeNo', 50);
      table.date('tarih').notNullable();
      table.integer('firmaId').references('id').inTable('firma');
      table.integer('hizmetId').references('id').inTable('hizmet');
      table.integer('kasaId').references('id').inTable('kasa');
      table.decimal('tutar', 10, 2).notNullable();
      table.string('aciklama', 500);
      table.boolean('odendi').notNullable().defaultTo(false);
    })
    .raw(
      `ALTER TABLE fatura 
       ADD CONSTRAINT cc_fatura_tip CHECK ("faturaTipi" IN (${FaturaTipi.GelirFaturasi},${FaturaTipi.GelirFisi},${FaturaTipi.MasrafFaturası},${FaturaTipi.MasrafFisi},${FaturaTipi.OdemeMakbuzu},${FaturaTipi.TahsilatMakbuzu}));`,
    );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('fatura');
}
