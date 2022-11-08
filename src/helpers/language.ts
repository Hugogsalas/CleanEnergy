import {getLocales} from 'react-native-localize';
import {languagesAvailable} from '../i18n/types';

export const getActualLanguage = (): languagesAvailable => {
  const realLanguage = getLocales()[0].languageCode;
  const i18nLanguage = realLanguage.replace(/-.*/, '');
  switch (i18nLanguage) {
    case 'es':
      return i18nLanguage;
    case 'en':
      return i18nLanguage;
    default:
      return 'es';
  }
};
