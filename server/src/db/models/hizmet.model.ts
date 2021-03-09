import BaseModel from '../../db/BaseModel';
import { DagitimTipi, HareketTipi, HizmetTipi } from '../enums';
import HizmetGrup from './hizmet_grup.model';
import Site from './site.model';

/**
 * Hizmet model
 */
export default class Hizmet extends BaseModel {
  /* -------------------------------------------------------------------------- */
  /*                                   Fields                                   */
  /* -------------------------------------------------------------------------- */

  //#region Fields
  hizmetAdi: string;
  tip: HizmetTipi;
  siteId: number;
  grupId: number;
  dagitimTipi: DagitimTipi;
  acilisTarihi: Date;
  acilisBakiyesi: number;
  hareketTipi: HareketTipi;
  //#endregion

  //#region Navigational properties
  hizmetGrup: HizmetGrup;
  site: Site;
  //#endregion

  static tableName = 'hizmet';

  /* -------------------------------------------------------------------------- */
  /*                              Validation schema                             */
  /* -------------------------------------------------------------------------- */

  static jsonSchema = {
    type: 'object',
    required: ['id', 'tipId', 'siteId'],

    properties: {
      id: { type: 'integer' },
      tip: { type: 'string', minLength: 1, maxLength: 10 },
      grupId: { type: 'integer' },
      siteId: { type: 'integer' },
      dagitimTipi: { type: 'string', minLength: 1, maxLength: 6 },
      acilisTarihi: { type: 'date-time' },
      acilisBakiyesi: { type: 'number' },
      hareketTipi: { type: 'string', minLength: 1, maxLength: 1 },
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
        from: 'hizmet.siteId',
        to: 'site.id',
      },
    },

    hizmetGrup: {
      relation: BaseModel.BelongsToOneRelation,

      modelClass: HizmetGrup,
      join: {
        from: 'hizmet.grupId',
        to: 'hizmet_grup.id',
      },
    },
  });
}
