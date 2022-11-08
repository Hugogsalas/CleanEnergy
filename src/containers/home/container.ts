import {homeDictionary, wordsDescription} from '../../views/home/words';
import {FC} from 'react';
import {compose} from 'redux';
import {injectI18n} from '../../i18n/inject';
import {homeProps} from './types';
import Home from '../../views/home/component';

const withI18n = injectI18n<wordsDescription>(homeDictionary.scope);

export const homeContainer = compose<FC<Partial<homeProps>>>(withI18n)(Home);
