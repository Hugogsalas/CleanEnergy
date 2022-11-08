import {languageValues, viewDictionary, dictionaryGenerator} from './types';

export const create = (
  ...dictionaries: viewDictionary<dictionaryGenerator<string[]>>[]
) => {
  const dictionary = {};
  for (const language of languageValues) {
    dictionary[language] = {};
    for (const view of dictionaries) {
      dictionary[language][view.scope] = {};
      if (language in view) {
        for (const word of Object.keys(view[language])) {
          dictionary[language][view.scope][word] = view[language][word];
        }
      }
    }
  }
  return dictionary;
};
