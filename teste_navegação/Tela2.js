import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Tela2( { navigation }) {

    function inicio() {
        navigation.navigate('Tela principal')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela 2</Text>

            <TouchableOpacity style={styles.buttons} onPress={inicio}>
                <Text style={styles.textButtons}>Início</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',        
    },
    title: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    buttons: {
        width: '50%',
        height: 40,
        backgroundColor: '#ff9900',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15
    },
    textButtons: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});