import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={css.container}>
      <Text style={css.title}>Olá mundo</Text>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01041b",
    alignItems: "center",
    
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});