import {dictionaryGenerator, viewDictionary} from '../../i18n/types';

export type wordsDescription = dictionaryGenerator<
  [
    'email',
    'emailInput',
    'password',
    'passwordInput',
    'forgotPassword',
    'enter',
    'register',
  ]
>;

export const loginDictionary: viewDictionary<wordsDescription> = {
  scope: 'login',
  en: {
    email: 'Email',
    emailInput: 'Enter email',
    password: 'Password',
    passwordInput: 'Enter password',
    forgotPassword: 'Forgot password?',
    enter: 'Enter',
    register: 'Register',
  },
  es: {
    email: 'Email',
    emailInput: 'Ingresa tu email',
    password: 'Contraseña',
    passwordInput: 'Ingresa tu contraseña',
    forgotPassword: '¿Olvidaste tu contraseña?',
    enter: 'Entrar',
    register: 'Registrarse',
  },
};
