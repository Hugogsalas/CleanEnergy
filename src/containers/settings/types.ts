import {wordsDescription} from '../../views/settings/words';
import {write} from '../../i18n/types';

export interface vanillaProps {}

export interface settingsState {}

export interface injectSettingsProps {}

export type settingsProps = settingsState &
  injectSettingsProps &
  vanillaProps &
  write<wordsDescription>;
