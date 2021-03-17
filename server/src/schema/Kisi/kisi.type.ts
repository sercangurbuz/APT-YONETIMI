import { gql } from 'apollo-server-express';

export default gql`
  "Kullanıcı type"
  type Kisi {
    id: Int!
    adSoyad: String!
    siteId: Int!
    tcKimlikVergiNo: String
    tel: String
    tel2: String
    ePosta: String
    adres: String
    aracPlaka: String
    meslek: String
    ogrenimDurumu: Int
    dil: String
    cinsiyet: String

    site: Site
    bbolumler: [BBolum]
  }
`;
