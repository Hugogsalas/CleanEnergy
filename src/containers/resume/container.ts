import {resumeDictionary, wordsDescription} from '../../views/resume/words';
import {FC} from 'react';
import {compose} from 'redux';
import {injectI18n} from '../../i18n/inject';
import {resumeProps} from './types';
import Resume from '../../views/resume/component';

const withI18n = injectI18n<wordsDescription>(resumeDictionary.scope);

export const resumeContainer =
  compose<FC<Partial<resumeProps>>>(withI18n)(Resume);
