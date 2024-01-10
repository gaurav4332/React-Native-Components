import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TostScreen from "./src/srcCustomToast";
import CustomSwitchScreen from "./src/srcCustomAnimatedSwitch";
import CheckboxScreen from "./src/srcCustomAnimatedCheckbox";

const App = () => {
  return (
    <>
      {/* <TostScreen /> */}
      {/* <CustomSwitchScreen /> */}
      <CheckboxScreen/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
