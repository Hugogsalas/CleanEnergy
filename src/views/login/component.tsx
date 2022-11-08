import React, {FC, useEffect, useState} from 'react';
import {
  Box,
  Text,
  Button,
  Input,
  Icon,
  Pressable,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {loginProps as Props} from '../../containers/login/types';
import {ImageBackground} from 'react-native';
import {Images} from '../../assets/images/images';
import styles from './styles';
import {useError} from '../../helpers/formik';
import {LOGIN_QUERY} from '../../services/auth/querys';
import {useLazyQuery} from '@apollo/client';
import Loader from '../../components/loader/component';
import {sha512} from 'js-sha512';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/paramList';

const Login: FC<Props> = ({
  write,
  errors,
  touched,
  handleBlur,
  handleChange,
  values,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const formError = useError(errors, touched);

  const changeShow = () => {
    setShowPassword(!showPassword);
  };

  const [loginConnect, {loading, data}] = useLazyQuery(LOGIN_QUERY);

  const loginUser = () => {
    const hashPassword = sha512(values.password);
    loginConnect({
      variables: {
        email: values.email,
        password: hashPassword,
      },
    });
  };

  useEffect(() => {
    const saveUser = async () => {
      await AsyncStorage.setItem('user', JSON.stringify(data.logIn));
      navigation.dispatch(StackActions.replace('Home'));
    };
    if (data && data.logIn) {
      saveUser();
    }
  }, [data, navigation]);

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={styles.background}
      source={Images.background}>
      {loading && <Loader />}
      <Box
        flex="1"
        alignItems="center"
        justifyContent="center"
        bgColor="rgba(0,0,0,0.5)">
        <Box flex="1" alignItems="center" justifyContent="center" w="80%">
          <FormControl
            isInvalid={formError('email')}
            w={{base: '100%', md: '400px', lg: '400px'}}
            marginBottom="20px">
            <FormControl.Label>{write('email')}</FormControl.Label>
            <Input
              size="lg"
              placeholder={write('emailInput')}
              w={{base: '100%', md: '400px', lg: '400px'}}
              variant="rounded"
              paddingLeft="25px"
              minHeight="50px"
              borderWidth="2px"
              keyboardType="email-address"
              borderColor="white"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              InputRightElement={
                <Icon
                  as={<VectorIcon name="user" />}
                  size="sm"
                  marginLeft="25px"
                  marginRight="25px"
                />
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.email}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formError('password')}
            w={{base: '100%', md: '400px', lg: '400px'}}
            marginBottom="20px">
            <FormControl.Label>{write('password')}</FormControl.Label>
            <Input
              placeholder={write('passwordInput')}
              w={{base: '100%', md: '400px', lg: '400px'}}
              size="lg"
              variant="rounded"
              type={showPassword ? 'text' : 'password'}
              paddingLeft="25px"
              minHeight="50px"
              borderWidth="2px"
              borderColor="white"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              InputRightElement={
                <Pressable onPress={changeShow}>
                  <Icon
                    as={
                      <VectorIcon name={showPassword ? 'eye' : 'eye-slash'} />
                    }
                    size="sm"
                    marginLeft="25px"
                    marginRight="25px"
                  />
                </Pressable>
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
        <Box
          w="100%"
          justifyItems="center"
          alignItems="center"
          marginBottom="40px">
          <Box
            w="70%"
            flexDirection={{base: 'column-reverse', md: 'row', lg: 'row'}}
            marginBottom="30px"
            justifyItems="center"
            alignItems="center"
            justifyContent="space-around">
            <Button
              w={{base: '100%', md: '200px', lg: '200px'}}
              size="lg"
              variant="solid">
              <Text fontSize="lg">{write('register')}</Text>
            </Button>
            <Button
              w={{base: '100%', md: '200px', lg: '200px'}}
              marginBottom={{base: '20px', md: '0px', lg: '0px'}}
              size="lg"
              variant="solid"
              onPress={() => loginUser()}>
              <Text fontSize="lg">{write('enter')}</Text>
            </Button>
          </Box>
          <Pressable>
            <Text>{write('forgotPassword')}</Text>
          </Pressable>
        </Box>
      </Box>
    </ImageBackground>
  );
};

export default Login;
