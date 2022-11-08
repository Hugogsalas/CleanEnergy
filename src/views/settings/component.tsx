import React, {FC} from 'react';
import {Box, Text, FlatList, Pressable, Icon, Switch} from 'native-base';
import {settingsProps as Props} from '../../containers/settings/types';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontTistoIcon from 'react-native-vector-icons/Fontisto';
import {hasNotch} from 'react-native-device-info';
import {SettingOption} from './types';
import {ListRenderItemInfo} from 'react-native';

const Settings: FC<Props> = ({write}) => {
  const buttons: SettingOption[] = [
    {
      name: write('button1Title'),
      description: write('button1Description'),
      icon: <IonicIcon name="settings" />,
      iconSize: '6',
      action: () => {},
    },
    {
      name: write('button2Title'),
      description: write('button2Description'),
      icon: <FontAwesomeIcon name="database" />,
      iconSize: '6',
      action: () => {},
    },
    {
      name: write('button3Title'),
      description: write('button3Description'),
      icon: <MaterialCommunityIcon name="theme-light-dark" />,
      iconSize: '6',
      control: <Switch value={true} />,
    },
    {
      name: write('button4Title'),
      description: write('button4Description'),
      icon: <FontTistoIcon name="battery-full" />,
      iconSize: '6',
      action: () => {},
    },
  ];

  console.log(hasNotch());

  const selectContainer = ({
    item,
  }: ListRenderItemInfo<SettingOption>): JSX.Element => {
    return item.action ? (
      <Pressable
        w="100%"
        height="80px"
        alignItems="center"
        padding="3"
        borderBottomColor="black"
        flexDirection="row"
        onPress={item.action}
        borderBottomWidth="1">
        <Icon margin="5" as={item.icon} size={item.iconSize} color="black" />
        <Box>
          <Text color="black" bold>
            {item.name}
          </Text>
          <Text color="gray.700" textAlign="justify" maxW="400px">
            {item.description}
          </Text>
        </Box>
      </Pressable>
    ) : (
      <Box
        w="100%"
        height="80px"
        alignItems="center"
        padding="3"
        borderBottomColor="black"
        flexDirection="row"
        borderBottomWidth="1">
        <Icon margin="5" as={item.icon} size={item.iconSize} color="black" />
        <Box>
          <Text color="black" bold>
            {item.name}
          </Text>
          <Text color="gray.700" textAlign="justify" maxW="400px">
            {item.description}
          </Text>
        </Box>
        <Box
          flex="1"
          height="100%"
          alignItems="flex-end"
          justifyContent="center"
          size="lg"
          paddingRight="3">
          {item.control}
        </Box>
      </Box>
    );
  };

  return (
    <Box flex="1" alignItems="center" justifyContent="center" bg="white">
      <FlatList
        w="100%"
        data={buttons}
        scrollEnabled={false}
        renderItem={selectContainer}
      />
    </Box>
  );
};

export default Settings;
