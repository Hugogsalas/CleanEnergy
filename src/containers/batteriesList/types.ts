import {wordsDescription} from '../../views/batteriesList/words';
import {write} from '../../i18n/types';
import {FormikProps} from 'formik';

export interface vanillaProps {}

export interface batteriesListState {}

export interface injectBatteriesListProps {}

export interface formUpdateBatteryValues {
  name: string;
  type: string;
}

export type batteriesListProps = batteriesListState &
  injectBatteriesListProps &
  vanillaProps &
  FormikProps<formUpdateBatteryValues> &
  write<wordsDescription>;
