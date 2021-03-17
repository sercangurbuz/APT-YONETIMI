import { linkSchema } from './types';
import { kullaniciSchema } from './Kullanici';
import { siteSchema } from './Site';
import { bbolumSchema } from './BBolum';
import { kisiSchema } from './Kisi';

export default [
  linkSchema,
  kullaniciSchema,
  kisiSchema,
  siteSchema,
  bbolumSchema,
].flat();
