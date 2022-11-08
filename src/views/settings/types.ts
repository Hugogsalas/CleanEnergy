import {ResponsiveValue} from 'native-base/lib/typescript/components/types';
import {ISizes} from 'native-base/lib/typescript/theme/base/sizes';

export interface SettingOption {
  name: string;
  description: string;
  icon: JSX.Element;
  iconSize: ResponsiveValue<ISizes | (string & {}) | number>;
  action?: () => void;
  control?: JSX.Element;
}
