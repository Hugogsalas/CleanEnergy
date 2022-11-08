import {NavigationContainerRef} from '@react-navigation/core';
import {createRef} from 'react';
import {RootStackParamList} from '../router/paramList';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export const navigate = (name: keyof RootStackParamList, params) => {
  navigationRef.current?.navigate(name, params);
};
