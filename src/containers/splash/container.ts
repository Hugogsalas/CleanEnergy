import {splashDictionary, wordsDescription} from '../../views/splash/words';
import {FC} from 'react';
import {compose} from 'redux';
import {injectI18n} from '../../i18n/inject';
import {splashProps} from './types';
import Splash from '../../views/splash/component';

const withI18n = injectI18n<wordsDescription>(splashDictionary.scope);

export const splashContainer =
  compose<FC<Partial<splashProps>>>(withI18n)(Splash);
