import React from "react";
import { StyleSheet, Text } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { IBody1 } from "./body1.type";

const Body1 = (props: IBody1) => {
  const { text, customStyle } = props;
  return <Text style={[styles.text, customStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "#444",
  },
});

export default Body1;
