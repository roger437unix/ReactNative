import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,        
    },
    ladoalado: {
        flex: 1,
        flexDirection: 'row',
    },
    area: {
        flex: 1,
        borderWidth: 5,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn1: {
        backgroundColor: '#d72356',
        width: '100%',
        height: '100%',
        borderRadius: 40,
        borderWidth: 4,
        borderColor: '#6d200fff',
    },
    btn2: {
        backgroundColor: '#23d7b0ff',
        width: 160,
        height: 160,
        borderRadius: 0,
        borderWidth: 4,
        borderColor: '#0a3704ff',
    },
    btn3: {
        backgroundColor: '#2359d7ff',
        width: 160,
        height: 160,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#2d6d0fff',
    },
    btn4: {
        backgroundColor: '#ffff25ff',
        width: '100%',
        height: 120,
        borderRadius: 1,
        borderWidth: 4,
        borderColor: '#675d05ff',
    },
    output: {
        flex: 1,
        backgroundColor: '#ded7d7ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 10,
        borderColor: '#072405ff',
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnClear: {
        backgroundColor: '#f5790dff',
        width: '60%',
        height: 50,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    textBtnClear: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});
