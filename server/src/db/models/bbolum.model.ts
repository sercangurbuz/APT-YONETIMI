import BaseModel from '../BaseModel';
import BBolumTip from './bbolum_tip.model';
import Kullanici from './kullanici.model';
import Site from './site.model';
import SiteBlok from './siteblok.model';

/**
 * Bagimsiz Bölüm model
 */
export default class BBolum extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  siteId: number;
  blokId: number;
  kat: number;
  no: string;
  aidat: number;
  tipId: number;
  brutM2: number;
  netM2: number;
  arsaPayi: number;
  //#endregion

  //#region Navigational properties
  /**
   * Ait olduğu site modeli
   */
  site: Site;
  /**
   * Ait olduğu blok modeli
   */
  blok: SiteBlok;
  /**
   * Bagimsiz bolum tip modeli
   */
  bbolumTip: BBolumTip;
  //#endregion

  static tableName = 'bbolum';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'siteId', 'no', 'kat'],

    properties: {
      id: { type: 'integer' },
      siteId: { type: 'integer' },
      blokId: { type: 'integer' },
      kat: { type: 'integer' },
      no: { type: 'integer' },
      aidat: { type: 'number' },
      tipId: { type: 'integer' },
      brutM2: { type: 'number' },
      netM2: { type: 'number' },
      arsaPayi: { type: 'number' },
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
        from: 'bbolum.siteId',
        to: 'site.id',
      },
    },

    blok: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: SiteBlok,
      join: {
        from: 'bbolum.blokId',
        to: 'site_blok.id',
      },
    },

    bbolumTip: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: BBolumTip,
      join: {
        from: 'bbolum.tipId',
        to: 'bbolum_tip.id',
      },
    },
  });
}
