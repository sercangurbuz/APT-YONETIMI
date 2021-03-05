import { gql } from 'apollo-server-express';

export default gql`
  "Bağımsız bölüm"
  type BBolum {
    id: Int!
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
    "Bagimsiz bolumun ait oldugu site"
    site: Site
    "Bagimsiz bolumun ait oldugu blok"
    blok: SiteBlok
  }
`;
