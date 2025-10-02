import { View, StyleSheet } from "react-native";

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
    padding: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
