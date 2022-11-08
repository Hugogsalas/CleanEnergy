import React from 'react';
import {TranslateOptions, t} from 'i18n-js';
import {FC} from 'react';
import {dictionaryGenerator, write} from './types';

export const Message = <T extends dictionaryGenerator<string[]>>(
  scope: string,
  word: keyof T,
  params?: TranslateOptions,
) => t(`${scope}.${word}`, params);

export const injectI18n =
  <T extends dictionaryGenerator<string[]>>(scope: string) =>
  (BaseComponent: FC<write<T>>) =>
  (props: object) =>
    (
      <BaseComponent
        {...props}
        write={(word: keyof T, params?: TranslateOptions) =>
          Message<T>(scope, word, params)
        }
      />
    );
