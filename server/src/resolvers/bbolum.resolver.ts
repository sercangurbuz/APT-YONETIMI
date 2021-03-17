import { PartialModelObject } from 'objection';
import BBolum from '../db/models/bbolum.model';
import Kullanici from '../db/models/kullanici.model';
import Site from '../db/models/site.model';
import SiteBlok from '../db/models/siteblok.model';
import { Resolvers } from '../type';

export const bbolumResolver: Resolvers = {
  Query: {
    async bbolumler() {
      const result = await BBolum.query();
      return result;
    },

    async bbolumById(_, { bbolumId }) {
      const result = await BBolum.query().findById(bbolumId);
      return result;
    },
  },

  Mutation: {
    async saveBBolum(_, { payload }) {
      const result = await BBolum.query().insert(payload).returning('*');
      return result;
    },
  },

  BBolum: {
    async site({ siteId }) {
      const result = await Site.query().findById(siteId);
      return result;
    },
    async blok({ blokId }) {
      const result = await SiteBlok.query().findById(blokId);
      return result;
    },
  },
};
