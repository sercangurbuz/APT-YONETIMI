import BaseModel from '../../db/BaseModel';

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
  acilisBakiyesi?: number;
  aktif: boolean;
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
  //#endregion

  static tableName = 'kasa';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'ad', 'aktif', 'entegrasyon'],

    properties: {
      id: { type: 'integer' },
      ad: { type: 'string', maxLenght: 255 },
      acilisTarihi: { type: 'date' },
      acilisBakiyesi: { type: 'number' },
      aktif: { type: 'boolean' },
      bankaAd: { type: 'string', maxLenght: 50 },
      hesapAd: { type: 'string', maxLenght: 50 },
      subeKodu: { type: 'string', maxLenght: 25 },
      hesapNo: { type: 'string', maxLenght: 25 },
      iban: { type: 'string', maxLenght: 50 },
      entegrasyon: { type: 'boolean' },
      entKullAdi: { type: 'string', maxLenght: 255 },
      entSifre: { type: 'string', maxLenght: 500 },
    },
  };

  /* -------------------------------------------------------------------------- */
  /*                                  Relations                                 */
  /* -------------------------------------------------------------------------- */

  /* static relationMappings = () => ({
 : {
   relation: BaseModel.HasManyRelation,

   modelClass: ,
   join: {
     from: '.id',
     to: 'Kasa.',
   },
 },

}); */
}
