import Kullanici from '../db/models/kullanici.model';
import { Resolvers } from '../type';

export const kullaniciResolver: Resolvers = {
  Query: {
    async kullanicilar(_, {}, {}, { fieldName }) {
      const result = await Kullanici.query();
      return result;
    },

    async kullaniciById(_, { id }) {
      const result = await Kullanici.query().findById(id);
      return result;
    },
  },

  Mutation: {
    async saveKullanici(_, { payload }) {
      const result = await Kullanici.query().insert(payload).returning('*');
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
