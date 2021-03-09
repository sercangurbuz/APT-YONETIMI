import BaseModel from '../../db/BaseModel';
import { HareketTipi } from '../enums';
import Fatura from './fatura.model';

/**
 * Firma model
 */
export default class Firma extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  ad: string;
  verNoTcKimlik?: string;
  verDairesi?: string;
  isTel?: string;
  cepTel?: string;
  iban?: string;
  hesapAd?: string;
  ePosta?: string;
  adres?: string;
  yetkiliKisi?: string;
  acilisTarihi?: Date;
  acilisBakiyesi?: number;
  hareketTip?: HareketTipi;

  //#endregion

  //#region Navigational properties
  /**
   * Firmaya ait faturalar
   */
  faturalar?: Fatura[];
  //#endregion

  static tableName = 'firma';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'ad'],

    properties: {
      id: { type: 'integer' },
      ad: { type: 'string', maxLenght: 255 },
      verNoTcKimlik: { type: 'string', maxLenght: 11 },
      verDairesi: { type: 'string', maxLenght: 255 },
      isTel: { type: 'string', maxLenght: 25 },
      cepTel: { type: 'string', maxLenght: 25 },
      iban: { type: 'string', maxLenght: 35 },
      hesapAd: { type: 'string', maxLenght: 255 },
      ePosta: { type: 'string', maxLenght: 255 },
      adres: { type: 'string', maxLenght: 500 },
      yetkiliKisi: { type: 'string', maxLenght: 255 },
      acilisTarihi: { type: 'date' },
      acilisBakiyesi: { type: 'number' },
      hareketTip: { type: 'string', maxLenght: 1 },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    faturalar: {
      relation: BaseModel.HasManyRelation,

      modelClass: Fatura,
      join: {
        from: 'firma.id',
        to: 'fatura.firmaId',
      },
    },
  });
}
