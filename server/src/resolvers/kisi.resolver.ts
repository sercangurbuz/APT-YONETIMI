import Kullanici from '../db/models/kullanici.model';
import { Resolvers } from '../type';
import { PartialModelObject } from 'objection';
import Kisi from '../db/models/kisi.model';
import Site from '../db/models/site.model';

export const kisiResolver: Resolvers = {
  Query: {
    async kisiler() {
      const result = await Kisi.query();
      return result;
    },

    async kisiById(_, { id }) {
      const result = await Kisi.query().findById(id);
      return result;
    },
  },

  Kisi: {
    async bbolumler({ id }) {
      const result = await Kisi.relatedQuery('bbolumler').for(id);
      return result;
    },

    async site({ siteId }) {
      //TODO: use dataloader
      const result = await Site.query().findById(siteId);
      return result;
    },
  },
};
