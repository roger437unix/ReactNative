import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TelaConfirmacao = ({ route, navigation }) => {
    // Etapa 2
    const { nome, email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro confirmado!</Text>
            {/* Etapa 3    */}
            <Text style={styles.output}>Nome: {nome}</Text>
            <Text style={styles.output}>Email: {email}</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.buttonText}>Voltar para registro</Text>
            </TouchableOpacity>

            { /* <Button style={styles.button} title="Voltar para o registro" onPress={() => navigation.navigate('Registro')} /> */}
        </View>
    );
};

export default TelaConfirmacao;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30
    },
    output: {
        fontSize: 18,
        marginBottom: 10
    },
    button: {
        backgroundColor: "#ffa500",
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
        borderRadius: 10,
        padding: 10
    },    
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#253025"            
    }
})
