import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { scale } from "./src/srcThemeingAndNetInfo/utils/scale";

const Children = ({ ExampleFunc }) => {
  const [childData, setChildData] = useState("");
  const setData = (txt) => {
    setChildData(txt)
    ExampleFunc(txt)
  };
  return (
    <View>
      {/* <Text>{childData}</Text> */}
      <TextInput
        value={childData}
        style={{
          height: 40,
          width: scale(300),
          backgroundColor: "white",
        }}
        onChangeText={(txt) => {
          setData(txt);
        }}
      />
    </View>
  );
};

export default Children;

const styles = StyleSheet.create({});
