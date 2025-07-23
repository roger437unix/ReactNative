import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image
                animation='flipInY'
                source={require('../../assets/tux3.png')}
                style={ {width: '100%'} }
                resizeMode='center'
            />
        </View>

        <Animatable.View animation='fadeInUp' delay={800} style={styles.containerForm}>
            <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
            <Text style={styles.texto}>Fala login para começar</Text>

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login') } >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
            
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3cbc3ff'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#d3cbc3ff',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#ebebeb',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 18,
    },
    texto: {
        color: '#a1a1a1ff'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#ff7700',
        width: '50%',
        paddingVertical: 8,
        borderRadius: 25,
        alignSelf: 'center',
        bottom: 60,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 18,
        color: '#fafafa',
        fontWeight: 'bold',
    },
});
