import {settingsProps} from '../containers/settings/types';
import {resumeProps} from '../containers/resume/types';
import {terminalProps} from 'src/containers/terminal/types';

export type bottomNavParamList = {
  Resume?: resumeProps;
  Settings?: settingsProps;
  Terminal?: terminalProps;
};
