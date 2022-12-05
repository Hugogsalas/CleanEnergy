import {
  batteriesListDictionary,
  wordsDescription,
} from '../../views/batteriesList/words';
import {FC} from 'react';
import {compose} from 'redux';
import {injectI18n} from '../../i18n/inject';
import {batteriesListProps} from './types';
import BatteriesList from '../../views/batteriesList/component';
import {injectFormik} from '../../formik/inject';
import {formikUpdateBattery} from '../../views/batteriesList/form';

const withI18n = injectI18n<wordsDescription>(batteriesListDictionary.scope);

const withForm = injectFormik(formikUpdateBattery);

export const batteriesListContainer = compose<FC<Partial<batteriesListProps>>>(
  withI18n,
  withForm,
)(BatteriesList);
