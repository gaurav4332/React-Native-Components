import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { scale } from "./src/srcThemeingAndNetInfo/utils/scale";
import Children from "./Children";

const Parents = () => {
  const [data, setData] = useState("");
  const ExampleFunc = (childData) => {
    setData(childData);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: scale(45),
        paddingHorizontal: scale(15),
        backgroundColor: "cyan",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text> Parent Data from child 
      <Text>{data}</Text></Text>
      <Children ExampleFunc={ExampleFunc}/>
      <Text>Parents</Text>
    </View>
  );
};

export default Parents;

const styles = StyleSheet.create({});
