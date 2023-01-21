import { TextStyle } from "react-native";
const size = {
  default: 14,
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

const weight: { [key: string]: TextStyle["fontWeight"] } = {
  full: "900",
  bold: "bold",
  semi: "600",
  normal: "normal",
  thin: "400",
};

export default { size, weight };
