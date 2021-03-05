import { gql } from 'apollo-server-express';

export default gql`
  "Kullanıcı type"
  type Kullanici {
    id: Int!
    adSoyad: String!
    cepTel: String!
    dil: DilEnum
    ePosta: String
    "Kullanıcıya ait site ler"
    siteler: [Site!]!
  }
`;
