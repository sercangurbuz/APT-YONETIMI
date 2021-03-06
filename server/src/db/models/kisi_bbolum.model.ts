import BaseModel from '../../db/BaseModel';
import { KisiTipi } from '../enums';

/**
 * KisiBBolum model
 */
export default class KisiBBolum extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  kisiId: number;
  bbolumId: number;
  kisiTipi: KisiTipi;
  girisTarihi: Date;
  cikisTarihi: Date;
  hissePayi: number;
  //#endregion

  //#region Navigational properties
  //#endregion

  static tableName = 'kisi_bbolum';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'kisiId', 'bbolumId', 'kisiTipi', 'girisTarihi'],

    properties: {
      id: { type: 'integer' },
      kisiId: { type: 'integer' },
      bbolumId: { type: 'integer' },
      kisiTipi: { type: 'string' },
      girisTarihi: { type: 'date' },
      cikisTarihi: { type: 'date' },
    },
  };
}
