import { Model } from 'objection';
import knexSettings from '../../knexfile';
import Knex from 'knex';

export default ({ isDev }: { isDev: boolean }) => {
  const config = isDev ? knexSettings.development : knexSettings.production;
  const knexInstance = Knex(config);
  return Model.knex(knexInstance);
};
