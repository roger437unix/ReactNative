// Cálculo do IMC versão 3
// Adicionando botão Limpar e saída com Text

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function App() {

  const [peso, setPeso]               = useState('');
  const [altura, setAltura]           = useState('');
  const [imc, setImc]                 = useState('');
  const [estado, setEstado]           = useState('');

  // Para exibir texto na saída somente quando o botão for pressionado
  const [textoImc, setTextoImc]       = useState('');
  const [textoEstado, setTextoEstado] = useState('');

  function calcularImc() {
    if (peso.trim() != '' && altura.trim() != '' && !isNaN(peso) && !isNaN(altura)) {
      // Imc
      const valorImc = peso / altura ** 2;
      setImc(valorImc.toFixed(1));
      setTextoImc('Imc:')

      // Estado
      const estadoPessoa = (valorImc < 17) ? 'Muito abaixo do peso' : (valorImc >= 17 && valorImc < 18.5) ? 'Abaixo do peso' :
        (valorImc >= 18.5 && valorImc < 25) ? 'Peso normal' : (valorImc >= 25 && valorImc < 30) ? 'Acima do peso' :
          (valorImc >= 30 && valorImc < 35) ? 'Obesidade 1' :
            (valorImc >= 35 && valorImc < 40) ? 'Obesidade 2' : 'Obesidade 3';

      setEstado(estadoPessoa);
      setTextoEstado('Estado:');   
    }    
  }

  function limpar() {
    // Limpa caixas de entrada
    setPeso('');
    setAltura('');

    // Limpa as saídas Text
    setImc('');
    setTextoImc('');
    setEstado('');
    setTextoEstado('');
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

      <View style={{ flexDirection: "row" }}>
        <View>
          <TouchableOpacity style={styles.buttonEnviar} onPress={calcularImc}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonLimpar} onPress={limpar}>
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.output}>{textoImc} {imc}</Text>
      <Text style={styles.output}>{textoEstado} {estado} </Text>

    </View>
  )
}
