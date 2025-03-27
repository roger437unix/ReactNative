import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormularioRegistro = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // Etapa 2
    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    // Etapa3
    const validarFormulario = () => {
        let valido = true;

        if (!nome) {
            setErroNome('Nome é obrigatório');
            valido = false;
        } else {
            setErroNome('');
        }

        if (!email) {
            setErroEmail('E-mail é obrigatório');
            valido = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErroEmail('E-mail inválido');
            valido = false;
        } else {
            setErroEmail('');
        }

        if (senha.length < 6) {
            setErroSenha('Senha deve ter pelo menos 6 caracteres');
            valido = false;
        } else {
            setErroSenha('');
        }

        return valido;
    };

    // Etapa 4
    const lidarComRegistro = () => {
        if (validarFormulario()) {
            navigation.navigate('Confirmação', { nome, email });
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            {/* Etapa 5 */}
            {erroNome ? <Text style={styles.erro}>{erroNome}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            {/* Etapa 5 */}
            {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
                keyboardType='numeric'
            />
            {/* Etapa 5 */}
            {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}

            <Button title="Registrar"
            //Etapa 4
            onPress={lidarComRegistro} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    erro: {
        color: 'red',
        marginBottom: 10,
    },
});

export default FormularioRegistro;
/*
Explicação:

useState: Gerencia o estado dos campos de entrada (nome, email, senha) e das mensagens de erro (erroNome, erroEmail, erroSenha).
validarFormulario: Realiza a validação dos campos de entrada.
lidarComRegistro: Lida com o envio do formulário, validando-o e navegando para a tela de confirmação (TelaConfirmacao).
navigation.navigate: Navega para outra tela, passando dados como parâmetros.
TextInput: Componentes de entrada para os campos de texto.
Button: Botão para enviar o formulário.
StyleSheet: Estilos para o componente.

*/