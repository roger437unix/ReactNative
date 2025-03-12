
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"


export function ModalMensagem({handleClose}) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Seja bem-vindo!</Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>                    
                </View>

            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24, 0.6)",
        flex: 1,                        // Para pegar a tela toda
        alignItems: "center",           // Alinhamento eixo x
        justifyContent: "center",        // Alinhamento eixo y
    },

    content: {
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 25
    },

    buttonArea: {
        flexDirection: "row",
        width: '50%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    button: {
        flex: 1,        
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        backgroundColor: '#392de9',
        borderRadius: 8
    },

    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15
    }
})
