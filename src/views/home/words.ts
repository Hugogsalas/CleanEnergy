import {dictionaryGenerator, viewDictionary} from '../../i18n/types';

export type wordsDescription = dictionaryGenerator<
  ['resume', 'terminal', 'settings']
>;

export const homeDictionary: viewDictionary<wordsDescription> = {
  scope: 'home',
  en: {
    resume: 'Resume',
    terminal: 'Terminal',
    settings: 'Settings',
  },
  es: {
    resume: 'Inicio',
    terminal: 'Terminal',
    settings: 'Configuración',
  },
};
