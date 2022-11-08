import React, {FC, useEffect, useState} from 'react';
import {Box} from 'native-base';
import {splashProps as Props} from '../../containers/splash/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/paramList';
import Loader from '../../components/loader/component';

const Splash: FC<Props> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [userInApp, setUserInApp] = useState<string | null>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const getUser = async () => {
      setUserInApp(await AsyncStorage.getItem('user'));
      setLoading(false);
    };

    getUser();
  }, []);

  useEffect(() => {
    if (!loading) {
      const destiny = userInApp ? 'Home' : 'Login';
      console.log(destiny);
      navigation.dispatch(StackActions.replace(destiny));
    }
  }, [loading, userInApp, navigation]);

  return (
    <Box flex="1" alignItems="center" justifyContent="center" bg="primary.900">
      <Loader />
    </Box>
  );
};

export default Splash;
