import {wordsDescription} from '../../views/splash/words';
import {write} from '../../i18n/types';

export interface vanillaProps {}

export interface splashState {}

export interface injectSplashProps {
  setOpen: (visible: boolean) => void;
}

export type splashProps = splashState &
  injectSplashProps &
  vanillaProps &
  write<wordsDescription>;
