import { linkSchema } from './types';
import { kullaniciSchema } from './Kullanici';
import { siteSchema } from './Site';
import { bbolumSchema } from './BBolum';

export default [linkSchema, kullaniciSchema, siteSchema, bbolumSchema].flat();
