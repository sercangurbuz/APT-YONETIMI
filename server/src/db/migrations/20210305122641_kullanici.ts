import * as Knex from 'knex';
import { Dil } from '../enums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('kullanici', (table) => {
    table.increments('id').primary();
    table.string('adSoyad', 255).notNullable();
    table.string('cepTel', 25).notNullable();
    table.string('dil', 2).defaultTo('TR');
    table.string('ePosta', 255);
  }).raw(`ALTER TABLE kullanici    
  ADD CONSTRAINT cc_dil CHECK (dil IN ('${Dil.Tr}', '${Dil.En}'));`);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('kullanici');
}
