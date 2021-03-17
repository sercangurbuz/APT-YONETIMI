import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { KullaniciMapper, SiteMapper, BBolumMapper } from './@types/mappers';
import { GQLContext } from './@types/context';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Custom Date type */
  Date: any;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  _: Scalars['Boolean'];
  bbolumById?: Maybe<BBolum>;
  bbolumler?: Maybe<Array<Maybe<BBolum>>>;
  kisiById?: Maybe<Kisi>;
  kisiler?: Maybe<Array<Maybe<Kisi>>>;
  kullById?: Maybe<Kullanici>;
  kulllar?: Maybe<Array<Maybe<Kullanici>>>;
  siteById?: Maybe<Site>;
  siteler?: Maybe<Array<Maybe<Site>>>;
};

export type QueryBbolumByIdArgs = {
  bbolumId: Scalars['Int'];
};

export type QueryKisiByIdArgs = {
  id: Scalars['Int'];
};

export type QueryKullByIdArgs = {
  id: Scalars['Int'];
};

export type QuerySiteByIdArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _: Scalars['Boolean'];
  saveBBolum?: Maybe<BBolum>;
  saveKisi?: Maybe<Kisi>;
  saveKull?: Maybe<Kullanici>;
  saveSite?: Maybe<Site>;
};

export type MutationSaveBBolumArgs = {
  payload: BBolumPayload;
};

export type MutationSaveKisiArgs = {
  payload: KisiPayload;
};

export type MutationSaveKullArgs = {
  payload: KullPayload;
};

export type MutationSaveSiteArgs = {
  payload: SitePayload;
};

export type Subscription = {
  __typename?: 'Subscription';
  _: Scalars['Boolean'];
};

export type Pager = {
  pageIndex: Scalars['Int'];
  pageSize: Scalars['Int'];
};

/** Supported ui cultures (en,tr) */
export enum DilEnum {
  En = 'EN',
  Tr = 'TR',
}

export enum SignalType {
  Added = 'ADDED',
  Deleted = 'DELETED',
  Modified = 'MODIFIED',
}

export type Signal = {
  type?: Maybe<SignalType>;
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type BBolumPayload = {
  id?: Maybe<Scalars['Int']>;
  siteId: Scalars['Int'];
  blokId?: Maybe<Scalars['Int']>;
  kat?: Maybe<Scalars['Int']>;
  no: Scalars['Int'];
  aidat?: Maybe<Scalars['Float']>;
  tipId?: Maybe<Scalars['Int']>;
  grupId?: Maybe<Scalars['Int']>;
  brutM2?: Maybe<Scalars['Float']>;
  netM2?: Maybe<Scalars['Float']>;
  arsaPayi?: Maybe<Scalars['Float']>;
};

/** Bagımsız bolum tip */
export type BBolumTip = {
  __typename?: 'BBolumTip';
  ad: Scalars['String'];
  aidat?: Maybe<Scalars['Float']>;
};

/** Bagimsiz bolum & kişi ilişki modeli */
export type KisiBolum = {
  __typename?: 'KisiBolum';
  id: Scalars['Int'];
  adSoyad: Scalars['String'];
  kisiTipi?: Maybe<Scalars['String']>;
  girisTarihi?: Maybe<Scalars['Date']>;
  cikisTarihi?: Maybe<Scalars['Date']>;
  hissePayi?: Maybe<Scalars['Int']>;
};

/** Bağımsız bölüm */
export type BBolum = {
  __typename?: 'BBolum';
  id: Scalars['Int'];
  siteId: Scalars['Int'];
  blokId?: Maybe<Scalars['Int']>;
  kat?: Maybe<Scalars['Int']>;
  no?: Maybe<Scalars['Int']>;
  aidat?: Maybe<Scalars['Float']>;
  tipId?: Maybe<Scalars['Int']>;
  brutM2?: Maybe<Scalars['Float']>;
  netM2?: Maybe<Scalars['Float']>;
  arsaPayi?: Maybe<Scalars['Float']>;
  /** Bagimsiz bolumun ait oldugu site */
  site?: Maybe<Site>;
  /** Bagimsiz bolumun ait oldugu blok */
  blok?: Maybe<Blok>;
  /** Bagimsiz bolum tip */
  tip?: Maybe<BBolumTip>;
  /** Daire sahibi */
  malik?: Maybe<Kisi>;
  /** Dairenin eski sahipleri */
  eskiMalikler?: Maybe<Array<Maybe<KisiBolum>>>;
  /** Kiracı */
  kiraci?: Maybe<Kisi>;
  /** Eski kiracılar */
  eskiKiracilar?: Maybe<Array<Maybe<KisiBolum>>>;
};

export type KisiPayload = {
  id?: Maybe<Scalars['Int']>;
  adSoyad: Scalars['String'];
  siteId: Scalars['Int'];
  tcKimlikVergiNo?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  tel2?: Maybe<Scalars['String']>;
  ePosta?: Maybe<Scalars['String']>;
  adres?: Maybe<Scalars['String']>;
  aracPlaka?: Maybe<Scalars['String']>;
  meslek?: Maybe<Scalars['String']>;
  ogrenimDurumu?: Maybe<Scalars['Int']>;
  dil?: Maybe<Scalars['String']>;
  cinsiyet?: Maybe<Scalars['String']>;
};

/** Kullanıcı type */
export type Kisi = {
  __typename?: 'Kisi';
  id: Scalars['Int'];
  adSoyad: Scalars['String'];
  siteId: Scalars['Int'];
  tcKimlikVergiNo?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  tel2?: Maybe<Scalars['String']>;
  ePosta?: Maybe<Scalars['String']>;
  adres?: Maybe<Scalars['String']>;
  aracPlaka?: Maybe<Scalars['String']>;
  meslek?: Maybe<Scalars['String']>;
  ogrenimDurumu?: Maybe<Scalars['Int']>;
  dil?: Maybe<Scalars['String']>;
  cinsiyet?: Maybe<Scalars['String']>;
  site?: Maybe<Site>;
  bbolumler?: Maybe<Array<Maybe<BBolum>>>;
};

export type KullPayload = {
  id?: Maybe<Scalars['Int']>;
  adSoyad: Scalars['String'];
  cepTel: Scalars['String'];
  dil?: Maybe<DilEnum>;
  ePosta?: Maybe<Scalars['String']>;
};

/** Kullanıcı type */
export type Kullanici = {
  __typename?: 'Kullanici';
  id: Scalars['Int'];
  adSoyad: Scalars['String'];
  cepTel: Scalars['String'];
  dil?: Maybe<DilEnum>;
  ePosta?: Maybe<Scalars['String']>;
  /** Kullanıcıya ait site ler */
  siteler?: Maybe<Array<Maybe<Site>>>;
};

export type SitePayload = {
  id?: Maybe<Scalars['Int']>;
  siteAdi: Scalars['String'];
  blokSayisi: Scalars['Int'];
  bBolumSayisi: Scalars['Int'];
  ilId: Scalars['Int'];
  ilceId: Scalars['Int'];
  adres: Scalars['String'];
  postaKodu?: Maybe<Scalars['String']>;
  toplamArsaPayi?: Maybe<Scalars['Int']>;
  kullaniciId: Scalars['Int'];
  durum: Scalars['String'];
};

/** Site type */
export type Site = {
  __typename?: 'Site';
  id: Scalars['Int'];
  siteAdi: Scalars['String'];
  vergiNo?: Maybe<Scalars['String']>;
  blokSayisi: Scalars['Int'];
  bBolumSayisi: Scalars['Int'];
  ilId: Scalars['Int'];
  ilceId: Scalars['Int'];
  adres: Scalars['String'];
  postaKodu?: Maybe<Scalars['String']>;
  telNo?: Maybe<Scalars['String']>;
  ePosta?: Maybe<Scalars['String']>;
  toplamArsaPayi?: Maybe<Scalars['Int']>;
  kullaniciId: Scalars['Int'];
  durum: Scalars['String'];
  /** Siteyi açan kullanıcı */
  kullanici?: Maybe<Kullanici>;
  /** Siteye ait bloklar */
  bloklar?: Maybe<Array<Maybe<Blok>>>;
  /** Siteye ait bagimsiz bolumler */
  bbolumler?: Maybe<Array<Maybe<BBolum>>>;
};

/** Site bloklari */
export type Blok = {
  __typename?: 'Blok';
  id: Scalars['Int'];
  blokAdi: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Pager: never;
  DilEnum: DilEnum;
  SignalType: SignalType;
  Signal: never;
  File: ResolverTypeWrapper<File>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  BBolumPayload: BBolumPayload;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  BBolumTip: ResolverTypeWrapper<BBolumTip>;
  KisiBolum: ResolverTypeWrapper<KisiBolum>;
  BBolum: ResolverTypeWrapper<BBolumMapper>;
  KisiPayload: KisiPayload;
  Kisi: ResolverTypeWrapper<
    Omit<Kisi, 'site' | 'bbolumler'> & {
      site?: Maybe<ResolversTypes['Site']>;
      bbolumler?: Maybe<Array<Maybe<ResolversTypes['BBolum']>>>;
    }
  >;
  KullPayload: KullPayload;
  Kullanici: ResolverTypeWrapper<KullaniciMapper>;
  SitePayload: SitePayload;
  Site: ResolverTypeWrapper<SiteMapper>;
  Blok: ResolverTypeWrapper<Blok>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Date: Scalars['Date'];
  Query: {};
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Mutation: {};
  Subscription: {};
  Pager: never;
  Signal: never;
  File: File;
  String: Scalars['String'];
  Upload: Scalars['Upload'];
  BBolumPayload: BBolumPayload;
  Float: Scalars['Float'];
  BBolumTip: BBolumTip;
  KisiBolum: KisiBolum;
  BBolum: BBolumMapper;
  KisiPayload: KisiPayload;
  Kisi: Omit<Kisi, 'site' | 'bbolumler'> & {
    site?: Maybe<ResolversParentTypes['Site']>;
    bbolumler?: Maybe<Array<Maybe<ResolversParentTypes['BBolum']>>>;
  };
  KullPayload: KullPayload;
  Kullanici: KullaniciMapper;
  SitePayload: SitePayload;
  Site: SiteMapper;
  Blok: Blok;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type QueryResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  _?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  bbolumById?: Resolver<
    Maybe<ResolversTypes['BBolum']>,
    ParentType,
    ContextType,
    RequireFields<QueryBbolumByIdArgs, 'bbolumId'>
  >;
  bbolumler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['BBolum']>>>,
    ParentType,
    ContextType
  >;
  kisiById?: Resolver<
    Maybe<ResolversTypes['Kisi']>,
    ParentType,
    ContextType,
    RequireFields<QueryKisiByIdArgs, 'id'>
  >;
  kisiler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Kisi']>>>,
    ParentType,
    ContextType
  >;
  kullById?: Resolver<
    Maybe<ResolversTypes['Kullanici']>,
    ParentType,
    ContextType,
    RequireFields<QueryKullByIdArgs, 'id'>
  >;
  kulllar?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Kullanici']>>>,
    ParentType,
    ContextType
  >;
  siteById?: Resolver<
    Maybe<ResolversTypes['Site']>,
    ParentType,
    ContextType,
    RequireFields<QuerySiteByIdArgs, 'id'>
  >;
  siteler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Site']>>>,
    ParentType,
    ContextType
  >;
}>;

export type MutationResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  _?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  saveBBolum?: Resolver<
    Maybe<ResolversTypes['BBolum']>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveBBolumArgs, 'payload'>
  >;
  saveKisi?: Resolver<
    Maybe<ResolversTypes['Kisi']>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveKisiArgs, 'payload'>
  >;
  saveKull?: Resolver<
    Maybe<ResolversTypes['Kullanici']>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveKullArgs, 'payload'>
  >;
  saveSite?: Resolver<
    Maybe<ResolversTypes['Site']>,
    ParentType,
    ContextType,
    RequireFields<MutationSaveSiteArgs, 'payload'>
  >;
}>;

export type SubscriptionResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = ResolversObject<{
  _?: SubscriptionResolver<
    ResolversTypes['Boolean'],
    '_',
    ParentType,
    ContextType
  >;
}>;

export type PagerResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Pager'] = ResolversParentTypes['Pager']
> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  pageIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type SignalResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Signal'] = ResolversParentTypes['Signal']
> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['SignalType']>, ParentType, ContextType>;
}>;

export type FileResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']
> = ResolversObject<{
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type BBolumTipResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['BBolumTip'] = ResolversParentTypes['BBolumTip']
> = ResolversObject<{
  ad?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aidat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KisiBolumResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['KisiBolum'] = ResolversParentTypes['KisiBolum']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  adSoyad?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kisiTipi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  girisTarihi?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType
  >;
  cikisTarihi?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType
  >;
  hissePayi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BBolumResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['BBolum'] = ResolversParentTypes['BBolum']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blokId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  no?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  aidat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tipId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brutM2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netM2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  arsaPayi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  blok?: Resolver<Maybe<ResolversTypes['Blok']>, ParentType, ContextType>;
  tip?: Resolver<Maybe<ResolversTypes['BBolumTip']>, ParentType, ContextType>;
  malik?: Resolver<Maybe<ResolversTypes['Kisi']>, ParentType, ContextType>;
  eskiMalikler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['KisiBolum']>>>,
    ParentType,
    ContextType
  >;
  kiraci?: Resolver<Maybe<ResolversTypes['Kisi']>, ParentType, ContextType>;
  eskiKiracilar?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['KisiBolum']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KisiResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Kisi'] = ResolversParentTypes['Kisi']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  adSoyad?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siteId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tcKimlikVergiNo?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ePosta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adres?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aracPlaka?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  meslek?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ogrenimDurumu?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  dil?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cinsiyet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  bbolumler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['BBolum']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KullaniciResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Kullanici'] = ResolversParentTypes['Kullanici']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  adSoyad?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cepTel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dil?: Resolver<Maybe<ResolversTypes['DilEnum']>, ParentType, ContextType>;
  ePosta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siteler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Site']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SiteResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  siteAdi?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vergiNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blokSayisi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bBolumSayisi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ilId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ilceId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  adres?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postaKodu?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  telNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ePosta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toplamArsaPayi?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  kullaniciId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  durum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kullanici?: Resolver<
    Maybe<ResolversTypes['Kullanici']>,
    ParentType,
    ContextType
  >;
  bloklar?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Blok']>>>,
    ParentType,
    ContextType
  >;
  bbolumler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['BBolum']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlokResolvers<
  ContextType = GQLContext,
  ParentType extends ResolversParentTypes['Blok'] = ResolversParentTypes['Blok']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blokAdi?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GQLContext> = ResolversObject<{
  Date?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Pager?: PagerResolvers<ContextType>;
  Signal?: SignalResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  BBolumTip?: BBolumTipResolvers<ContextType>;
  KisiBolum?: KisiBolumResolvers<ContextType>;
  BBolum?: BBolumResolvers<ContextType>;
  Kisi?: KisiResolvers<ContextType>;
  Kullanici?: KullaniciResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  Blok?: BlokResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = GQLContext> = Resolvers<ContextType>;
