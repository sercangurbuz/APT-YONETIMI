import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    kullanicilar: [Kullanici]
    kullaniciById(id: Int!): Kullanici
  }
`;
