import BaseModel from '../../db/BaseModel';
import { ThsTipi } from '../enums';
import Kasa from './kasa.model';
import Thk from './thk.model';

/**
 * Ths model
 */
export default class Ths extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  bbolumId: number;
  kisiId: number;
  tarih: number;
  kasaId: number;
  thsTipi: ThsTipi;
  //#endregion

  //#region Navigational properties
  //#endregion

  static tableName = 'ths';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'bbolumId', 'kisiId', 'tarih', 'kasaId', 'thsTipi'],

    properties: {
      id: { type: 'integer' },
      bbolumId: { type: 'integer' },
      kisiId: { type: 'integer' },
      kasaId: { type: 'integer' },
      tarih: { type: 'datetime' },
      thsTipi: { type: 'string' },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    thk: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Thk,
      join: {
        from: 'ths.id',
        through: {
          from: 'thk_ths.thsId',
          to: 'thk_ths.thkId',
          extra: {
            odenen: 'tutar',
          },
        },
        to: 'thk.id',
      },
    },
    kasa: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Kasa,
      join: {
        from: 'ths.kasaId',
        to: 'kasa.id',
      },
    },
  });
}
