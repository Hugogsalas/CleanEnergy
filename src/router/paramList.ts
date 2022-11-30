import {batteryDetailProps} from './../containers/batteryDetail/types';
import {loginProps} from '../containers/login/types';
import {homeProps} from '../containers/home/types';
import {splashProps} from '../containers/splash/types';
import {registerProps} from 'src/containers/register/types';

export type RootStackParamList = {
  Home?: homeProps;
  Login?: loginProps;
  Splash?: splashProps;
  BatteryDetail?: batteryDetailProps;
  Register: registerProps;
};
