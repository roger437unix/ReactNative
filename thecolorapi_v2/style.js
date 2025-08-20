import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#747679ff',
        alignItems: 'center',
        justifyContent: 'center',                  
    },    
    areaSuperior: {
        flex: 1,
        width: '80%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',              
    },    
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,       
        marginBottom: 55
    },
    output: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,       
        marginBottom: 10
    },
    btnNomeCor: {
        backgroundColor: '#ff7700',
        width: '100%',
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50       
    },
    textBtnNomeCor: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    txtCor: {
        backgroundColor: '#ebe3e3ff',
        width: '100%',
        height: 67,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#072405ff',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgba(2, 16, 11, 1)',
        padding: 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 50     
    }
});
