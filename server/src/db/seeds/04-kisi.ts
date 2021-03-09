import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { Cinsiyet, Dil, LokasyonTipi, OgrenimDurumu } from '../enums';
import Kisi from '../models/kisi.model';
import Kullanici from '../models/kullanici.model';
import Lokasyon from '../models/lokasyon.model';
import Site from '../models/site.model';

export async function seed(knex: Knex): Promise<void> {
  var tblName = 'kisi';

  const site = await knex<Site>('site').select<Pick<Site, 'id'>>('id').first();

  var rows: ModelObject<Omit<Kisi, 'id' | 'site' | 'bbolumler'>>[] = [
    {
      siteId: site?.id!,
      adSoyad: 'Murathan Mungan',
      tcKimlikVergiNo: '86358444260',
      tel: '533 4542132',
      tel2: '545 9876541',
      ePosta: 'mrt@hotmail.com',
      adres: 'Inonu cd no:5/7 İzmir Narlıdere',
      aracPlaka: '35 AS 4545',
      meslek: 'Yönetici',
      ogrenimDurumu: OgrenimDurumu.Lisans,
      dil: Dil.En,
      cinsiyet: Cinsiyet.Erkek,
    },
    {
      siteId: site?.id!,
      adSoyad: 'Ayşe Nuran',
      tcKimlikVergiNo: '99009530588',
      tel: '533 4584884',
      tel2: '545 7898444',
      ePosta: 'anuran@hotmail.com',
      adres: undefined,
      aracPlaka: '35 Z 5454',
      meslek: 'Yönetici',
      ogrenimDurumu: OgrenimDurumu.Lise,
      dil: Dil.Tr,
      cinsiyet: Cinsiyet.Kadin,
    },
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function () {
      return knex.insert(rows).into(tblName);
    });
}
