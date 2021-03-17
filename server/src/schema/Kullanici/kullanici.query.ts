import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    kulllar: [Kullanici]
    kullById(id: Int!): Kullanici
  }
`;
