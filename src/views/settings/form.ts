import {writeValidation} from '../../i18n/globalDictionaries/validation';
import {object, SchemaOf, string} from 'yup';
import {
  formIPConfigValues as formValues,
  injectSettingsProps as props,
} from '../../containers/settings/types';
import {FormikWithProps} from '../../formik/types';

export const IPConfigSchema = (): SchemaOf<formValues> =>
  object()
    .shape({
      ip: string()
        .required(writeValidation('require'))
        .defined(writeValidation('defined'))
        .matches(
          /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/,
          writeValidation('invalidValue'),
        ),
    })
    .defined();

export const initialLogin: formValues = {
  ip: '',
};

export const formikIPConfig: FormikWithProps<formValues, props> = {
  initialValues: initialLogin,
  enableReinitialize: true,
  validationSchema: IPConfigSchema,
};
