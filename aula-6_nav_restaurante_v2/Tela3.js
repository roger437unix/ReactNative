import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { styles } from "./stylePizzas";

export default function Tela1({ navigation }) {

    function menu() { navigation.navigate('Tela de menu'); }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Palmito</Text>

            <Image source={require('./src/assets/palmito2.jpeg')} style={styles.imagem}/>

            <View>
                <Text style={styles.textItens}>- Palmito picado</Text>
                <Text style={styles.textItens}>- Mussarela</Text>
                <Text style={styles.textItens}>- Presunto</Text>
                <Text style={styles.textItens}>- Azeitonas grandes</Text>
                <Text style={styles.textItens}>- Azeite de oliva</Text>
                <Text style={styles.textItens}>- Molho de tomate</Text>
            </View>

            <TouchableOpacity style={styles.buttons} onPress={menu}>
                <Text style={styles.textButtons}>Voltar menu</Text>
            </TouchableOpacity>

        </View>
    );
}