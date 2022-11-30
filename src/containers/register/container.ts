import {registerDictionary, wordsDescription} from '../../views/register/words';
import {FC} from 'react';
import {compose} from 'redux';
import Register from '../../views/register/component';
import {injectI18n} from '../../i18n/inject';
import {registerProps} from './types';
import {injectFormik} from '../../formik/inject';
import {formikRegister} from '../../views/register/form';

const withI18n = injectI18n<wordsDescription>(registerDictionary.scope);

const withForm = injectFormik(formikRegister);

export const registerContainer = compose<FC<Partial<registerProps>>>(
  withI18n,
  withForm,
)(Register);
