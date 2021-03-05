import BaseModel from '../BaseModel';
import BBolum from './bbolum.model';
import Site from './site.model';

/**
 * SiteBlok model
 */
export default class SiteBlok extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  id: number;
  siteId: number;
  blokAdi: string;
  //#endregion

  //#region Navigational properties
  /**
   * Ait oldugu site modeli
   */
  site: Site;
  /**
   * Blok a ait bagimsiz bolumler
   */
  bbolumler: BBolum[];
  //#endregion

  static tableName = 'site_blok';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'siteId', 'blokAdi'],

    properties: {
      id: { type: 'integer' },
      siteId: { type: 'integer' },
      blokAdi: { type: 'string', minLength: 1, maxLength: 255 },
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
        from: 'site_blok.siteId',
        to: 'site.id',
      },
    },

    bbolumler: {
      relation: BaseModel.HasManyRelation,

      modelClass: BBolum,
      join: {
        from: 'site_blok.id',
        to: 'bbolum.blokId',
      },
    },
  });
}
