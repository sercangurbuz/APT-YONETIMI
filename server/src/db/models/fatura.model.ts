import BaseModel from '../../db/BaseModel';
import { FaturaTipi } from '../enums';
import Firma from './firma.model';
import Hizmet from './hizmet.model';
import Kasa from './kasa.model';

/**
 * Fatura model
 */
export default class Fatura extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  faturaTipi: FaturaTipi;
  belgeNo?: string;
  tarih: Date;
  firmaId: number;
  hizmetId: number;
  kasaId?: number;
  tutar: number;
  aciklama?: string;
  /**
 * Gelir => Tahsil Edildi Tahsil Edilmedi
   Gider => Odendi Odenmedi
 */
  odendi: boolean;

  //#endregion

  //#region Navigational properties
  /**
   * Faturanin kesildigi firma modeli
   */
  firma: Firma;
  /**
   * Fatura hizmet kalemi
   */
  hizmet: Hizmet;
  /**
   * Eger varsa ilgili kasa modeli
   */
  kasa?: Kasa;
  //#endregion

  static tableName = 'fatura';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'faturaTipi', 'tarih', 'firmaId', 'hizmetId', 'tutar'],

    properties: {
      id: { type: 'integer' },
      faturaTipi: { type: 'integer' },
      belgeNo: { type: 'string' },
      aciklama: { type: 'string' },
      odendi: { type: 'boolean' },
      tarih: { type: 'datetime' },
      firmaId: { type: 'integer' },
      hizmetId: { type: 'integer' },
      kasaId: { type: 'integer' },
      tutar: { type: 'number' },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    firma: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Firma,
      join: {
        from: 'fatura.firmaId',
        to: 'firma.id',
      },
    },

    kasa: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Kasa,
      join: {
        from: 'fatura.kasaId',
        to: 'kasa.id',
      },
    },

    hizmet: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Hizmet,
      join: {
        from: 'fatura.hizmetId',
        to: 'hizmet.id',
      },
    },
  });
}
