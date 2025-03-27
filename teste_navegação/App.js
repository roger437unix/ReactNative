import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import Tela4 from './Tela4';

const Stack = createStackNavigator();
    
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='Tela principal' component={Tela1} />
                <Stack.Screen name='Tela2' component={Tela2} />
                <Stack.Screen name='Tela3' component={Tela3} />
                <Stack.Screen name='Tela4' component={Tela4} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

/*
instalar todas as dependencias:
npx expo install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-safe-area-context @react-native-community/masked-view

*/