import {writeValidation} from '../../i18n/globalDictionaries/validation';
import {object, SchemaOf, string} from 'yup';
import {
  formRegisterValues as formValues,
  registerProps as props,
} from '../../containers/register/types';
import {FormikWithProps} from '../../formik/types';

export const registerSchema = (): SchemaOf<formValues> =>
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
      name: string()
        .required(writeValidation('require'))
        .defined(writeValidation('defined')),
    })
    .defined();

export const initialRegister: formValues = {
  email: '',
  password: '',
  name: '',
  address: '',
  lastName: '',
  phone: '',
  secondLastName: '',
};

export const formikRegister: FormikWithProps<formValues, props> = {
  initialValues: initialRegister,
  enableReinitialize: true,
  validationSchema: registerSchema,
};
