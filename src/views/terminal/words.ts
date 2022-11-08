import {dictionaryGenerator, viewDictionary} from '../../i18n/types';

export type wordsDescription = dictionaryGenerator<['title']>;

export const terminalDictionary: viewDictionary<wordsDescription> = {
  scope: 'terminal',
  en: {
    title: 'Loading',
  },
  es: {
    title: 'Cargando',
  },
};
