import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import styles from "../styles"

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dado de RPG</Text>

      <Pressable
            style={styles.botao}
            onPress={() => router.push("/dado")}
      >
        <Text style={styles.textobotao}>Gire o dado</Text>
      </Pressable>

    </View>
  );
}


