import {TranslateOptions} from 'i18n-js';
import {Message} from '../inject';
import {dictionaryGenerator} from '../types';
import {generalDictionary} from './types';

export type dictValidation = dictionaryGenerator<
  [
    'invalidEmail',
    'shortPassword',
    'longPassword',
    'require',
    'equalPassword',
    'shortUserName',
    'longUserName',
    'withoutSpacesUserName',
    'defined',
  ]
>;

export const validationDictionary: generalDictionary<
  dictValidation,
  'validation'
> = {
  scope: 'validation',
  en: {
    invalidEmail: 'Write a valid email',
    shortPassword: 'Write at least %{minPassword} characters in your password',
    longPassword: 'Write at most %{maxPassword} characters in your password',
    require: 'This field is required',
    equalPassword: 'Passwords must match',
    shortUserName: 'Write at least %{minUserName} characters in your User Name',
    longUserName: 'Write at most %{maxUserName} characters in your User Name',
    withoutSpacesUserName: "The user name can't have white spaces",
    defined: 'This field have to be defined',
  },
  es: {
    invalidEmail: 'Escribe un email valido',
    shortPassword:
      'Escribe como mínimo %{minPassword} caracteres en tu contraseña',
    longPassword:
      'Escribe como máximo %{maxPassword} caracteres en tu contraseña',
    require: 'Este campo es requerido',
    equalPassword: 'Las contraseñas deben de coincidir',
    shortUserName:
      'Escribe como mínimo %{minPassword} caracteres en tu nombre de usuario',
    longUserName:
      'Escribe como máximo %{maxPassword} caracteres en tu nombre de usuario',
    withoutSpacesUserName:
      'El nombre de usuario no puede tener espacios en blanco',
    defined: 'Este campo debe estar definido',
  },
};

export const writeValidation = (
  word: keyof dictValidation,
  params?: TranslateOptions,
) => {
  return Message<dictValidation>('validation', word, params);
};
