import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Image } from "expo-image";

interface Post {
  id: number;
  title: string;
  body: string;
  image: string;

}

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <View style={css.container}>
      <Text style={css.title}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={css.post}>
            <Text style={css.postTitle}>{item.title}</Text>
            <Text style={css.postBody}>{item.body}</Text>
            <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
          </View>
        )}
      />
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01041b",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  post: {
    backgroundColor: "#1a1a2e",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  postBody: {
    fontSize: 14,
    color: "#ccc",
  },
});