import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    saveSite(payload: SitePayload!): Site
  }

  input SitePayload {
    id: Int
    siteAdi: String!
    blokSayisi: Int!
    bBolumSayisi: Int!
    ilId: Int!
    ilceId: Int!
    adres: String!
    postaKodu: String
    toplamArsaPayi: Int
    kullaniciId: Int!
    durum: String!
  }
`;
