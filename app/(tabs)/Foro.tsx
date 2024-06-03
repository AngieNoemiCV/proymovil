// screens/ForumScreen.js
import { ObtenerSesion } from "@/utils/login";
import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";


export default function ForumScreen() {
  const [posts, setPosts] = useState<any[]>([]);

  const getPosts = async () => {
    const { data, error } = await supabase.from("foro").select("*");
    if (!error) {
      var aux: any[] = [];
      data?.map((val) => {
        aux.push({
          id: val.id,
          user: val.user,
          avatar: val.avatar,
          content: val.content,
          reactions: val.reactions,
        });
      });

      for (let i = 0; i < aux.length; i++) {
        const id = aux[i].id;

        const { data, error } = await supabase
          .from("post")
          .select("id, user, content")
          .eq("fk_foro", id);

        if (!error) {
          aux[i].comments = data ?? [];
        } else {
          console.log(error);
        }
      }

      console.log(aux);
      setPosts(aux);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foro de Desafíos</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <POST item={item} calback={getPosts} />}
        style={styles.forum}
      />
    </View>
  );
}

const POST = ({ item, calback }: { item: any; calback: () => void }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async (postId: number) => {
    const user = await ObtenerSesion();
    const { data, error } = await supabase.from("post").insert([
      {
        user: user,
        content: newComment,
        fk_foro: postId, // Asegúrate de que este ID existe en la tabla `foro`
      },
    ]);
    console.log(error);
    calback();
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={item.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{item.user}</Text>
      </View>
      <Text style={styles.postContent}>{item.content}</Text>
      <View style={styles.reactionsContainer}>
        <TouchableOpacity style={styles.reactionButton}>
          <Text>👍 {item.reactions}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentButton}>
          <Text>💬 {item.comments.length}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commentsContainer}>
        {item?.comments?.map((comment: any) => (
          <View key={comment.id} style={styles.comment}>
            <Text style={styles.commentUser}>{comment.user}:</Text>
            <Text style={styles.commentContent}>{comment.content}</Text>
          </View>
        ))}
        <TextInput
          style={styles.commentInput}
          placeholder="Añadir un comentario..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => handleAddComment(item.id)}
        >
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E0F7FA", // Fondo cálido y brillante
  },
  title: {
    fontSize: 28, // Tamaño de fuente más grande
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FF6347", // Color de título brillante y alegre
  },
  forum: {
    marginTop: 10,
  },
  postContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 15,
    borderRadius: 15, // Bordes más redondeados
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15, // Mayor separación
  },
  avatar: {
    width: 50, // Tamaño de avatar más grande
    height: 50,
    borderRadius: 25,
    marginRight: 15, // Mayor separación del texto
  },
  userName: {
    fontSize: 18, // Tamaño de fuente más grande
    fontWeight: "bold",
    color: "#FF4500", // Color vibrante
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  reactionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15, // Mayor separación
  },
  reactionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ADD8E6", // Color de fondo brillante
    padding: 10, // Mayor padding
    borderRadius: 10, // Bordes más redondeados
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ADD8E6", // Color de fondo brillante
    padding: 10, // Mayor padding
    borderRadius: 10, // Bordes más redondeados
  },
  commentsContainer: {
    marginTop: 20, // Mayor separación
  },
  comment: {
    flexDirection: "row",
    marginBottom: 10, // Mayor separación
  },
  commentUser: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#333",
  },
  commentContent: {
    fontSize: 14,
    color: "#666",
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 15, // Mayor padding
    marginBottom: 10,
    backgroundColor: "#FFF",
  },
  submitButton: {
    backgroundColor: "#FF69B4", // Color de fondo brillante
    paddingVertical: 12, // Mayor padding vertical
    paddingHorizontal: 25, // Mayor padding horizontal
    borderRadius: 15, // Bordes más redondeados
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16, // Tamaño de fuente mayor
  },
});
