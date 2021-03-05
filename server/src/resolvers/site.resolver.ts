import Kullanici from '../db/models/kullanici.model';
import Site from '../db/models/site.model';
import { Resolvers } from '../type';

export const siteResolver: Resolvers = {
  Query: {
    async siteler() {
      const result = await Site.query();
      return result;
    },

    async siteById(_, { id }) {
      const result = await Site.query().findById(id);
      return result;
    },
  },

  Mutation: {
    async saveSite(_, { payload }) {
      const result = await Site.query().insert(payload).returning('*');
      return result;
    },
  },

  Site: {
    async bloklar({ id }) {
      const result = await Site.relatedQuery('bloklar').for(id);
      return result;
    },
    async bbolumler({ id }) {
      const result = await Site.relatedQuery('bbolumler').for(id);
      return result;
    },
    async kullanici({ kullaniciId }) {
      //TODO: use dataloader
      const result = await Kullanici.query().findById(kullaniciId);
      return result;
    },
  },
};
