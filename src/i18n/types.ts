import {Concat} from '../utils/typesFeatures';
import {TranslateOptions} from 'i18n-js';

export const languageValues = ['es', 'en'] as const;

export type languagesAvailable = typeof languageValues[number];

export type languageDictionary<T extends dictionaryGenerator<string[]>> = {
  [k in languagesAvailable]: T;
};

export type viewDictionary<T extends dictionaryGenerator<string[]>> = {
  scope: string;
} & languageDictionary<T>;

export type dictionaryGenerator<T extends string[]> = {
  [k in T[number]]: string;
};

export type write<T extends dictionaryGenerator<string[]>> = {
  write: (word: keyof T, params?: TranslateOptions) => string;
};

export type writeGroup<
  T extends viewDictionary<dictionaryGenerator<string[]>>[],
> = {
  [name in Concat<'write', T[number]['scope']>]: write<
    T[number][languagesAvailable]
  >;
};
