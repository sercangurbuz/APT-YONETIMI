import BaseModel from '../BaseModel';
import { Dil } from '../enums';
import Site from './site.model';

/**
 * Kullanici model
 */
export default class Kullanici extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  adSoyad: string;
  cepTel: string;
  dil: Dil;
  ePosta: string;
  //#endregion

  //#region Navigational properties
  /**
   * Kullanıcıya ait site'ler
   */
  siteler?: Site[];
  //#endregion

  static tableName = 'kullanici';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'adSoyad', 'cepTel', 'dil'],

    properties: {
      id: { type: 'integer' },
      adSoyad: { type: 'string', minLength: 1, maxLength: 255 },
      dil: { type: 'integer' },
      cepTel: { type: 'string', minLength: 1, maxLength: 25 },
      ePosta: { type: 'string', minLength: 1, maxLength: 255 },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    siteler: {
      relation: BaseModel.HasManyRelation,

      modelClass: Site,
      join: {
        from: 'kullanici.id',
        to: 'site.kullaniciId',
      },
    },
  });
}
