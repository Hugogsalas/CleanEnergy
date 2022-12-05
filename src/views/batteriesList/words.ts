import {dictionaryGenerator, viewDictionary} from '../../i18n/types';

export type wordsDescription = dictionaryGenerator<
  ['update', 'delete', 'confirmMessage', 'cancel', 'confirm', 'name', 'type']
>;

export const batteriesListDictionary: viewDictionary<wordsDescription> = {
  scope: 'batteriesList',
  en: {
    update: 'Update',
    delete: 'Delete',
    confirmMessage: 'Are you sure you want to delete this battery?',
    cancel: 'Cancel',
    confirm: 'confirm',
    name: 'Name',
    type: 'Type',
  },
  es: {
    update: 'Actualizar',
    delete: 'Borrar',
    confirmMessage: '¿Estás seguro que quieres borrar la batería?',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    name: 'Nombre',
    type: 'Tipo',
  },
};
