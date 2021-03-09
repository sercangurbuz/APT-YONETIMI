import BaseModel from '../../db/BaseModel';
import Hizmet from './hizmet.model';
import Site from './site.model';

/**
 * HizmetGrup model
 */
export default class HizmetGrup extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  grupAdi: string;
  siteId: number;
  //#endregion

  //#region Navigational properties
  /**
   * Hizmet grubuna ait hizmetler
   */
  hizmetler?: Hizmet[];
  site: Site;
  //#endregion

  static tableName = 'hizmet_grup';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'grupAdi', 'siteId'],

    properties: {
      id: { type: 'integer' },
      siteId: { type: 'integer' },
      grupAdi: { type: 'string', minLenght: 1, maxLenght: 255 },
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
        from: 'hizmet_grup.siteId',
        to: 'site.id',
      },
    },
    hizmetler: {
      relation: BaseModel.HasManyRelation,

      modelClass: Hizmet,
      join: {
        from: 'hizmet_grup.id',
        to: 'hizmet.grupId',
      },
    },
  });
}
