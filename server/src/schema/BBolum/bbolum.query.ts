import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    bbolumler: [BBolum]
    bbolumById(bbolumId: Int!): BBolum
  }
`;
