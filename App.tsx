import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}
