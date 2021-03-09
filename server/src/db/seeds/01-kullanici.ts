import * as Knex from 'knex';
import { ModelObject } from 'objection';
import { Dil } from '../enums';
import Kullanici from '../models/kullanici.model';

export async function seed(knex: Knex): Promise<void> {
  var tblName = 'kullanici';

  var rows: ModelObject<Omit<Kullanici, 'id' | 'siteler'>>[] = [
    {
      adSoyad: 'Gardiner Jefferd',
      cepTel: '(746) 8789041',
      ePosta: 'gjefferd0@rakuten.co.jp',
      dil: Dil.En,
    },
    {
      adSoyad: 'Zack Steen',
      cepTel: '(230) 2677210',
      ePosta: 'zsteen1@ehow.com',
      dil: Dil.Tr,
    },
    {
      adSoyad: 'Ollie Lefeuvre',
      cepTel: '(137) 4227965',
      ePosta: 'olefeuvre2@google.com.hk',
      dil: Dil.Tr,
    },
    {
      adSoyad: 'Darb Tender',
      cepTel: '(854) 2319491',
      ePosta: 'dtender3@tiny.cc',
      dil: Dil.En,
    },
    {
      adSoyad: 'Carina Vahey',
      cepTel: '(942) 9714269',
      ePosta: 'cvahey4@is.gd',
      dil: Dil.En,
    },
    {
      adSoyad: 'Ernie Neising',
      cepTel: '(551) 7685535',
      ePosta: 'eneising5@nbcnews.com',
      dil: Dil.Tr,
    },
    {
      adSoyad: 'Pauly Etherton',
      cepTel: '(469) 4003366',
      ePosta: 'petherton6@lycos.com',
      dil: Dil.En,
    },
    {
      adSoyad: 'Dur Balazs',
      cepTel: '(999) 7445905',
      ePosta: 'dbalazs7@slate.com',
      dil: Dil.En,
    },
    {
      adSoyad: 'Andris Gorelli',
      cepTel: '(641) 7932055',
      ePosta: 'agorelli8@illinois.edu',
      dil: Dil.Tr,
    },
    {
      adSoyad: 'Barry Kornilyev',
      cepTel: '(139) 2056316',
      ePosta: 'bkornilyev9@bing.com',
      dil: Dil.En,
    },
  ];

  return knex(tblName)
    .del() //Remove all rows from table
    .then(function () {
      return knex.insert(rows).into(tblName); //Insert new rows
    });
}
