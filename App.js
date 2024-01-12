import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TostScreen from "./src/srcCustomToast";
import CustomSwitchScreen from "./src/srcCustomAnimatedSwitch";
import CheckboxScreen from "./src/srcCustomAnimatedCheckbox";
import AnimatedTabScreen from "./src/srcAnimatedTabBar";

const App = () => {
  return (
    <>
      {/* <TostScreen /> */}
      {/* <CustomSwitchScreen /> */}
      <CheckboxScreen/>
      {/* <AnimatedTabScreen/> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});