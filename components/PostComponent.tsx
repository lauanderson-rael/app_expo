import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";

interface PostProps {
  id: number;
  title: string;
  views: number;
  image: string;
  comments: string[];
}

export default function PostComponent({
  title,
  views,
  image,
  comments,
}: PostProps) {
  return (
    <View style={css.post}>
      <Text style={css.postTitle}>{title}</Text>
      <Image source={{ uri: image }} style={css.postImage} />

      <View style={css.commentsSection}>
        {comments.map((comment, index) => (
          <Text key={index} style={css.comment}>
            {comment}
          </Text>
        ))}
      </View>

      <View style={css.postFooter}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <AntDesign name="like" size={24} color="#fff" />
          <AntDesign name="share-alt" size={24} color="#fff" />
          <AntDesign name="comment" size={24} color="#fff" />
        </View>
        <Text style={css.postBody}>{views} views</Text>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  post: {
    backgroundColor: "#1a1a2e",
    padding: 15,
    marginBottom: 30,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  postBody: {
    fontSize: 14,
    color: "#ccc",
  },
  postImage: {
    width: "100%",
    height: 400,
    borderRadius: 8,
  },
  postFooter: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
  },
  commentsSection: {
    marginTop: 10,
    marginBottom: 10,
  },
  comment: {
    fontSize: 12,
    color: "#aaa",
    marginBottom: 5,
  },
});
