import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Tela1({ navigation }) {

    function chamarTela2() {
        navigation.navigate('Tela2')
    }

    function chamarTela3() {
        navigation.navigate('Tela3')
    }

    function chamarTela4() {
        navigation.navigate('Tela4')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navegação entre telas</Text>

            <TouchableOpacity style={styles.buttons} onPress={chamarTela2}>
                <Text style={styles.textButtons}>Chamar Tela 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={chamarTela3}>
                <Text style={styles.textButtons}>Chamar Tela 3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={chamarTela4}>
                <Text style={styles.textButtons}>Chamar Tela 4</Text>
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
