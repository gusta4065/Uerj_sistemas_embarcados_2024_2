import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

interface Workout {
  id: string;
  title: string;
  description: string;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    // Exemplo de treinos (pode ser substituído por uma chamada a uma API)
    setWorkouts([
      { id: '1', title: 'Treino de Pernas', description: 'Exercícios para fortalecimento das pernos.' },
      { id: '2', title: 'Treino de Braços', description: 'Exercícios para bíceps e tríceps.' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <View style={styles.action_buttonsContainer}>
              <TouchableOpacity ><Text style={styles.action_button} >editar</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.action_button} >excluir</Text></TouchableOpacity>
            </View>
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum treino disponível.</Text>}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateWorkout')}
        >
          <Text style={styles.buttonText}>Criar Novo Treino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  workoutItem: {
    position: 'relative',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  action_buttonsContainer: {
    flex:1,
    flexDirection: 'column',
    alignItems : 'flex-end',
    marginTop: 20,
    left: '90%',
    position: 'absolute',
    bottom: 4,
  },
  
  action_button: {
    backgroundColor: '#007A5F',
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 8,
    margin:'auto',
    marginBottom: 5,
    position: 'relative',
    bottom: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
