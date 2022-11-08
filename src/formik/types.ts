import {FormikConfig} from 'formik';

export type SubmitAction<Values, ComponentProps> = (
  values: Values,
  props: ComponentProps,
) => void;

export type SubmitWithProps<Values, ComponentProps> = {
  onSubmit?: SubmitAction<Values, ComponentProps>;
};

export type FormikWithProps<Values, ComponentProps> = Omit<
  FormikConfig<Values>,
  'onSubmit'
> &
  SubmitWithProps<Values, ComponentProps>;
