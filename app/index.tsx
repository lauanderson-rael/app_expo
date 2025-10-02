import { StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import PostComponent, { PostProps } from "../components/PostComponent";
import Header, { HeaderProps } from "@/components/Header";

export default function Index() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [user, setUser] = useState<HeaderProps>({} as HeaderProps);
  useEffect(() => {
    // lista de posts
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

    // dados do usuario
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data_user) => setUser(data_user));
  }, []);

  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, views: post.views + 1 } : post
      )
    );
  };

  return (
    <View style={css.container}>
      <Header name={user.name} image={user.image} key={user.name} />

      <Text style={css.title}>Últimas postagens</Text>

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
            onLike={handleLike}
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
    margin: 20,
  },
});
