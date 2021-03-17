import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { Dil, HareketTipi } from '../enums';
import BBolum from '../models/bbolum.model';
import Hizmet from '../models/hizmet.model';
import Kasa from '../models/kasa.model';
import KisiBBolum from '../models/kisi_bbolum.model';
import Site from '../models/site.model';

export async function seed(knex: Knex): Promise<void> {
  var tblName = 'thk';

  const siteId = await knex<Site>('site')
    .select<Pick<Site, 'id'>>('id')
    .first();

  const bbolum = await knex<Site>('bbolum')
    .select<Pick<BBolum, 'id'>>('id')
    .where('siteId', siteId?.id)
    .first();

  const kisi = await knex<Site>('kisi_bbolum')
    .select<Pick<KisiBBolum, 'kisiId'>>('kisiId')
    .where('bbolumId', bbolum?.id)
    .first();

  const aidatHizmet = await knex<Hizmet>('hizmet')
    .select<Pick<Site, 'id'>>('id')
    .where('hizmetAdi', 'Aidat')
    .first();

  var rows = [
    {
      kisiId: kisi?.kisiId!,
      bbolumId: bbolum?.id!,
      aciklama: 'aciklama',
      hizmetId: aidatHizmet?.id,
      tarih: new Date(2020, 8, 1),
      sonOdeTar: new Date(2020, 9, 1),
      tutar: 80,
      odenen: 0,
    },
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function () {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
}
