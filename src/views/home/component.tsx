import React, {FC} from 'react';
import {homeProps as Props} from '../../containers/home/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomNavParamList} from '../../router/bottomNavList';
import {resumeContainer as Resume} from '../../containers/resume/container';
import {settingsContainer as Settings} from '../../containers/settings/container';
import {terminalContainer as Terminal} from '../../containers/terminal/container';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {Icon} from 'native-base';

const Tab = createBottomTabNavigator<bottomNavParamList>();

const Home: FC<Props> = ({write}) => {
  const iconsProps = {
    iconSize: '6',
  };

  return (
    <Tab.Navigator
      initialRouteName="Resume"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Resume"
        component={Resume}
        options={{
          tabBarLabel: write('resume'),
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon
                margin="3"
                as={<MaterialIcon name="menu-book" />}
                size={iconsProps.iconSize}
                color="primary.900"
              />
            ) : (
              <Icon
                margin="3"
                as={<MaterialIcon name="menu-book" />}
                size={iconsProps.iconSize}
                color="gray.500"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Terminal"
        component={Terminal}
        options={{
          tabBarLabel: write('terminal'),
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon
                margin="3"
                as={<IonicIcon name="terminal" />}
                size={iconsProps.iconSize}
                color="primary.900"
              />
            ) : (
              <Icon
                margin="3"
                as={<IonicIcon name="terminal" />}
                size={iconsProps.iconSize}
                color="gray.500"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: write('settings'),
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon
                margin="3"
                as={<MaterialIcon name="settings" />}
                size={iconsProps.iconSize}
                color="primary.900"
              />
            ) : (
              <Icon
                margin="3"
                as={<MaterialIcon name="settings" />}
                size={iconsProps.iconSize}
                color="gray.500"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
