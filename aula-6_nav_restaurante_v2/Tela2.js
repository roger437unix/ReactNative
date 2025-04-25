import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { styles } from "./stylePizzas";

export default function Tela1({ navigation }) {

    function menu() { navigation.navigate('Tela de menu'); }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aliche</Text>

            <Image source={require('./src/assets/aliche2.jpg')} style={styles.imagem}/>

            <View>
                <Text style={styles.textItens}>- Molho de tomate</Text>
                <Text style={styles.textItens}>- Filés de aliche (anchova) em conserva</Text>
                <Text style={styles.textItens}>- Mussarela de búfala em fatias</Text>
                <Text style={styles.textItens}>- Tomate cereja cortado em rodelas</Text>
                <Text style={styles.textItens}>- Azeitona preta sem caroço</Text>
                <Text style={styles.textItens}>- Azeite extra virgem</Text>
                <Text style={styles.textItens}>- Folhas de orégano fresco</Text>
            </View>

            <TouchableOpacity style={styles.buttons} onPress={menu}>
                <Text style={styles.textButtons}>Voltar menu</Text>
            </TouchableOpacity>

        </View>
    );
}