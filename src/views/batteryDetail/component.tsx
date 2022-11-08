import React, {FC, useEffect} from 'react';
import {Box, ScrollView, Text} from 'native-base';
import {batteryDetailProps as Props} from '../../containers/batteryDetail/types';
import {ProgressCircle} from 'react-native-svg-charts';
import {ImageBackground} from 'react-native';
import {Images} from '../../assets/images/images';
import styles from './styles';
import {useMQTT} from '../../hooks/mqtt';

const BatteryDetail: FC<Props> = ({}) => {
  const {temperature, client, CFE, connectClient} = useMQTT();

  useEffect(() => {
    if (client === undefined) {
      connectClient();
    }
  }, [connectClient, client]);
  return (
    <ImageBackground
      style={styles.background}
      imageStyle={styles.imageBackground}
      source={Images.resume}>
      <ScrollView flex="1" bg="rgba(0,0,0,0.5)" paddingX="9">
        <Box
          bg="white"
          shadow="4"
          borderRadius="10px"
          w={{base: '100%', md: '40%', lg: '30%'}}
          padding="7"
          marginTop="4">
          <Box
            position="absolute"
            fontSize="20px"
            zIndex="1"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%">
            <Text color="#00B800">{CFE.current}</Text>
            <Text color="#00B800">{temperature}</Text>
            <Text color="#00B800">{CFE.voltage}</Text>
            <Text color="#00B800">{client?.connected}</Text>
          </Box>
          {CFE.voltage && (
            <ProgressCircle
              style={styles.progressChart}
              progress={CFE.voltage / 30}
              progressColor="#00B800"
            />
          )}
        </Box>
      </ScrollView>
    </ImageBackground>
  );
};

export default BatteryDetail;
