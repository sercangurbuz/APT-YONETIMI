import * as Knex from 'knex';
import _ from 'lodash';
import { ModelObject } from 'objection';
import { Dil, KisiTipi, LokasyonTipi } from '../enums';
import Kisi from '../models/kisi.model';
import Kullanici from '../models/kullanici.model';
import Lokasyon from '../models/lokasyon.model';
import Site from '../models/site.model';

export async function seed(knex: Knex): Promise<void> {
  const site = await knex<Site>('site')
    .select<Pick<Site, 'id' | 'bBolumSayisi'>>('id', 'bBolumSayisi')
    .first();

  const blokId = await knex<Site>('site_blok')
    .select<Pick<Site, 'id'>>('id')
    .where('siteId', site?.id)
    .first();

  const kisi = await knex<Kisi>('kisi')
    .select<Pick<Kisi, 'id'>[]>('id')
    .where('siteId', site?.id);

  return knex('bbolum_tip')
    .del()
    .then(() => {
      return knex('bbolum_tip')
        .insert(
          [
            { ad: 'Normal', aidat: 80 },
            { ad: 'Dublex', aidat: 50 },
          ],
          'id',
        )
        .then((ids) => {
          var rows = _.times(site?.bBolumSayisi!).map((ind) => {
            return {
              siteId: site?.id!,
              blokId: blokId?.id!,
              kat: Math.ceil(ind / 2) + 1,
              no: ind + 1,
              tipId: ids[0],
              brutM2: 100,
              netM2: 80,
              arsaPayi: 23,
            };
          });

          return knex('bbolum')
            .del()
            .then(() => {
              return knex('bbolum')
                .insert(rows, 'id')
                .then((ids) => {
                  return knex('kisi_bbolum')
                    .del()
                    .then(() => {
                      return knex('kisi_bbolum').insert([
                        {
                          kisiId: kisi[0]?.id,
                          bbolumId: ids[0],
                          kisiTipi: KisiTipi.Malik,
                          girisTarihi: new Date(2000, 5, 3),
                          hissePayi: 1,
                        },
                        {
                          kisiId: kisi[1]?.id,
                          bbolumId: ids[0],
                          kisiTipi: KisiTipi.Kiraci,
                          girisTarihi: new Date(2010, 1, 1),
                          hissePayi: 1,
                        },
                      ]);
                    });
                });
            });
        });
    });
}
