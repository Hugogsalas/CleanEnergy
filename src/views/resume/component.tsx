import React, {FC} from 'react';
import {Box, ScrollView, Text} from 'native-base';
import {resumeProps as Props} from '../../containers/resume/types';
import {
  AreaChart,
  Grid,
  PieChart,
  ProgressCircle,
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {ImageBackground, Platform} from 'react-native';
import styles from './styles';
import {Images} from '../../assets/images/images';
import {navigate} from '../../utils/navigation';

const Resume: FC<Props> = ({write}) => {
  const data = [50, 20, 40, 95, -4, -34, 85, 91, 35, 53, -53, 24, 50, -20, -10];

  const pieData = [
    {
      value: 90,
      svg: {
        fill: '#018754',
        [Platform.OS === 'web' ? 'onClick' : 'onPress']: () => {
          navigate('BatteryDetail', {battery: 'cfe'});
        },
      },
      key: 'cfe',
    },
    {
      value: 220,
      svg: {
        fill: '#3B83BD',
        [Platform.OS === 'web' ? 'onClick' : 'onPress']: () =>
          navigate('BatteryDetail', {battery: 'winter'}),
      },
      key: 'winter',
    },
    {
      value: 100,
      svg: {
        fill: '#F9A602',
        [Platform.OS === 'web' ? 'onClick' : 'onPress']: () =>
          navigate('BatteryDetail', {battery: 'solar'}),
      },
      key: 'solar',
    },
  ];

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={styles.imageBackground}
      source={Images.resume}>
      <ScrollView flex="1" bg="rgba(0,0,0,0.5)" paddingX="9">
        <Text
          margin="3"
          fontSize="35"
          fontWeight="light"
          w={{base: '300px', md: '400px', lg: '400px'}}>
          {write('welcome')}
        </Text>
        <Box
          flexDirection={{base: 'column', md: 'row', lg: 'row'}}
          w="100%"
          justifyContent={{
            base: 'flex-start',
            md: 'space-between',
            lg: 'space-between',
          }}
          flexWrap="wrap">
          <Box
            bg="white"
            shadow="4"
            borderRadius="10px"
            w={{base: '100%', md: '40%', lg: '30%'}}
            padding="7"
            marginTop="4">
            <Text color="black" fontSize="20" fontWeight="bold">
              {write('percentage')}
            </Text>
            <Box
              w="100%"
              flexDirection={{base: 'column', lg: 'row', md: 'row'}}>
              <Box w="100%" flex={{base: undefined, lg: '1', md: '1'}}>
                <PieChart style={styles.pieChart} data={pieData} />
              </Box>
              <Box
                height="50px"
                padding="2"
                alignItems={{
                  base: 'center',
                  lg: 'space-between',
                  md: 'space-between',
                }}
                justifyContent={{
                  base: 'space-between',
                  lg: 'center',
                  md: 'center',
                }}
                flexDirection={{base: 'row', lg: 'column', md: 'column'}}
                w={{base: '100%', lg: '80px', md: '80px'}}>
                <Box alignItems="center" flexDirection="row">
                  <Box
                    margin="2"
                    bg="#018754"
                    width="10px"
                    height="10px"
                    borderRadius="5px"
                  />
                  <Text color="black">{write('electrical')}</Text>
                </Box>
                <Box alignItems="center" flexDirection="row">
                  <Box
                    margin="2"
                    bg="#3B83BD"
                    width="10px"
                    height="10px"
                    borderRadius="5px"
                  />
                  <Text color="black">{write('winter')}</Text>
                </Box>
                <Box alignItems="center" flexDirection="row">
                  <Box
                    margin="2"
                    bg="#F9A602"
                    width="10px"
                    height="10px"
                    borderRadius="5px"
                  />
                  <Text color="black">{write('sun')}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            bg="white"
            shadow="4"
            borderRadius="10px"
            w={{base: '100%', md: '58%', lg: '68%'}}
            padding="7"
            marginTop="4">
            <Text color="black" fontSize="20" fontWeight="bold">
              {write('status')}
            </Text>
            <AreaChart
              style={styles.areaChart}
              data={data}
              contentInset={{top: 30, bottom: 30}}
              curve={shape.curveNatural}
              svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
              <Grid />
            </AreaChart>
          </Box>
          <Box
            bg="white"
            shadow="4"
            borderRadius="10px"
            padding="7"
            w={{base: '100%', md: '100%', lg: '100%'}}
            marginY="4">
            <Text color="black" fontSize="20" fontWeight="bold">
              {write('batteryStatus')}
            </Text>
            <Box
              flexDirection="row"
              padding="3"
              width="100%"
              justifyContent="space-around">
              <Box w="30%" position="relative">
                <Box
                  position="absolute"
                  fontSize="20px"
                  zIndex="1"
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  h="100%">
                  <Text color="#00B800">30%</Text>
                </Box>
                <ProgressCircle
                  style={styles.progressChart}
                  progress={0.3}
                  progressColor="#00B800"
                />
              </Box>
              <Box w="30%" position="relative">
                <Box
                  position="absolute"
                  fontSize="20px"
                  w="100%"
                  h="100%"
                  zIndex="1"
                  justifyContent="center"
                  alignItems="center">
                  <Text color="#00B800">70%</Text>
                </Box>
                <ProgressCircle
                  style={styles.progressChart}
                  progress={0.7}
                  progressColor="#00B800"
                />
              </Box>
              <Box w="30%" position="relative">
                <Box
                  position="absolute"
                  fontSize="20px"
                  w="100%"
                  h="100%"
                  zIndex="1"
                  justifyContent="center"
                  alignItems="center">
                  <Text color="#00B800">50%</Text>
                </Box>
                <ProgressCircle
                  style={styles.progressChart}
                  progress={0.5}
                  progressColor="#00B800"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </ImageBackground>
  );
};

export default Resume;
