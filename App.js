import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import MeteorScreen from './screens/Meteor';
import ISSlocationScreen from './screens/ISSlocation';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} >
      <Stack.Screen name="Home" component={HomeScreen}/> 
      <Stack.Screen name="Meteor" component={MeteorScreen}/>
      <Stack.Screen name="ISSlocation" component={ISSlocationScreen}/>
    </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator()
