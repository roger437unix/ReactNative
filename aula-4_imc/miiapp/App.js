// Cálculo do IMC

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcularImc() {
    if (peso.trim() != '' && altura.trim() != '') {
      const imc = peso / (altura ** 2);

      if (imc >= 18.5 && imc <= 25) {
        alert("Peso Ok!\nImc: " + imc.toFixed(1));
      } else {
        alert("Precisa cuidar do seu peso!\n" + imc.toFixed(0));
      }
      setPeso('');
      setAltura('');
    }   
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Seu peso..."
        placeholderTextColor="#002" 
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Sua altura..."
        placeholderTextColor="#002" 
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={calcularImc}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  )
}
