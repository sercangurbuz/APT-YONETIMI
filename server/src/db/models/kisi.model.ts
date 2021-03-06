import BaseModel from '../../db/BaseModel';
import { Cinsiyet, OgrenimDurumu } from '../enums';
import BBolum from './bbolum.model';
import KisiBBolum from './kisi_bbolum.model';
import { Dil } from './kullanici.model';
import Site from './site.model';

/**
 * Kisi model
 */
export default class Kisi extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  siteId: number;
  adSoyad: string;
  tcKimlikVergiNo: string;
  tel: string;
  tel2: string;
  ePosta: string;
  adres: string;
  aracPlaka: string;
  meslek: string;
  ogrenimDurumu: OgrenimDurumu;
  dil: Dil;
  cinsiyet: Cinsiyet;
  //#endregion

  //#region Navigational properties
  /**
   * Kişinin ait olduğu site
   */
  site: Site;
  /**
   * Kisinin ait oldugu bagimsiz bolumler
   */
  bbolumler: BBolum[];
  //#endregion

  static tableName = 'kisi';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'siteId', 'adSoyad'],

    properties: {
      id: { type: 'integer' },
      siteId: { type: 'integer' },
      adSoyad: { type: 'string', minLenght: 1, maxLenght: 255 },
      tcKimlikVergiNo: { type: 'string', minLenght: 1, maxLenght: 11 },
      tel: { type: 'string', minLenght: 1, maxLenght: 11 },
      tel2: { type: 'string', minLenght: 1, maxLenght: 11 },
      ePosta: { type: 'string', minLenght: 1, maxLenght: 255 },
      adres: { type: 'string', minLenght: 1, maxLenght: 500 },
      aracPlaka: { type: 'string', minLenght: 1, maxLenght: 15 },
      meslek: { type: 'string', minLenght: 1, maxLenght: 255 },
      ogrenimDurumu: { type: 'string' },
      dil: { type: 'string', minLenght: 2, maxLenght: 2 },
      cinsiyet: { type: 'string', minLenght: 1, maxLenght: 1 },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    site: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Site,
      join: {
        from: 'kisi.siteId',
        to: 'site.id',
      },
    },

    bbolumler: {
      relation: BaseModel.ManyToManyRelation,

      modelClass: BBolum,
      join: {
        from: 'kisi.id',
        to: 'bbolum.id',
        through: {
          from: 'kisi_bbolum.kisiId',
          to: 'kisi_bbolum.bbolumId',
          modelClass: KisiBBolum,
        },
      },
    },
  });
}
