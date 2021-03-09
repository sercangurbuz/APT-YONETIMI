import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { Dil } from '../enums';
import Kasa from '../models/kasa.model';
import Site from '../models/site.model';

export async function seed(knex: Knex): Promise<void> {
  var tblName = 'kasa';

  const siteId = await knex<Site>('site')
    .select<Pick<Site, 'id'>>('id')
    .first();

  var rows = [
    {
      ad: 'Nakit kasa',
      siteId: siteId?.id!,
    },
    {
      ad: 'Mantolama/Tadilat kasası',
      siteId: siteId?.id!,
    },
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function () {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
}
