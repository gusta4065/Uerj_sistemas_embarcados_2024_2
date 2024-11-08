import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateWorkoutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View> 
            <Text>Divisão do treino</Text>

        </View>
      </View>
      <Text>Tela para criar um novo treino</Text>
      {/* Adicione aqui os campos de formulário para criar um treino */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9dbdb',
    width: 400,
    height: 180,
    borderRadius: 8,
  }
});

export default CreateWorkoutScreen;
