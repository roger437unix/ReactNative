import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MainScreen({ navigation }) {

    function callMenuScreen() {          
        navigation.navigate('Tela de menu');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela principal</Text>

            <TouchableOpacity style={styles.buttons} onPress={callMenuScreen}>
                <Text style={styles.textButtons}>Cardápio</Text>
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
        height: 70,
        backgroundColor: '#00ff77',
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