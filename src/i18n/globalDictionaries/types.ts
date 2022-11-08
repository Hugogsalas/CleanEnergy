import {
  languageDictionary,
  dictionaryGenerator,
  languagesAvailable,
} from '../types';
import {validationDictionary} from './validation';
import {Concat} from '../../utils/typesFeatures';
import {TranslateOptions} from 'i18n-js';

export type generalDictionary<T extends dictionaryGenerator<string[]>, R> = {
  scope: R;
} & languageDictionary<T>;

export const generalDictsAvailable = [validationDictionary];

export type allGeneralDicts = typeof generalDictsAvailable[number];

export type generalDicts<
  T extends generalDictionary<dictionaryGenerator<string[]>, string>[],
> = {
  [K in Concat<'write', T[number]['scope']>]: (
    word: keyof T[number][languagesAvailable],
    params?: TranslateOptions,
  ) => string;
};
