import {wordsDescription} from '../../views/login/words';
import {write} from '../../i18n/types';
import {FormikProps} from 'formik';

export interface vanillaProps {}

export interface loginState {}

export interface injectLoginProps {}

export interface formLoginValues {
  email: string;
  password: string;
}

export type loginProps = loginState &
  injectLoginProps &
  vanillaProps &
  FormikProps<formLoginValues> &
  write<wordsDescription>;
