export enum HizmetTipi {
  Gelir = 1,
  Gider,
  GelirGider,
}
/**
 * esit => Bagimsiz bölümlere eşit
 * grup => Bagimsiz bolum grubuna göre
 * tip => Bagimsiz bolum tipine göre
 * bbolum => Bagimsiz bolumlere göre
 */
export enum DagitimTipi {
  Esit = 'E',
  GrubaGore = 'G',
  TipeGore = 'T',
  BBolumlereGore = 'B',
}
/**
 * B => Borc
 * A => Alacak
 */
export enum HareketTipi {
  Borc = 'B',
  Alacak = 'A',
}

export enum KisiTipi {
  Malik = 'M',
  Kiraci = 'K',
  DaireSakini = 'S',
}

export enum OgrenimDurumu {
  YuksekLisans = 1,
  Lisans,
  OnLisans,
  Lise,
  Ilkokul,
}

export enum Cinsiyet {
  Erkek = 'E',
  Kadin = 'K',
}

export enum Dil {
  Tr = 'tr',
  En = 'en',
}

export enum LokasyonTipi {
  Ulke = 1,
  Il,
  Ilce,
  Mahalle,
  Sokak,
}

export enum GecikmeTipi {
  Gunluk = 'G',
  Aylık = 'A',
}

export enum ThsTipi {
  Otomatik = 'O',
  BorclandirmaTuruneGore = 'B',
  EvrakSecerek = 'E',
}

export enum FaturaTipi {
  MasrafFaturası = 1,
  OdemeMakbuzu,
  MasrafFisi,
  GelirFaturasi,
  TahsilatMakbuzu,
  GelirFisi,
}
