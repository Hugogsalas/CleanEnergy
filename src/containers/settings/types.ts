import {wordsDescription} from '../../views/settings/words';
import {write} from '../../i18n/types';
import {FormikProps} from 'formik';

export interface vanillaProps {}

export interface settingsState {}

export interface injectSettingsProps {}
export interface formIPConfigValues {
  ip: string;
}

export type settingsProps = settingsState &
  injectSettingsProps &
  vanillaProps &
  FormikProps<formIPConfigValues> &
  write<wordsDescription>;
