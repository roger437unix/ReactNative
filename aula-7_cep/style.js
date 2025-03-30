import { StyleSheet } from "react-native"

// Criando grupo de estilos
export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cacaca",
        flex: 1,
        alignItems: 'center'
    },
    imagem: {
        marginTop: 80,
        width: 120,
        height: 120
    },
    titulo: {
        fontSize: 30,
        color: '#002',
        marginTop: 20
    },
    TextInputCep: {
        backgroundColor: '#dcdcdc',
        width: 250,
        fontSize: 20,
        padding: 20,
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 40        
    },
    btnConsultar: {
        width: '40%',
        backgroundColor: "#ffa500",
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
        borderRadius: 10,
        padding: 10,
        marginBottom: 30
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#253025",
    },
    output: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
    }
})
