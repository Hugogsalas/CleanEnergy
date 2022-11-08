import React from 'react';
import Lottie from 'react-lottie';
import * as LoaderLottie from '../../assets/lotties/energy-loader.json';
import {LoadersStyles} from './types';

const Loader = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const styles: LoadersStyles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      verticalAlign: 'center',
      zIndex: 1,
    },
  };

  return (
    <div style={styles.container}>
      <Lottie options={lottieOptions} height={'300px'} width={'auto'} />
    </div>
  );
};

export default Loader;
