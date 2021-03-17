import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    kisiler: [Kisi]
    kisiById(id: Int!): Kisi
  }
`;
