import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface HeaderProps {
  name: string;
  image: string;
}
export default function Header({ name, image }: HeaderProps) {
  return (
    <View style={css.header}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img style={css.image} src={image} alt={name} />
        <p> Olá, {name}</p>
      </div>

      <AntDesign name="menu" size={24} color="white" />
    </View>
  );
}

const css = StyleSheet.create({
  header: {
    backgroundColor: "#03093a",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
