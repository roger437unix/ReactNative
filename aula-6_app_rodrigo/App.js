import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormularioRegistro from './FormularioRegistro';
import TelaConfirmacao from './TelaConfirmacao';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Registro" component={FormularioRegistro} />
                <Stack.Screen name="Confirmação" component={TelaConfirmacao} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

/*
instalar todas as dependencias:
npx expo install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-safe-area-context @react-native-community/masked-view

*/