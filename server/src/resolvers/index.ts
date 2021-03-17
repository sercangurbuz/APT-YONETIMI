import { bbolumResolver } from './bbolum.resolver';
import { kullaniciResolver } from './kullanici.resolver';
import { siteResolver } from './site.resolver';

import DateType from './custom/date';

export default [DateType, bbolumResolver, siteResolver, kullaniciResolver];
