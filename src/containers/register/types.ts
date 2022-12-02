import {wordsDescription} from '../../views/register/words';
import {write} from '../../i18n/types';
import {FormikProps} from 'formik';

export interface vanillaProps {}

export interface registerState {}

export interface injectRegisterProps {}

export interface formRegisterValues {
  name: string;
  email: string;
  password: string;
  address?: string;
  lastName?: string;
  phone?: string;
  secondLastName?: string;
}

export type registerProps = registerState &
  injectRegisterProps &
  vanillaProps &
  FormikProps<formRegisterValues> &
  write<wordsDescription>;
