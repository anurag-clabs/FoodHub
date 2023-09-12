import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import DrawerAnimationContext from './Context';

export const DrawerAnimationProvider = props => {
  const progress = useSharedValue(0);

  return (
    <DrawerAnimationContext.Provider
      value={{
        progress: progress,
        setProgress: newProgress => {
          progress.value = newProgress;
        },
      }}>
      {props.children}
    </DrawerAnimationContext.Provider>
  );
};
