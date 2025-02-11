import { StyleSheet } from "react-native"
import { TextInput } from "react-native-web"

// Criando grupo de estilos
export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ededed",
        flex: 1,
        alignItems: 'center'        
    },
    titulo: {
        fontSize: 30,
        color: '#002',
        // textAlign: 'center',
        marginTop: 50
    },
    TextInputCep: {
        backgroundColor: '#dcdcdc',
        width: 250,
        fontSize: 20,
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 40
    },
    btnConsultar: {}
})
