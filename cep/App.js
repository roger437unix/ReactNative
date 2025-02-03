import { Text, View } from "react-native"
import { styles } from "./style.js";

function App() {
  const nome = 'Tux';
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Aprendendo ReactNative com EXPO!</Text>
      <Text>Nome: {nome}</Text>
    </View>  
  )  
}

export default App;
