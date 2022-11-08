import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'native-base';
import {ViewStyle} from 'react-native';

const Loader = () => {
  const style: ViewStyle = {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  };

  return (
    <View style={style}>
      <LottieView
        source={require('../../assets/lotties/energy-loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;
