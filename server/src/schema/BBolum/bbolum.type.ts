import { gql } from 'apollo-server-express';

export default gql`
  "Bagımsız bolum tip"
  type BBolumTip {
    ad: String!
    aidat: Float
  }

  "Bagimsiz bolum & kişi ilişki modeli"
  type KisiBolum {
    id: Int!
    adSoyad: String!
    kisiTipi: String
    girisTarihi: Date
    cikisTarihi: Date
    hissePayi: Int
  }

  "Bağımsız bölüm"
  type BBolum {
    id: Int!
    siteId: Int!
    blokId: Int
    kat: Int
    no: Int
    aidat: Float
    tipId: Int
    brutM2: Float
    netM2: Float
    arsaPayi: Float
    "Bagimsiz bolumun ait oldugu site"
    site: Site
    "Bagimsiz bolumun ait oldugu blok"
    blok: Blok
    "Bagimsiz bolum tip"
    tip: BBolumTip
    "Daire sahibi"
    malik: Kisi
    "Dairenin eski sahipleri"
    eskiMalikler: [KisiBolum]
    "Kiracı"
    kiraci: Kisi
    "Eski kiracılar"
    eskiKiracilar: [KisiBolum]
  }
`;
