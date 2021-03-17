import { gql } from 'apollo-server-express';

export const linkSchema = gql`
  "Custom Date type"
  scalar Date

  type Query {
    _: Boolean!
  }

  type Mutation {
    _: Boolean!
  }

  type Subscription {
    _: Boolean!
  }

  interface Pager {
    pageIndex: Int!
    pageSize: Int!
  }

  enum SignalType {
    ADDED
    DELETED
    MODIFIED
  }

  interface Signal {
    type: SignalType
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
`;
