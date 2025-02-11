import { Text, View, TextInput, Button } from "react-native"
import { styles } from "./style.js";

function App() {
  const nome = 'Tux';
  return(
    <View style={styles.container}>

      <Text style={styles.titulo}>Consulta CEP</Text>
      
      <TextInput placeholder="Digite o cep..." style={styles.TextInputCep} />

      <Button title="Consultar" style={styles.btnConsultar} />

    </View>  
  )  
}

export default App;
