import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Pages/LoginPage';
import Register from './src/Pages/RegisterPage';
import ForgotPassword from './src/Pages/ForgotPasswordPage';
import Cartas from './src/Pages/Cartas';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name= "Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name= "ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name= "RGPlist" component={Cartas}options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}