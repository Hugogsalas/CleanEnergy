import {writeValidation} from '../../i18n/globalDictionaries/validation';
import {object, SchemaOf, string} from 'yup';
import {FormikWithProps} from '../../formik/types';
import {
  formUpdateBatteryValues as formValues,
  batteriesListProps as props,
} from '../../containers/batteriesList/types';

export const updateBatterySchema = (): SchemaOf<formValues> =>
  object()
    .shape({
      name: string()
        .required(writeValidation('require'))
        .defined(writeValidation('defined')),
      type: string()
        .required(writeValidation('require'))
        .defined(writeValidation('defined')),
    })
    .defined();

export const initialLogin: formValues = {
  name: '',
  type: '',
};

export const formikUpdateBattery: FormikWithProps<formValues, props> = {
  initialValues: initialLogin,
  enableReinitialize: true,
  validationSchema: updateBatterySchema,
};
