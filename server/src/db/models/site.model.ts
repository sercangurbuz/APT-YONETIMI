import BaseModel from '../BaseModel';
import BBolum from './bbolum.model';
import BBolumTip from './bbolum_tip.model';
import Kullanici from './kullanici.model';
import Lokasyon from './lokasyon.model';
import SiteBlok from './siteblok.model';

/**
 * Site model
 */
export default class Site extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  siteAdi: string;
  vergiNo: string;
  blokSayisi: number;
  bBolumSayisi: number;
  ilId: number;
  ilceId: number;
  adres?: string;
  postaKodu?: string;
  telNo?: string;
  ePosta?: string;
  toplamArsaPayi: number;
  kullaniciId: number;
  durum: string;
  //#endregion

  //#region Navigational properties
  /**
   * Site yi yaratan kullanıcı
   */
  kullanici: Kullanici;
  /**
   * Site ait bloklar
   */
  bloklar: SiteBlok[];
  /**
   * Site ait bağimsiz bölümler
   */
  bbolumler: BBolum[];

  il: Lokasyon;
  ilce: Lokasyon;
  //#endregion

  static tableName = 'site';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: [
      'id',
      'siteAdi',
      'blokSayisi',
      'bBolumSayisi',
      'ilId',
      'ilceId',
      'adres',
      'kullaniciId',
    ],

    properties: {
      id: { type: 'integer' },
      siteAdi: { type: 'string', minLength: 1, maxLength: 255 },
      vergiNo: { type: 'string', minLength: 1, maxLength: 25 },
      blokSayisi: { type: 'integer' },
      bBolumSayisi: { type: 'integer' },
      ilId: { type: 'integer' },
      ilceId: { type: 'integer' },
      adres: { type: 'string', minLength: 1, maxLength: 500 },
      postaKodu: { type: 'string', minLength: 1, maxLength: 10 },
      telNo: { type: 'string', minLength: 1, maxLength: 25 },
      ePosta: { type: 'string', minLength: 1, maxLength: 255 },
      toplamArsaPayi: { type: 'integer' },
      kullaniciId: { type: 'integer' },
      durum: { type: 'string', minLength: 1, maxLength: 1 },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    bloklar: {
      relation: BaseModel.HasManyRelation,

      modelClass: SiteBlok,
      join: {
        from: 'site.id',
        to: 'site_blok.siteId',
      },
    },

    bbolumler: {
      relation: BaseModel.HasManyRelation,

      modelClass: BBolum,
      join: {
        from: 'site.id',
        to: 'bbolum.siteId',
      },
    },

    kullanici: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Kullanici,
      join: {
        from: 'site.kullaniciId',
        to: 'kullanici.id',
      },
    },

    il: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Lokasyon,
      join: {
        from: 'site.ilId',
        to: 'lokasyon.id',
      },
    },

    ilce: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Lokasyon,
      join: {
        from: 'site.ilceId',
        to: 'lokasyon.id',
      },
    },

  });
}
