import {Formik, FormikConfig} from 'formik';
import React, {FC} from 'react';
import {FormikWithProps} from './types';

export const injectFormik =
  <Values, ComponentProps>(config: FormikWithProps<Values, ComponentProps>) =>
  (BaseCompent: FC<ComponentProps>) =>
  (props: ComponentProps) => {
    const FormConfig: FormikConfig<Values> = {
      ...config,
      onSubmit: values => config.onSubmit(values, props),
    };
    return (
      <Formik {...FormConfig}>
        {formikProps => <BaseCompent {...props} {...formikProps} />}
      </Formik>
    );
  };
