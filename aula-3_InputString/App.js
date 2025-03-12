// Exemplo de utilização de Input com String

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style.js';
import { useState } from 'react';

export default function Tux() {

  // Criando useState
  const [nome, setNome] = useState('');

  const funcMessage = () => {
    if (nome.trim() != '') {
      console.log(`Seja bem-vindo ${nome.trim()}.`);
      alert(`Seja bem-vindo ${nome.trim()}.`);
      setNome('');
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Testando ReactNative...</Text>

      <TextInput
        style={styles.textInput}
        placeholder='Digite seu nome...'
        value={nome}
        onChangeText={ (nome) => setNome(nome) }
      />      

      <TouchableOpacity style={styles.button} onPress={funcMessage}> 
        <Text style={styles.buttonText}>Hello!</Text>
      </TouchableOpacity>

    </View>
  );
}
