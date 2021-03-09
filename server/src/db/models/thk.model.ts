import BaseModel from '../../db/BaseModel';
import { GecikmeTipi, ThkDurumu } from '../enums';
import BBolum from './bbolum.model';
import Hizmet from './hizmet.model';
import Kisi from './kisi.model';
import Ths from './ths.model';

/**
 * Thk model
 */
export default class Thk extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  kisiId: number;
  bbolumId: number;
  aciklama?: string;
  hizmetId: number;
  tarih: Date;
  sonOdeTar: Date;
  tutar: number;
  odenen: number;
  //Gecikme -----------------
  gecikme?: boolean;
  gecBasTar?: Date;
  gecYuzde?: number;
  gecTipi?: GecikmeTipi;
  gecHesapTar?: Date;
  makbuz?: boolean;
  //#endregion

  //#region Navigational properties
  /**
   * Thk un ait oldugu kişi
   */
  kisi: Kisi;
  /**
   * Hnagi bbolumE thk ettirildigi
   */
  bbolum: BBolum;
  /**
   * Hangi hizmet thk ettirildi
   */
  hizmet: Hizmet;
  //#endregion

  static tableName = 'thk';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: [
      'id',
      'kisiId',
      'bbolumId',
      'hizmetId',
      'tarih',
      'sonOdeTar',
      'tutar',
    ],

    properties: {
      id: { type: 'integer' },
      kisiId: { type: 'integer' },
      bbolumId: { type: 'integer' },
      hizmetId: { type: 'integer' },
      tarih: { type: 'datetime' },
      sonOdeTar: { type: 'datetime' },
      tutar: { type: 'number' },
      odenen: { type: 'number' },
      gecikme: { type: 'boolean' },
      gecBasTar: { type: 'date' },
      gecYuzde: { type: 'number' },
      gecTipi: { type: 'string' },
      gecHesapTar: { type: 'date' },
      makbuz: { type: 'boolean' },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  static relationMappings = () => ({
    ths: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Ths,
      join: {
        from: 'thk.id',
        through: {
          from: 'thk_ths.thkId',
          to: 'thk_ths.thsId',
          extra: {
            odenen: 'tutar',
          },
        },
        to: 'ths.id',
      },
    },

    kisi: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Kisi,
      join: {
        from: 'thk.kisiId',
        to: 'kisi.id',
      },
    },

    bbolum: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: BBolum,
      join: {
        from: 'thk.bbolumId',
        to: 'bbolum.id',
      },
    },

    hizmet: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: Hizmet,
      join: {
        from: 'thk.hizmetId',
        to: 'hizmet.id',
      },
    },
  });
}
