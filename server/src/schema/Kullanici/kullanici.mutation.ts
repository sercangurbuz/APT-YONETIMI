import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    saveKullanici(payload: KullaniciPayload!): Kullanici
  }

  input KullaniciPayload {
    id: Int
    adSoyad: String!
    cepTel: String!
    dil: DilEnum
    ePosta: String
  }
`;
