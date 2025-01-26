import { View, Text, StyleSheet, Image } from 'react-native'

// Criar um componente chamado App
export default function App() {
  return(
    <View style= {styles.container}>
      <Text style={styles.titulo}>Programando com ReactNative!</Text>

      <Image 
        source = {require("./src/assets/tux_Chewbacca.png")} 
        style={styles.logo}
      />

      <Text style= {styles.paragrafo}>Android e Ios</Text>
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
  }
})
