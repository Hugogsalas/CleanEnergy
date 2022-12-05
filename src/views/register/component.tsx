import React, {FC, useEffect, useState} from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import {Images} from '../../assets/images/images';
import {registerProps as Props} from '../../containers/register/types';
import styles from './styles';
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Pressable,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import {useError} from '../../helpers/formik';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {sha512} from 'js-sha512';
import {useMutation} from '@apollo/client';
import {REGISTER_QUERY} from '../../services/auth/querys';
import Loader from '../../components/loader/component';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/router/paramList';

const Register: FC<Props> = ({
  write,
  errors,
  touched,
  handleBlur,
  handleChange,
  values,
}) => {
  const formError = useError(errors, touched);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const windowWidth = Dimensions.get('window').width;

  const [registerConnect, {loading, data}] = useMutation(REGISTER_QUERY);

  const changeShow = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = () => {
    const hashPassword = sha512(values.password);
    registerConnect({
      variables: {
        email: values.email,
        password: hashPassword,
        name: values.name,
        lastName: values.lastName,
        secondLastName: values.secondLastName,
        phone: values.phone,
        address: values.address,
      },
    });
  };

  useEffect(() => {
    if (data?.signIn) {
      navigation.dispatch(StackActions.replace('Login'));
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
        <Box flexDirection={{base: 'column', md: 'row', lg: 'row'}}>
          <Box
            flexDirection="column"
            marginRight={windowWidth > 800 ? '20px' : '0px'}>
            <FormControl
              isInvalid={formError('name')}
              w={{base: '100%', md: '400px', lg: '400px'}}
              marginBottom="20px">
              <FormControl.Label>{write('name')}</FormControl.Label>
              <Input
                size="lg"
                placeholder={write('nameInput')}
                w={{base: '100%', md: '400px', lg: '400px'}}
                variant="rounded"
                paddingLeft="25px"
                minHeight="50px"
                borderWidth="2px"
                borderColor="white"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.name}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formError('lastName')}
              w={{base: '100%', md: '400px', lg: '400px'}}
              marginBottom="20px">
              <FormControl.Label>{write('lastName')}</FormControl.Label>
              <Input
                size="lg"
                placeholder={write('lastNameInput')}
                w={{base: '100%', md: '400px', lg: '400px'}}
                variant="rounded"
                paddingLeft="25px"
                minHeight="50px"
                borderWidth="2px"
                borderColor="white"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
              />
            </FormControl>
            <FormControl
              isInvalid={formError('secondLastName')}
              w={{base: '100%', md: '400px', lg: '400px'}}
              marginBottom="20px">
              <FormControl.Label>{write('secondLastName')}</FormControl.Label>
              <Input
                size="lg"
                placeholder={write('secondLastNameInput')}
                w={{base: '100%', md: '400px', lg: '400px'}}
                variant="rounded"
                paddingLeft="25px"
                minHeight="50px"
                borderWidth="2px"
                borderColor="white"
                onChangeText={handleChange('secondLastName')}
                onBlur={handleBlur('secondLastName')}
              />
            </FormControl>
          </Box>
          <Box flexDirection="column">
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
              isInvalid={formError('phone')}
              w={{base: '100%', md: '400px', lg: '400px'}}
              marginBottom="20px">
              <FormControl.Label>{write('phone')}</FormControl.Label>
              <Input
                size="lg"
                placeholder={write('phoneInput')}
                w={{base: '100%', md: '400px', lg: '400px'}}
                variant="rounded"
                paddingLeft="25px"
                minHeight="50px"
                borderWidth="2px"
                borderColor="white"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
              />
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
              variant="solid"
              onPress={() =>
                navigation.dispatch(StackActions.replace('Login'))
              }>
              <Text fontSize="lg">{write('back')}</Text>
            </Button>
            <Button
              w={{base: '100%', md: '200px', lg: '200px'}}
              size="lg"
              variant="solid"
              marginBottom={{base: '20px', md: '0px', lg: '0px'}}
              onPress={() => registerUser()}>
              <Text fontSize="lg">{write('register')}</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </ImageBackground>
  );
};

export default Register;
