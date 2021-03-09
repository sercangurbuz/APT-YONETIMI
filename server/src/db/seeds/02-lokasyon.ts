import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { LokasyonTipi } from '../enums';
import Lokasyon from '../models/lokasyon.model';

type LokasyonPojo = ModelObject<
  Omit<Lokasyon, 'id' | 'alt_lokasyonlar' | 'ust_lokasyon'>
>;

export async function seed(knex: Knex): Promise<void> {
  var tblName = 'lokasyon';

  return await knex<LokasyonPojo>(tblName)
    .del()
    .insert({ lokasyonAd: 'İzmir', tip: LokasyonTipi.Il }, 'id')
    .then((ids) => {
      return knex<LokasyonPojo>(tblName)
        .insert(
          [
            {
              lokasyonAd: 'Narlıdere',
              tip: LokasyonTipi.Ilce,
              ustLokasyonId: ids[0],
            },
            {
              lokasyonAd: 'Balçova',
              tip: LokasyonTipi.Ilce,
              ustLokasyonId: ids[0],
            },
          ],
          'id',
        )
        .then((ilceIds) => {
          return knex<LokasyonPojo>(tblName).insert([
            {
              lokasyonAd: 'Huzur Mh',
              tip: LokasyonTipi.Mahalle,
              ustLokasyonId: ilceIds[0],
            },
            {
              lokasyonAd: 'Çatalkaya Mh',
              tip: LokasyonTipi.Mahalle,
              ustLokasyonId: ilceIds[0],
            },
            {
              lokasyonAd: 'Yenikale Mh',
              tip: LokasyonTipi.Mahalle,
              ustLokasyonId: ilceIds[0],
            },
            {
              lokasyonAd: 'Çetin Emeç Mh',
              tip: LokasyonTipi.Mahalle,
              ustLokasyonId: ilceIds[1],
            },
            {
              lokasyonAd: 'Fevzi Çakmak Mh',
              tip: LokasyonTipi.Mahalle,
              ustLokasyonId: ilceIds[1],
            },
            {
              lokasyonAd: 'İnciraltı Mh',
              tip: LokasyonTipi.Mahalle,
              ustLokasyonId: ilceIds[1],
            },
          ]);
        });
    });
}
