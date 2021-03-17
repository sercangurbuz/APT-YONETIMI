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
    bloklar: [Blok]
    "Siteye ait bagimsiz bolumler"
    bbolumler: [BBolum]
  }

  "Site bloklari"
  type Blok {
    id: Int!
    blokAdi: String!
  }
`;
