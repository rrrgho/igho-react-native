import { KeyboardType, ViewStyle } from "react-native";

interface IConfig {
  lightModeStyleContainer?: ViewStyle;
  darkModeStyleContainer?: ViewStyle;

  lighModeStyleIconWrapper?: ViewStyle;
  darkModeStyleIconWrapper?: ViewStyle;

  ligthModeStyleTextInput?: ViewStyle;
  darkModeStyleTextInput?: ViewStyle;

  icon?: any;
  iconSize?: number;
  label?: string;
  placeholder?: string;
  keyboardType?: KeyboardType;
  value?: string;

  onChangeText?: (val: string) => void;
  onBlur?: (x: any) => void;

  error?: any;
  required?: any;
}

interface ITextfield {
  config?: IConfig;
}

export type { ITextfield };
