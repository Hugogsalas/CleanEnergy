import {dictionaryGenerator, viewDictionary} from '../../i18n/types';

export type wordsDescription = dictionaryGenerator<['title']>;

export const splashDictionary: viewDictionary<wordsDescription> = {
  scope: 'splash',
  en: {
    title: 'Loading',
  },
  es: {
    title: 'Cargando',
  },
};
