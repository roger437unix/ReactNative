import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { styles } from "./stylePizzas";

export default function Tela1({ navigation }) {

    function menu() { navigation.navigate('Tela de menu'); }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calabresa</Text>

            <Image source={require('./src/assets/calabresa2.jpg')} style={styles.imagem}/>

            <View>
                <Text style={styles.textItens}>- Tomate maduro</Text>
                <Text style={styles.textItens}>- Queijo parmesão ralado</Text>
                <Text style={styles.textItens}>- Linguiça calabresa defumada</Text>
                <Text style={styles.textItens}>- Cebolas em rodelas finas</Text>
                <Text style={styles.textItens}>- Azeite de oliva</Text>
                <Text style={styles.textItens}>- Oregano</Text>
            </View>

            <TouchableOpacity style={styles.buttons} onPress={menu}>
                <Text style={styles.textButtons}>Voltar menu</Text>
            </TouchableOpacity>

        </View>
    );
}