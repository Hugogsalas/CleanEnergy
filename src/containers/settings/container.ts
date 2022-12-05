import {settingsDictionary, wordsDescription} from '../../views/settings/words';
import {FC} from 'react';
import {compose} from 'redux';
import {injectI18n} from '../../i18n/inject';
import {settingsProps} from './types';
import Settings from '../../views/settings/component';
import {injectFormik} from '../../formik/inject';
import {formikIPConfig} from '../../views/settings/form';

const withI18n = injectI18n<wordsDescription>(settingsDictionary.scope);

const withForm = injectFormik(formikIPConfig);

export const settingsContainer = compose<FC<Partial<settingsProps>>>(
  withI18n,
  withForm,
)(Settings);
