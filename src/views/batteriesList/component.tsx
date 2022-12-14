import React, {FC, useEffect, useState} from 'react';
import {batteriesListProps as Props} from '../../containers/batteriesList/types';
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Menu,
  Modal,
  Pressable,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../utils/navigation';
import {useError} from '../../helpers/formik';
import {SafeAreaView} from 'react-native';
import {
  GET_BATTERIES_QUERY,
  UPDATE_BATTERIES_QUERY,
} from '../../services/auth/querys';
import {useLazyQuery, useMutation} from '@apollo/client';
import styles from './styles';
import {Battery} from 'src/models/battery';

const BatteriesList: FC<Props> = ({
  write,
  values,
  initialValues,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [batteryConnect, {data}] = useLazyQuery(GET_BATTERIES_QUERY);

  const [updateBatteryConnect, response] = useMutation(UPDATE_BATTERIES_QUERY);

  useEffect(() => {
    batteryConnect();
  }, [batteryConnect]);

  const formError = useError(errors, touched);

  const handleUpdate = (battery: any) => {
    setShowUpdateModal(true);
    initialValues.name = battery.name || '';
    initialValues.type = battery.Type || '';
  };

  const updateBattery = () => {
    updateBatteryConnect({
      variables: {
        name: values.name,
        Type: values.type,
        voltages: [2, 3, 4],
        _id: data?.getBatteryList?.[0]._id,
      },
    });
  };

  useEffect(() => {
    if (response.data?.updateBattery && !response.loading) {
      batteryConnect();
      setShowUpdateModal(false);
    }
  }, [response.data, response.loading, batteryConnect]);

  return (
    <SafeAreaView style={styles.saveAreaView}>
      <Pressable onPress={() => navigate('Home', {menu: 'Settings'})}>
        <Icon as={<Ionicons name="arrow-back" />} color="black" />
      </Pressable>
      {data?.getBatteryList?.map((battery: Battery) => (
        <Box
          key={battery._id}
          w="100%"
          height="80px"
          flexDirection="row"
          padding="3"
          borderBottomColor="black"
          borderBottomWidth="1"
          alignItems="center">
          <Box w="90%">
            <Text color="black">{battery.name}</Text>
            <Text color="black">{battery.Type}</Text>
          </Box>
          <Box w="10%" alignItems="center">
            <Menu
              placement="left bottom"
              trigger={triggerProps => {
                return (
                  <Pressable {...triggerProps}>
                    <Icon
                      as={<Entypo name="dots-three-vertical" />}
                      color="black"
                    />
                  </Pressable>
                );
              }}>
              <Menu.Item onPress={() => handleUpdate(battery)}>
                {write('update')}
              </Menu.Item>
            </Menu>
          </Box>
        </Box>
      ))}
      <Modal isOpen={showUpdateModal} onClose={() => setShowUpdateModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{write('update').toUpperCase()}</Modal.Header>
          <Modal.Body>
            <FormControl isInvalid={formError('name')}>
              <FormControl.Label>{write('name')}</FormControl.Label>
              <Input
                value={values?.name || ''}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.name}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={formError('type')} marginTop="3">
              <FormControl.Label>{write('type')}</FormControl.Label>
              <Input
                value={values?.type || ''}
                onChangeText={handleChange('type')}
                onBlur={handleBlur('type')}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors.type}
              </FormControl.ErrorMessage>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowUpdateModal(false);
                }}>
                {write('cancel')}
              </Button>
              <Button
                onPress={() => {
                  updateBattery();
                }}>
                {write('confirm')}
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

export default BatteriesList;
