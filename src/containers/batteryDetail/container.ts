import {
  batteryDetailDictionary,
  wordsDescription,
} from '../../views/batteryDetail/words';
import {FC} from 'react';
import {compose} from 'redux';
import {injectI18n} from '../../i18n/inject';
import {batteryDetailProps} from './types';
import BatteryDetail from '../../views/batteryDetail/component';

const withI18n = injectI18n<wordsDescription>(batteryDetailDictionary.scope);

export const batteryDetailContainer =
  compose<FC<Partial<batteryDetailProps>>>(withI18n)(BatteryDetail);
