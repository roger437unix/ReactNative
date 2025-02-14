import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style.js';

export default function App() {

  function mensagem() {
    console.log('Seja bem-vindo!');
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Botão TouchableOpacity Native!</Text>

      <TouchableOpacity style={styles.touchableOpacityEnviar} onPress={mensagem}>
        <Text style={styles.textTouchableOpacityEnviar}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}
