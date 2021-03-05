import BaseModel from '../../db/BaseModel';

/**
 * BBolumTip model
 */
export default class BBolumTip extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  ad: string;
  aidat: number;
  //#endregion

  //#region Navigational properties
  //#endregion

  static tableName = 'bbolum_tip';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'ad'],

    properties: {
      id: { type: 'integer' },
      ad: { type: 'string', minLength: 1, maxLength: 255 },
      aidat: { type: 'number' },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */
}
