import React from 'react';
import { ImageBackground } from 'react-native';

import Timer from './components/timer';
import TipsTimers from './components/tipsTimers';

export default function MainScreen() {
  return(
    <ImageBackground style={{flex: 1}} source={require('./imageBG.jpg')}>
      <Timer />
    </ImageBackground>
  );
}
