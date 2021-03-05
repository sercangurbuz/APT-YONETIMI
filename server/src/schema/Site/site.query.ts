import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    siteler: [Site]
    siteById(id: Int!): Site
  }
`;
