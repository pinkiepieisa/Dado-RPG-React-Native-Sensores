import { Text, View } from "react-native";
import styles from "../styles"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Dado de RPG</Text>
      <Text>Agite o celular e rode o dado para sortear um número</Text>
    </View>
  );
}


