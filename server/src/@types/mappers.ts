import { Model, NonFunctionPropertyNames } from 'objection';
import BBolum from '../db/models/bbolum.model';
import Kullanici from '../db/models/kullanici.model';
import Site from '../db/models/site.model';
import SiteBlok from '../db/models/siteblok.model';

export type Mapper<T extends Model> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, 'QueryBuilderType'>
>;

// Types to use in Codegen mappers
export type KullaniciMapper = Mapper<Kullanici>;
export type SiteMapper = Mapper<Site>;
export type BlokMapper = Mapper<SiteBlok>;
export type BBolumMapper = Mapper<BBolum>;
