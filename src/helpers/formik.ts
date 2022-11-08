import {FormikErrors, FormikTouched} from 'formik';

export const useError = <T>(
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
) => {
  return (field: keyof T) => errors[field] && touched[field];
};
