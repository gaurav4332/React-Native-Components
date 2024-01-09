import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TostScreen from "./src/srcCustomToast";
import CustomSwitchScreen from "./src/srcCustomAnimatedSwitch";

const App = () => {
  return (
    <>
      {/* <TostScreen /> */}
      <CustomSwitchScreen />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
