import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({    
    container: {
      backgroundColor: '#bbb',
      flex: 1,
      alignItems: 'center'        
    },  
    titulo: {
      textAlign: 'center',
      marginTop: 80,
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 40
    },  
    input: {
      width: '60%',
      backgroundColor: "#fff",        
      borderRadius: 10,      
      padding: 10,          
      fontSize: 17,
      color: 'red',
      marginTop: 0,
      marginBottom: 20,
      
    },    
    button: {
      width: '40%',
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
    },  
    output: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold',      
    }
  })
  