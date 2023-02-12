// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
  BaseTranslation as BaseTranslationType,
  LocalizedString,
  RequiredParams,
} from 'typesafe-i18n';

export type BaseTranslation = BaseTranslationType;
export type BaseLocale = 'en';

export type Locales = 'en' | 'fr';

export type Translation = RootTranslation;

export type Translations = RootTranslation;

type RootTranslation = {
  /**
   * H​i​ ​{​n​a​m​e​}​!
   * @param {string} name
   */
  HI: RequiredParams<'name'>;
  /**
   * {​a​p​p​l​e​s​}​ ​a​p​p​l​e​{​{​s​}​}
   * @param {number} apples
   */
  APPLES: RequiredParams<'apples'>;
};

export type TranslationFunctions = {
  /**
   * Hi {name}!
   */
  HI: (arg: { name: string }) => LocalizedString;
  /**
   * {apples} apple{{s}}
   */
  APPLES: (arg: { apples: number }) => LocalizedString;
};

export type Formatters = {};