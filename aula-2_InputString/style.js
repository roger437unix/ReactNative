import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        color: '#020',
        marginBottom: 40
    },
    textInput: {
        backgroundColor: '#aaa',
        width: '90%',
        height: 60,
        borderRadius: 10,
        fontSize: 20,
        color: '#053',
        padding: 20,
        textAlign: 'center',
        marginBottom: 50
    },
    button: {
        backgroundColor: '#08f',
        width: '50%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});
