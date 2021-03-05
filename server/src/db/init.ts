import { Model } from 'objection';
import knexSettings from '../../knexfile';
import Knex from 'knex';

const isDevEnv = process.env.NODE_ENV === 'development';
const config = isDevEnv ? knexSettings.development : knexSettings.production;

export default () => {
  const knexInstance = Knex(config);
  return Model.knex(knexInstance);
};
