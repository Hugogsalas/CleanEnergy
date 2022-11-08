import {writeValidation} from '../../i18n/globalDictionaries/validation';
import {object, SchemaOf, string} from 'yup';
import {
  formLoginValues as formValues,
  loginProps as props,
} from '../../containers/login/types';
import {FormikWithProps} from '../../formik/types';

export const loginSchema = (): SchemaOf<formValues> =>
  object()
    .shape({
      email: string()
        .defined(writeValidation('defined'))
        .required(writeValidation('require'))
        .email(writeValidation('invalidEmail')),
      password: string()
        .defined(writeValidation('defined'))
        .required(writeValidation('require'))
        .min(8, writeValidation('shortPassword', {minPassword: 8}))
        .max(16, writeValidation('longPassword', {maxPassword: 16})),
    })
    .defined();

export const initialLogin: formValues = {
  email: '',
  password: '',
};

export const formikLogin: FormikWithProps<formValues, props> = {
  initialValues: initialLogin,
  enableReinitialize: true,
  validationSchema: loginSchema,
};
