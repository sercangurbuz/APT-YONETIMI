import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    saveKull(payload: KullPayload!): Kullanici
  }

  input KullPayload {
    id: Int
    adSoyad: String!
    cepTel: String!
    dil: String
    ePosta: String
  }
`;
