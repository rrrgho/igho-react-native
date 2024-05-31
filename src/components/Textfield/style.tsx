import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Theme } from "../../theme.config";

export const lightModeStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: responsiveHeight(7),
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: Theme.border.radius,
  },
  textInput: {
    backgroundColor: Theme.lightMode.backgroundColor,
    color: Theme.lightMode.color,
    flex: 1,
    borderRadius: Theme.border.radius,
    fontSize: responsiveFontSize(2),
    paddingRight: 10,
  },
  iconWrapper: {
    backgroundColor: "transparent",
    width: responsiveWidth(15),
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    paddingLeft: 5,
    paddingBottom: 5,
    display: "flex",
    flexDirection: "row",
  },
  errorMessageContainer: {
    paddingLeft: 5,
    paddingTop: 5,
  },
});
