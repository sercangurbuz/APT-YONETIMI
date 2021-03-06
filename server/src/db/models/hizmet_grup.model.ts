import BaseModel from '../../db/BaseModel';
import Hizmet from './hizmet.model';

/**
 * HizmetGrup model
 */
export default class HizmetGrup extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  grupAdi: string;
  //#endregion

  //#region Navigational properties
  /**
   * Hizmet grubuna ait hizmetler
   */
  hizmetler: Hizmet[];
  //#endregion

  static tableName = 'hizmet_grup';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'grupAdi'],

    properties: {
      id: { type: 'integer' },
      grupAdi: { type: 'string', minLenght: 1, maxLenght: 255 },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
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
