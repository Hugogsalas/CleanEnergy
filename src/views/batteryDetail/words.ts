import {dictionaryGenerator, viewDictionary} from '../../i18n/types';

export type wordsDescription = dictionaryGenerator<
  [
    'welcome',
    'status',
    'percentage',
    'electrical',
    'winter',
    'sun',
    'batteryStatus',
  ]
>;

export const batteryDetailDictionary: viewDictionary<wordsDescription> = {
  scope: 'batteryDetail',
  en: {
    welcome: 'Welcome to your home energy manager.',
    status: 'Actual status: ',
    percentage: 'Percentages: ',
    electrical: 'Electric',
    winter: 'Winter',
    sun: 'Sun',
    batteryStatus: 'Batteries Status:  ',
  },
  es: {
    welcome: 'Bienvenido al panel de control de tu casa.',
    status: 'Estado actual: ',
    percentage: 'Porcentajes: ',
    electrical: 'CFE',
    winter: 'Viento',
    sun: 'Solar',
    batteryStatus: 'Estado de las baterias: ',
  },
};
