import BaseModel from '../../db/BaseModel';

export type HizmetTipi = 'gelir' | 'gider' | 'gelirgider';
/**
 * esit => Bagimsiz bölümlere eşit
 * grup => Bagimsiz bolum grubuna göre
 * tip => Bagimsiz bolum tipine göre
 * bbolum => Bagimsiz bolumlere göre
 */
export type DagitimTipi = 'esit' | 'grup' | 'tip' | 'bbolum';

/**
 * B => Borc
 * A => Alacak
 */
export type HareketTipi = 'B' | 'A';

/**
 * Hizmet model
 */
export default class Hizmet extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  tip: HizmetTipi;
  grupId: number;
  dagitimTipi: DagitimTipi;
  acilisTarihi: Date;
  acilisBakiyesi: number;
  hareketTipi: HareketTipi;
  //#endregion

  //#region Navigational properties
  //#endregion

  static tableName = 'hizmet';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'tipId'],

    properties: {
      id: { type: 'integer' },
      tip: { type: 'string', minLength: 1, maxLength: 10 },
      grupId: { type: 'integer' },
      dagitimTipi: { type: 'string', minLength: 1, maxLength: 6 },
      acilisTarihi: { type: 'date-time' },
      acilisBakiyesi: { type: 'number' },
      hareketTipi: { type: 'string', minLength: 1, maxLength: 1 },
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
     to: 'Hizmet.',
   },
 },

}); */
}
