import BaseModel from '../../db/BaseModel';
import Site from './site.model';

/**
 * Kasa model
 */
export default class Kasa extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  ad: string;
  acilisTarihi?: Date;
  siteId: number;
  acilisBakiyesi?: number;
  aktif?: boolean;
  bankaAd?: string;
  hesapAd?: string;
  subeKodu?: string;
  hesapNo?: string;
  iban?: string;
  entegrasyon?: boolean;
  entKullAdi?: string;
  entSifre?: string;
  //#endregion

  //#region Navigational properties
  /**
   * Hangi siteye ait oldugu bilgisi
   */
  site: Site;
  //#endregion

  static tableName = 'kasa';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'ad', 'aktif', 'entegrasyon', 'siteId'],

    properties: {
      id: { type: 'integer' },
      ad: { type: 'string', maxLenght: 255 },
      acilisTarihi: { type: 'date' },
      acilisBakiyesi: { type: 'number' },
      aktif: { type: 'boolean' },
      siteId: { type: 'integer' },
      bankaAd: { type: 'string', maxLenght: 50 },
      hesapAd: { type: 'string', maxLenght: 50 },
      subeKodu: { type: 'string', maxLenght: 25 },
      hesapNo: { type: 'string', maxLenght: 25 },
      iban: { type: 'string', maxLenght: 26 },
      entegrasyon: { type: 'boolean' },
      entKullAdi: { type: 'string', maxLenght: 255 },
      entSifre: { type: 'string', maxLenght: 500 },
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
        from: 'kasa.siteId',
        to: 'site.id',
      },
    },
  });
}
