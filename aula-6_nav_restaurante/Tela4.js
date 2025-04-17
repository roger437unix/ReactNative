import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./style";

export default function Tela4({ navigation }) {

    function menu() {navigation.navigate('Tela de menu');}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela 4</Text>

            <TouchableOpacity style={styles.buttons} onPress={menu}>
                <Text style={styles.textButtons}>Voltar menu</Text>
            </TouchableOpacity>

        </View>
    );
}