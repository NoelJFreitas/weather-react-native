import React from 'react';
import {View, ViewProps} from 'react-native';

interface ScreenProps extends ViewProps {}

export default function Screen({children, ...props}: ScreenProps) {
  return <View {...props}>{children}</View>;
}
