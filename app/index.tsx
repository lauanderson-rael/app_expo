import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import PostComponent from "../components/PostComponent";

interface Post {
  id: number;
  title: string;
  views: number;
  image: string;
  comments: string[];
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
          <PostComponent
            id={item.id}
            title={item.title}
            views={item.views}
            image={item.image}
            comments={item.comments}
          />
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

});
