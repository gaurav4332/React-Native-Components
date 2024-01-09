import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Switch from './src/components/Switch';

const App = () => {
  const handleChange = data => {
    console.log('data', data);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
      }}>
      <Switch
        activeColor={'#FFA901'}
        inActiveColor={'#F2F5F7'}
        onValueChange={handleChange}
      />
      <Switch
        activeColor={'#FFA901'}
        inActiveColor={'#F2F5F7'}
        onValueChange={handleChange}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
