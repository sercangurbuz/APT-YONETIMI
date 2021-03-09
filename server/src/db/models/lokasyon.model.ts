import BaseModel from '../../db/BaseModel';
import { LokasyonTipi } from '../enums';



/**
 * Lokasyon model
 */
export default class Lokasyon extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  lokasyonAd: string;
  tip: LokasyonTipi;
  ustLokasyonId?: number;
  //#endregion

  //#region Navigational properties
  alt_lokasyonlar: Lokasyon[];
  ust_lokasyon: Lokasyon;
  //#endregion

  static tableName = 'lokasyon';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'lokasyonAd', 'tip'],

    properties: {
      id: { type: 'integer' },
      lokasyonAd: { type: 'string', minLength: 1, maxLength: 255 },
      tip: { type: 'string' },
      ustLokasyonId: { type: 'integer' },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    alt_lokasyonlar: {
      relation: BaseModel.HasManyRelation,

      modelClass: Lokasyon,
      join: {
        from: 'lokasyon.id',
        to: 'lokasyon.ustLokasyonId',
      },
    },

    ust_lokasyon: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Lokasyon,
      join: {
        from: 'lokasyon.ustLokasyonId',
        to: 'lokasyon.id',
      },
    },
  });
}
