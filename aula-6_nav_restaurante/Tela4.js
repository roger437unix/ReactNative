import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { styles } from "./stylePizzas";

export default function Tela1({ navigation }) {

    function menu() { navigation.navigate('Tela de menu'); }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Portuguesa</Text>

            <Image source={require('./src/assets/portuguesa2.jpg')} style={styles.imagem}/>

            <View>
                <Text style={styles.textItens}>- Tomate em rodelas</Text>
                <Text style={styles.textItens}>- Molho de tomate</Text>
                <Text style={styles.textItens}>- Ovo cozido</Text>
                <Text style={styles.textItens}>- Presunto</Text>
                <Text style={styles.textItens}>- Pimentão fatiado</Text>
                <Text style={styles.textItens}>- Cebola picada</Text>
                <Text style={styles.textItens}>- Azeitonas, orégano e tempero verde</Text>
            </View>

            <TouchableOpacity style={styles.buttons} onPress={menu}>
                <Text style={styles.textButtons}>Voltar menu</Text>
            </TouchableOpacity>

        </View>
    );
}