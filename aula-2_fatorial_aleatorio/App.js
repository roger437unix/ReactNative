import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

import Fat from './components/fatorial';
import Aleatorio from './components/aleatorio';

export default function App() {
  
  // Criando useState
  const [numFat, setNumFat] = useState('0');

  const fat = <Fat num={numFat} />;
  const numAleatorio = <Aleatorio min={0} max={100} />
  

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        placeholder='Nº para fatorial...'
        value={numFat}
        onChangeText={(numFat) => setNumFat(numFat)}
        keyboardType='numeric'
      />

      <Text style={styles.fatorial}> {numFat} ! = {fat} </Text>
      <Text style={styles.aleatorio}>{numAleatorio}</Text>

    </View>
  );
}
