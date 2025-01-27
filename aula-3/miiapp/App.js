
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  function calcularImc() {
    // alert(peso)
    const imc = peso / (altura * altura)
    // alert(imc.toFixed(0))

    if (imc >= 18.5 && imc <= 25) {
      alert("Peso Ok!\n" + imc.toFixed(0))
    } else {
      alert("Precisa cuidar do seu peso!\n" + imc.toFixed(0))
    }
  }

  return(
    <View style= {styles.container}>
      <Text style={styles.titulo}>Calculo do IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Seu peso..."
        keyboardType='numeric'      
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="Sua altura..."
        keyboardType='numeric'      
      />           
     
      <TouchableOpacity style={styles.button} onPress={calcularImc}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  )
}


// Criando grupo de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,        
  },

  titulo: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: "#121212",        
    borderRadius: 10,
    margin: 15,
    padding: 10,    
    color: "#fff",
    fontSize: 20
  },  

  button: {    
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",    
    margin: 15,
    borderRadius: 10,
    padding: 10        
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#253025",
    // fontFamily: 'Arial'
  }
})
