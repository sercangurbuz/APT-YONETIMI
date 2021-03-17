import Kullanici from '../db/models/kullanici.model';
import { Resolvers } from '../type';
import { PartialModelObject } from 'objection';

export const kullaniciResolver: Resolvers = {
  Query: {
    async kulllar() {
      const result = await Kullanici.query();
      return result;
    },

    async kullById(_, { id }) {
      const result = await Kullanici.query().findById(id);
      return result;
    },
  },

  Mutation: {
    async saveKull(_, { payload }) {
      const result = await Kullanici.query()
        .insert(payload as PartialModelObject<Kullanici>)
        .returning('*');
      return result;
    },
  },

  Kullanici: {
    async siteler({ id }) {
      const result = await Kullanici.relatedQuery('siteler').for(id);
      return result;
    },
  },
};
