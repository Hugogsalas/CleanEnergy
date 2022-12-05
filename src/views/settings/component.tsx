import React, {FC, useState} from 'react';
import {
  Box,
  Text,
  FlatList,
  Pressable,
  Icon,
  Switch,
  Modal,
  FormControl,
  Input,
  Button,
  WarningOutlineIcon,
} from 'native-base';
import {settingsProps as Props} from '../../containers/settings/types';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontTistoIcon from 'react-native-vector-icons/Fontisto';
import {hasNotch} from 'react-native-device-info';
import {SettingOption} from './types';
import {ListRenderItemInfo} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/paramList';
import {useError} from '../../helpers/formik';

const Settings: FC<Props> = ({
  write,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  const [showIPModal, setShowIPModal] = useState(false);
  const [showRemoveStorageModal, setShowRemoveStorageModal] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const formError = useError(errors, touched);
  const buttons: SettingOption[] = [
    {
      name: write('button1Title'),
      description: write('button1Description'),
      icon: <IonicIcon name="settings" />,
      iconSize: '6',
      action: () => setShowIPModal(true),
    },
    {
      name: write('button2Title'),
      description: write('button2Description'),
      icon: <FontAwesomeIcon name="database" />,
      iconSize: '6',
      action: () => setShowRemoveStorageModal(true),
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
      action: () => {
        navigation.dispatch(StackActions.replace('BatteriesList'));
      },
    },
  ];

  const handleIPConfig = () => {
    console.log('values', values);
  };

  const handleClearStorage = () => {
    console.log('clear');
  };

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
      <Modal isOpen={showIPModal} onClose={() => setShowIPModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{write('IPModalHeader')}</Modal.Header>
          <Modal.Body>
            <FormControl isInvalid={formError('ip')}>
              <FormControl.Label>{write('button1Title')}</FormControl.Label>
              <Input
                value={values.ip || ''}
                onChangeText={handleChange('ip')}
                onBlur={handleBlur('ip')}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.ip}
              </FormControl.ErrorMessage>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowIPModal(false);
                }}>
                {write('cancel')}
              </Button>
              <Button
                onPress={() => {
                  handleIPConfig();
                }}>
                {write('confirm')}
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={showRemoveStorageModal}
        onClose={() => setShowRemoveStorageModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{write('clearStorageHeader')}</Modal.Header>
          <Modal.Body>
            <Text>{write('clearStorageMessage')}</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowRemoveStorageModal(false);
                }}>
                {write('cancel')}
              </Button>
              <Button
                onPress={() => {
                  handleClearStorage();
                }}>
                {write('confirm')}
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default Settings;
