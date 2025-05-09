// Primo versão 2
// Indicando apenas o primeiro número que houve divisibilidade

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function App() {

  const [num, setNum] = useState('');
  const [output, setOutput] = useState('');
  const [msg, setMsg] = useState('');

  const [divisivel, setDivisivel] = useState('');
  const [msgDiv, setMsgDiv] = useState('');

  function primo() {
    let isPrimo = true;

    if (num.trim() != '' && !isNaN(num)) {
      const n = num;
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i == 0) {
          isPrimo = false;
          setMsg('não é primo');
          setMsgDiv('É divisível por: ');
          setDivisivel(i);
          break
        }
      }
      if (isPrimo) {
        setMsg('é primo');
        setDivisivel('');
        setMsgDiv('');
      }    

      setOutput(num);
      setNum('');      
    }
    else {
      setOutput('');
      setMsg('');
      setDivisivel('');
      setMsgDiv('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Números primos</Text>

      <TextInput
        style={styles.input}
        value={num}
        onChangeText={(num) => setNum(num)}
        placeholder="Digite um número..."
        placeholderTextColor="#002"
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={primo}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <Text style={styles.output}>{output} {msg}</Text>
      <Text style={styles.output2}>{msgDiv} {divisivel}</Text>

    </View>
  );
}
