import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({    
    container: {
      backgroundColor: '#bbb',
      flex: 1,
      alignItems: 'center',      
    },  
    titulo: {
      textAlign: 'center',
      marginTop: 80,
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 40
    },  
    input: {
      backgroundColor: "#fff",
      width: '75%',
      borderRadius: 10,
      margin: 10,
      padding: 10,          
      fontSize: 18,
      color: 'red',
      marginTop: 0,      
    },
    buttonEnviar: {
      backgroundColor: "#ffa500",
      alignItems: "center",    
      width: 120,
      margin: 15,
      borderRadius: 10,
      padding: 10,
      marginTop: 40,
      marginBottom: 20,
    },
    buttonLimpar: {
      backgroundColor: "#00ff50",
      alignItems: "center",    
      width: 120,
      margin: 15,
      borderRadius: 10,
      padding: 10,
      marginTop: 40,
      marginBottom: 20,
    },  
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#253025",      
    },  
    output: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold',      
    }
  })
  