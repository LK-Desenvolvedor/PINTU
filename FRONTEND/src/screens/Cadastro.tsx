import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/styles';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Cadastro realizado com sucesso!', `Nome: ${data.name}\nEmail: ${data.email}`);
      } else {
        Alert.alert('Erro ao cadastrar', data.message || 'Ocorreu um erro.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainTitle}>Cadastro</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Nome"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleSignUp}>
        <Text style={globalStyles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
