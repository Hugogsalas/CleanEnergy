import React, {FC, useState} from 'react';
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
import {Battery} from '../../models/battery';
import {useError} from '../../helpers/formik';
const data: Battery[] = [
  {
    _id: '1',
    name: 'LTH',
    type: 'plomo',
  },
  {
    _id: '2',
    name: 'Duracell',
    type: 'litio',
  },
  {
    _id: '3',
    name: 'Energizer',
    type: 'fósforo',
  },
];
const BatteriesList: FC<Props> = ({
  write,
  values,
  initialValues,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [actionBattery, setActionBattery] = useState<Battery>();

  const formError = useError(errors, touched);

  const confirmDelete = (battery: Battery) => {
    setActionBattery(battery);
    setShowDeleteModal(true);
  };

  const handleUpdate = (battery: Battery) => {
    setShowUpdateModal(true);
    initialValues.name = battery.name || '';
    initialValues.type = battery.type || '';
  };

  const updateBattery = () => {
    console.log('values', values);
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
    console.log('delete', actionBattery?._id);
  };
  return (
    <Box bg="white" flex="1" paddingTop="1" paddingLeft="1">
      <Pressable onPress={() => navigate('Home', {menu: 'Settings'})}>
        <Icon as={<Ionicons name="arrow-back" />} color="black" />
      </Pressable>
      {data.map(battery => (
        <Box
          w="100%"
          height="80px"
          flexDirection="row"
          padding="3"
          borderBottomColor="black"
          borderBottomWidth="1"
          alignItems="center">
          <Box w="90%">
            <Text color="black">{battery.name}</Text>
            <Text color="black">{battery.type}</Text>
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
              <Menu.Item onPress={() => confirmDelete(battery)}>
                {write('delete')}
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
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{write('delete').toUpperCase()}</Modal.Header>
          <Modal.Body>
            <Text>{write('confirmMessage')}</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowDeleteModal(false);
                }}>
                {write('cancel')}
              </Button>
              <Button
                onPress={() => {
                  handleDelete();
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

export default BatteriesList;
