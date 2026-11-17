import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff89cecb"
  },
  titulo: {
    color: "#ffdae9", 
    fontSize: 28, 
    fontWeight: "bold", 
    marginTop: 24 
  },
  textobotao: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  botao: {
    backgroundColor: "#b81d84",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 50,
  },
  rolando: { 
    backgroundColor: "#a1e087cb"
  },
  parado: {
    backgroundColor: "#ff89cecb"
  },
  dado: { 
    width: 250, 
    height: 250 
  },
  texto: { 
    color: "#fff", 
    fontSize: 28, 
    fontWeight: "bold", 
    marginTop: 24 
  }
});

export default styles;

