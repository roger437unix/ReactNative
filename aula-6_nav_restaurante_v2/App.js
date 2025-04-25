import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen   from './MainScreen';
import MenuScreen   from './MenuScreen';
import Tela1        from './Tela1';
import Tela2        from './Tela2';
import Tela3        from './Tela3';
import Tela4        from './Tela4';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>

              <Stack.Screen name='Tela Principal'   options={{headerStyle: {backgroundColor: '#00aaff'}, headerTintColor: '#fff' }} component={MainScreen} />
              <Stack.Screen name='Tela de menu'     options={{headerStyle: {backgroundColor: '#ff7700'}, headerTintColor: '#fff' }} component={MenuScreen} />
              <Stack.Screen name='Tela1'            options={{headerStyle: {backgroundColor: '#ff7700'}, headerTintColor: '#fff' }} component={Tela1} />
              <Stack.Screen name='Tela2'            options={{headerStyle: {backgroundColor: '#ff7700'}, headerTintColor: '#fff' }} component={Tela2} />
              <Stack.Screen name='Tela3'            options={{headerStyle: {backgroundColor: '#ff7700'}, headerTintColor: '#fff' }} component={Tela3} />
              <Stack.Screen name='Tela4'            options={{headerStyle: {backgroundColor: '#ff7700'}, headerTintColor: '#fff' }} component={Tela4} />
              
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;