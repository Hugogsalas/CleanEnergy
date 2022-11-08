import {wordsDescription} from '../../views/home/words';
import {write} from '../../i18n/types';

export interface vanillaProps {}

export interface homeState {}

export interface injectHomeProps {}

export type homeProps = homeState &
  injectHomeProps &
  vanillaProps &
  write<wordsDescription>;
