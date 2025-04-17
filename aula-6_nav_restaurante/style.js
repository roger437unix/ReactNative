import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    buttons: {
        width: '50%',
        height: 70,
        backgroundColor: '#00ddff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15
    },
    textButtons: {
        fontSize: 17,
        fontWeight: 'bold'
    }
});