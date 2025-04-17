
// Obs.: Imagem no tamanho 1200x600

import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function MenuScreen({ navigation }) {

    function tela1() { navigation.navigate('Tela1'); }
    function tela2() { navigation.navigate('Tela2'); }
    function tela3() { navigation.navigate('Tela3'); }
    function tela4() { navigation.navigate('Tela4'); }
    function main() { navigation.navigate('Tela Principal'); }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cardápio de pizzas</Text>

            <View style={{ flexDirection: "row" }}>
                <View>
                    <TouchableOpacity style={styles.buttonsView} onPress={tela1}>
                        <Text style={styles.textButtons}>Calabresa</Text>
                        <Image source={require('./src/assets/calabresa.jpg')} resizeMode='center' style={{flex:.9 }} />
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.buttonsView} onPress={tela2}>
                        <Text style={styles.textButtons}>Portuguesa</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: "row" }}>
                <View>
                    <TouchableOpacity style={styles.buttonsView} onPress={tela3}>
                        <Text style={styles.textButtons}>Palmito</Text>
                        <Image source={require('./src/assets/palmito.jpeg')} resizeMode='center' style={{flex:.85 }} />
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.buttonsView} onPress={tela4}>
                        <Text style={styles.textButtons}>Aliche</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.buttons} onPress={main}>
                <Text style={styles.textButtons}>Tela principal</Text>
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
        marginTop: 50,
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
        marginTop: 30
    },
    buttonsView: {
        width: 150,
        height: 120,
        backgroundColor: '#ffaa00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 50,
        marginRight: 10,
        marginLeft: 10
    },
    textButtons: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});