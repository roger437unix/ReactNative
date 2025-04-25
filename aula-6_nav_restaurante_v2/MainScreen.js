import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function MainScreen({ navigation }) {

    function callMenuScreen() {          
        navigation.navigate('Tela de menu');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rodrigo Pizzaria</Text>

            <Image source={require('./src/assets/italia.jpg')} />            

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
        marginTop: 80,
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
        marginTop: 80        
    },
    textButtons: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});