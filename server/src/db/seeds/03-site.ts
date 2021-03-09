import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { Dil, LokasyonTipi } from '../enums';
import Kullanici from '../models/kullanici.model';
import Lokasyon from '../models/lokasyon.model';
import Site from '../models/site.model';

export async function seed(knex: Knex): Promise<void> {
  var tblName = 'site';

  const kullId = await knex<Kullanici>('kullanici')
    .select<Pick<Kullanici, 'id'>>('id')
    .first();
  const ilId = await knex<Lokasyon>('lokasyon')
    .select<Pick<Lokasyon, 'id'>>('id')
    .where({ tip: LokasyonTipi.Il })
    .first();
  const ilceId = await knex<Lokasyon>('lokasyon')
    .select<Pick<Lokasyon, 'id'>>('id')
    .where({ tip: LokasyonTipi.Ilce, ustLokasyonId: ilId?.id! })
    .first();

  var rows: ModelObject<
    Omit<Site, 'id' | 'kullanici' | 'bloklar' | 'bbolumler' | 'il' | 'ilce'>
  >[] = [
    {
      siteAdi: 'Esen apt',
      vergiNo: '6013739819',
      blokSayisi: 1,
      bBolumSayisi: 5,
      ilId: ilId?.id!,
      ilceId: ilceId?.id!,
      adres: 'Sessiz sk no:4 Çatalkaya mh',
      postaKodu: '35320',
      telNo: undefined,
      ePosta: undefined,
      toplamArsaPayi: 250,
      kullaniciId: kullId?.id!,
      durum: '',
    },
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function () {
      return knex
        .insert(rows, 'id')
        .into(tblName)
        .then((ids) => {
          return knex('site_blok')
            .insert([
              { blokAdi: 'A1', siteId: ids[0] },
              { blokAdi: 'B', siteId: ids[0] },
            ])
            .then();
        });
    });
}
