import {loginDictionary, wordsDescription} from '../../views/login/words';
import {FC} from 'react';
import {compose} from 'redux';
import Login from '../../views/login/component';
import {injectI18n} from '../../i18n/inject';
import {loginProps} from './types';
import {injectFormik} from '../../formik/inject';
import {formikLogin} from '../../views/login/form';

const withI18n = injectI18n<wordsDescription>(loginDictionary.scope);

const withForm = injectFormik(formikLogin);

export const logInContainer = compose<FC<Partial<loginProps>>>(
  withI18n,
  withForm,
)(Login);
