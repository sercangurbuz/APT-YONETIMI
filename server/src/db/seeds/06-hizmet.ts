import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { DagitimTipi, HareketTipi, HizmetTipi } from '../enums';
import Hizmet from '../models/hizmet.model';
import HizmetGrup from '../models/hizmet_grup.model';
import Site from '../models/site.model';

export async function seed(knex: Knex): Promise<void> {
  var hg_tblName = 'hizmet_grup';
  var h_tblName = 'hizmet';

  const siteId = await knex<Site>('site')
    .select<Pick<Site, 'id'>>('id')
    .first();

  const hg_rows = ['Bakım Onarım Giderleri', 'Genel Yönetim Giderleri'];

  return knex(hg_tblName)
    .del() //Remove all rows from table
    .then(async function () {
      const [hzg1Id, hzg2Id] = await knex<HizmetGrup>(hg_tblName).insert(
        hg_rows.map((grupAdi) => ({ grupAdi, siteId: siteId?.id! })),
        'id',
      );

      return knex(h_tblName)
        .del()
        .then(() => {
          const hzmP1 = knex<Hizmet>(h_tblName)
            .insert({
              hizmetAdi: 'Asansör Bakım Onarım Giderleri',
              grupId: hzg1Id,
              siteId: siteId?.id!,
              tip: HizmetTipi.Gider,
              dagitimTipi: DagitimTipi.Esit,
              acilisTarihi: new Date(),
              hareketTipi: HareketTipi.Borc,
            })
            .then();

          const hzmP2 = knex<Hizmet>(h_tblName)
            .insert({
              hizmetAdi: 'Aidat',
              grupId: hzg2Id,
              siteId: siteId?.id! ,
              tip: HizmetTipi.GelirGider,
              dagitimTipi: DagitimTipi.Esit,
              hareketTipi: HareketTipi.Alacak,
            })
            .then();

          const hzmP3 = knex<Hizmet>(h_tblName)
            .insert({
              hizmetAdi: 'Su',
              grupId: hzg2Id,
              siteId: siteId?.id! ,
              tip: HizmetTipi.Gider,
              dagitimTipi: DagitimTipi.BBolumlereGore,
              hareketTipi: HareketTipi.Borc,
            })
            .then();

          return Promise.all([hzmP1, hzmP2, hzmP3]) as any;
        });
    });
}
