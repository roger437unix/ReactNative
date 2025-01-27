import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'

// Importando Modal
import { ModalMensagem } from './src/components/modal'

// Criar um componente chamado App
export default function App() {

  // Criando um estado [evento]
  // modalVisible : nome do useState
  // setModalVisible : Ação para trocar o valor do useState
  // 'false' é o valor inicial do useState, ou seja, setModalVisible inicia 'false'

  const [modalVisible, setModalVisible] = useState(false)

  function funcMensagem() {
    console.log("Seja bem-vindo!")
    setModalVisible(true)
  }


  return(
    <View style= {styles.container}>
      <Text style={styles.titulo}>Programando com ReactNative!</Text>

      <Image 
        source = {require("./src/assets/tux_Chewbacca.png")} 
        style={styles.logo}
      />
            
      <TouchableOpacity style={styles.button} onPress={funcMensagem}>
        <Text style={styles.textButton}>Hello</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalMensagem handleClose={ () => setModalVisible(false) } />
      </Modal>

    </View>
  )
}


// Criando grupo de estilos
const styles = StyleSheet.create({
  container: {
    flex: 100,    
    backgroundColor: "#f3f3ff",
    justifyContent: 'center',
    alignItems: "center"
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  logo: {
    marginTop: 60,
    marginBottom: 60
  },

  paragrafo: {
    fontSize: 20,
    color: "#20caf0"
  },

  button: {
    backgroundColor: "#ffa500",
    width: "40%",               // Pode ser número
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,              // Distância para cima
    marginBottom: 100           // Distância para baixo
  },

  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#253025",
    // fontFamily: 'Arial'
  }
})
