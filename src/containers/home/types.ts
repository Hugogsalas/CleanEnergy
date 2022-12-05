import {wordsDescription} from '../../views/home/words';
import {write} from '../../i18n/types';
import {bottomNavParamList} from 'src/router/bottomNavList';

export interface vanillaProps {}

export interface homeState {}

export interface injectHomeProps {
  route: {
    params: {
      menu: bottomNavParamList;
    };
  };
}

export type homeProps = homeState &
  injectHomeProps &
  vanillaProps &
  write<wordsDescription>;
