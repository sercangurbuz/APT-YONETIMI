import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { Dil, HareketTipi } from '../enums';
import Kasa from '../models/kasa.model';
import Site from '../models/site.model';

export async function seed(knex: Knex): Promise<void> {
  var tblName = 'firma';

  const siteId = await knex<Site>('site')
    .select<Pick<Site, 'id'>>('id')
    .first();

  var rows = [
    {
      ad: 'Anadolu Asansör',
      verNoTcKimlik: '6484152198',
      verDairesi: 'Konak vd',
      isTel: '232 4548899',
      siteId: siteId?.id,
      cepTel: '542 6698811',
      iban: 'TR320010009999901234567890',
      ePosta: 'anadoluasansor@hotmail.com',
      adres: 'Turgut reis cd MithatPaşa cd.no 500/A Konak İzmir',
      yetkiliKisi: 'İsmail Anadolu',
      acilisTarihi: new Date(1990, 1, 1),
      hareketTip: HareketTipi.Borc,
    },
    {
      ad: 'Bahar Temizlik',
      verNoTcKimlik: '9070474461',
      verDairesi: 'Konak vd',
      isTel: '232 4984411',
      siteId: siteId?.id,
      cepTel: '542 4572036',
      iban: 'TR320010009999901234567891',
      ePosta: 'bahartemizlik@hotmail.com',
      adres: 'Narlıdere İzmir',
      yetkiliKisi: 'Bahar Hijyen',
      acilisTarihi: new Date(1950, 1, 1),
      hareketTip: HareketTipi.Borc,
    },
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function () {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
}
