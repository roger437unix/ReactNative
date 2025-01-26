import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

// Criar um componente chamado App
export default function App() {
  return(
    <View style= {styles.container}>
      <Text style={styles.titulo}>Programando com ReactNative!</Text>

      <Image 
        source = {require("./src/assets/tux_Chewbacca.png")} 
        style={styles.logo}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Hello</Text>
      </TouchableOpacity>

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
