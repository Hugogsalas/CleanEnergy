import {wordsDescription} from '../../views/terminal/words';
import {write} from '../../i18n/types';

export interface vanillaProps {}

export interface terminalState {}

export interface injectTerminalProps {}

export type terminalProps = terminalState &
  injectTerminalProps &
  vanillaProps &
  write<wordsDescription>;
