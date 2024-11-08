import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './(tabs)/Home';
import CreateWorkoutScreen from './(tabs)/Createworkout';
import ProfileScreen from './(tabs)/Profile';

export type RootStackParamList = {
  Home: undefined;
  CreateWorkout: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meus Treinos' }} />
        <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} options={{ title: 'Criar Treino' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
