import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Login() {
  return (
    <View style={styles.container}>

        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Seja bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu e-mail...'
                placeholderTextColor={'#010f01ff'}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder='Sua senha...'
                placeholderTextColor={'#010f01ff'}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.buttonTextRegister}>Não possui uma conta? Cadastre-se.</Text>
            </TouchableOpacity>

        </Animatable.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfd9d9ff',
        top: 25,
    },
    containerHeader: {
        // flex: 1,
        backgroundColor: '#dfd9d9ff',
        marginTop: '10%',
        marginBottom: '10%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#032b05ff'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#c5e0dfff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50
    },
    input: {
        borderBottomWidth: 1,
        height: 45,
        marginBottom: 12,
        fontSize: 16,
        color: '#031b03ff'
    },
    button: {
        backgroundColor: '#083b08ff',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 8,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    buttonRegister: {
        marginTop: 25,
        alignSelf: 'center'
    },
    buttonTextRegister: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#555555'
    },
});
