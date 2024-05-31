import React from "react";
import { StyleSheet, Text } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { IBody2 } from "./body2.type";

const Body2 = (props: IBody2) => {
  const { text, customStyle } = props;
  return <Text style={[styles.text, customStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: responsiveFontSize(1.5),
    color: "#444",
  },
});

export default Body2;
