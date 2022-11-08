import {dictionaryGenerator, viewDictionary} from '../../i18n/types';

export type wordsDescription = dictionaryGenerator<
  [
    'button1Title',
    'button2Title',
    'button3Title',
    'button4Title',
    'button1Description',
    'button2Description',
    'button3Description',
    'button4Description',
    'button1Description',
    'button2Description',
    'button3Description',
    'button4Description',
  ]
>;

export const settingsDictionary: viewDictionary<wordsDescription> = {
  scope: 'settings',
  en: {
    button1Title: 'ip address',
    button1Description:
      'Modify the ip address to connect to other device in the network.',
    button2Title: 'Clear storage',
    button2Description: 'Remove all the data in the storage.',
    button3Title: 'Theme',
    button3Description: 'Change the App theme.',
    button4Title: 'Batteries',
    button4Description: 'Add, delete or update the batteries information.',
  },
  es: {
    button1Title: 'Dirección IP',
    button1Description:
      'Modifica la dirección ip para poder conectarte a otro dispositivo en la red.',
    button2Title: 'Limpiar almacenamiento',
    button2Description:
      'Remueve todos los datos guardados en el almacenamiento de la app.',
    button3Title: 'Tema',
    button3Description: 'Cambia el tema con el cual visualizas la App.',
    button4Title: 'Baterías',
    button4Description:
      'Añade, borra o actualiza la información de las baterías.',
  },
};
