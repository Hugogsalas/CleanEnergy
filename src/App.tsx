import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import I18n from 'i18n-js';
import {getActualLanguage} from './helpers/language';
import {createDictionary} from './helpers/i18n';
import {homeContainer as Home} from './containers/home/container';
import {logInContainer as Login} from './containers/login/container';
import {splashContainer as Splash} from './containers/splash/container';
import {batteryDetailContainer as BatteryDetail} from './containers/batteryDetail/container';
import {registerContainer as Register} from './containers/register/container';
import {batteriesListContainer as BatteriesList} from './containers/batteriesList/container';
import {RootStackParamList} from './router/paramList';
import {NativeBaseProvider} from 'native-base';
import theme from './theme/theme';
import {navigationRef} from './utils/navigation';
import {ApolloProvider} from '@apollo/client';
import {useClient} from './helpers/cachePersist';

const Stack = createNativeStackNavigator<RootStackParamList>();

I18n.fallbacks = true;
I18n.locale = getActualLanguage();
I18n.translations = createDictionary();

const App = () => {
  const [client] = useClient();

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Splash">
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="BatteryDetail" component={BatteryDetail} />
              <Stack.Screen name="BatteriesList" component={BatteriesList} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
