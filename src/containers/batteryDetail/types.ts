import {wordsDescription} from '../../views/batteryDetail/words';
import {write} from '../../i18n/types';

export interface vanillaProps {}

export interface batteryDetailState {}

export interface injectBatteryDetailProps {
  route: {
    params: {
      battery: string;
    };
  };
}

export type batteryDetailProps = batteryDetailState &
  injectBatteryDetailProps &
  vanillaProps &
  write<wordsDescription>;
