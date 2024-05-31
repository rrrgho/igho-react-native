import React, { FC } from "react";
import { Text } from "react-native";
import { styles } from "./style";
import { IErrorText } from "./type";

const ErrorText: FC<IErrorText> = ({ text }) => {
  return (
    <>
      <Text style={styles.text}>{text}</Text>
    </>
  );
};

export default ErrorText;
