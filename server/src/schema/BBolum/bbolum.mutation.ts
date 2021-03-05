import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    saveBBolum(payload: BBolumPayload!): BBolum
  }

  input BBolumPayload {
    id: Int
    siteId: Int!
    blokId: Int
    kat: Int
    no: Int!
    aidat: Float
    tipId: Int
    grupId: Int
    brutM2: Float
    netM2: Float
    arsaPayi: Float
  }
`;
