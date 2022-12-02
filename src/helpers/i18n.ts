import {resumeDictionary} from './../views/resume/words';
import {settingsDictionary} from './../views/settings/words';
import {splashDictionary} from './../views/splash/words';
import {homeDictionary} from '../views/home/words';
import {validationDictionary} from '../i18n/globalDictionaries/validation';
import {loginDictionary} from '../views/login/words';
import {terminalDictionary} from '../views/terminal/words';
import {batteryDetailDictionary} from '../views/batteryDetail/words';
import {create} from '../i18n/globalDictionary';
import {registerDictionary} from '../views/register/words';

export const createDictionary = () => {
  const globalDictionary = create(
    validationDictionary,
    homeDictionary,
    loginDictionary,
    splashDictionary,
    resumeDictionary,
    settingsDictionary,
    terminalDictionary,
    batteryDetailDictionary,
    registerDictionary,
  );

  return globalDictionary;
};
