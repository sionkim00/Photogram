import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary, fontSize: fonts.size.lg }}>
        Hello World
        <AntDesign name="stepforward" size={24} color="black" />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
