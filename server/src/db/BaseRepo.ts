import DataLoader from 'dataloader';
import { PubSubEngine } from 'apollo-server-express';
import _ from 'lodash';
import { AnyQueryBuilder, Model, WhereMethod } from 'objection';
import { SignalType } from '../type';
import { Writeable } from '../@types/context';
import Knex, { QueryBuilder } from 'knex';
import BaseModel from './BaseModel';

export type DataLoaderOrderOptions<T = {}> = {
  rows: T[];
  collection: (string | number)[];
  field: string;
  singleObject?: boolean;
};

export interface TriggerOptions {
  subscriptionName: string;
  signalName: string;
}

const orderedFor = <TModel>({
  rows,
  collection,
  field,
  singleObject,
}: DataLoaderOrderOptions<TModel>) => {
  // return the rows ordered for the collection
  const inGroupsOfField = _.groupBy(rows, field);
  return collection.map((element) => {
    const elementArray = inGroupsOfField[element];
    if (elementArray) {
      return singleObject ? elementArray[0] : elementArray;
    }
    return singleObject ? {} : [];
  });
};

export abstract class BaseRepo<TModel> {
  constructor(private pubsub?: PubSubEngine) {}

  private _loader: DataLoader<number, TModel> | undefined;
  /* 
  public get loader(): DataLoader<number, TModel> {
    return this._loader || this.initLoader();
  }

  private initLoader = () => {
    this._loader = new DataLoader<number, TModel>(this.getLoaderData);
    return this._loader;
  };

  private getLoaderData = async (ids: number[]) => {
    const result = await this.model.query().whereIn('id', ids);

    return (orderedFor<TModel>({
      rows: result,
      collection: 'id',
      field: pkField,
      singleObject: true,
    }) as TModel[]).map(this.toDTO);
  }; */

  triggerSignal = <T>(
    signalName: string,
    subscriptionName: string,
    payload: T,
  ) => {
    return this.pubsub?.publish(subscriptionName, { [signalName]: payload });
  };
}
