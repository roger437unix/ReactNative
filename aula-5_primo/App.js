// Informa se um número é ou não primo
// Usando saída com Text

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function App() {

  const [num, setNum]        = useState('');
  const [output, setOutput]  = useState('');
  const [msg, setMsg]        = useState('');

  function primo() {
    let isPrimo = true;   

    if (num.trim() != '' && !isNaN(num)) {      
      const n = num;
      for (let i=2 ; i<n/2+1 ; i++) {
        if (n % i == 0) {
          setMsg('não é primo');
          isPrimo = false;
          break;
        }
      }
      if (isPrimo) {
        setMsg('é primo')
      }
      setOutput(num);
      setNum('');
    }
    else {
      setOutput('');
      setMsg('');  
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

    </View>
  );
}
