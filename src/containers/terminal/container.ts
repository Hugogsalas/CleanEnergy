import {terminalDictionary, wordsDescription} from '../../views/terminal/words';
import {FC} from 'react';
import {compose} from 'redux';
import {injectI18n} from '../../i18n/inject';
import {terminalProps} from './types';
import Terminal from '../../views/terminal/component';

const withI18n = injectI18n<wordsDescription>(terminalDictionary.scope);

export const terminalContainer =
  compose<FC<Partial<terminalProps>>>(withI18n)(Terminal);
