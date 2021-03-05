import { gql } from 'apollo-server-express';

export default gql`
  "Site type"
  type Site {
    id: Int!
    siteAdi: String!
    vergiNo: String
    blokSayisi: Int!
    bBolumSayisi: Int!
    ilId: Int!
    ilceId: Int!
    adres: String!
    postaKodu: String
    telNo: String
    ePosta: String
    toplamArsaPayi: Int
    kullaniciId: Int!
    durum: String!
    "Siteyi açan kullanıcı"
    kullanici: Kullanici
    "Siteye ait bloklar"
    bloklar: [SiteBlok!]!  
    "Siteye ait bagimsiz bolumler"
    bbolumler: [BBolum!]!
  }
  
  "Site bloklari"
  type SiteBlok {
    id: Int!
    siteId: Int!
    blokAdi: String!
    "Ait oldugu site modeli"
    site: Site
    "Blok a ait bagimsiz bolumler"
    bbolumler: [BBolum!]!
  }
`;
