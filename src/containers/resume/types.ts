import {wordsDescription} from '../../views/resume/words';
import {write} from '../../i18n/types';

export interface vanillaProps {}

export interface resumeState {}

export interface injectResumeProps {}

export type resumeProps = resumeState &
  injectResumeProps &
  vanillaProps &
  write<wordsDescription>;
