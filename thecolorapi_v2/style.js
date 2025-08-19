import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',                  
    },
    areaSuperior: {
        flex: 1,        
        alignItems: 'center',
        justifyContent: 'center',              
    },    
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 40
    },
    btnNomeCor: {
        backgroundColor: '#ff7700',
        width: '60%',
        height: 50,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50       
    },
    textBtnNomeCor: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    txtCor: {
        backgroundColor: '#aaa',
        width: '90%',
        height: 60,
        borderRadius: 10,
        fontSize: 20,
        color: 'rgba(2, 16, 11, 1)',
        padding: 20,
        textAlign: 'center',
        marginBottom: 50     
    }
});
