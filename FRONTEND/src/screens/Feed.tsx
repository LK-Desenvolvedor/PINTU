import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe o ícone do Ionicons
import globalStyles from '../styles/styles'; // Importe os estilos globais aqui

export default function Feed() {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    // Lógica para postar (será implementada posteriormente com o backend)
    console.log('Postar:', postText);
    setPostText('');
  };

  return (
    <View style={globalStyles.container}> {/* Use o estilo global para o container */}
      <Text style={globalStyles.mainTitle}>Feed</Text> {/* Use o estilo global para o título */}
      <View style={styles.postInputContainer}>
        <TextInput
          style={styles.postInput}
          placeholder="O que você está pensando?"
          placeholderTextColor="#ccc"
          value={postText}
          onChangeText={setPostText}
        />
        <TouchableOpacity style={styles.imageButton}>
          <Ionicons name="image-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={globalStyles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsContainer}>
        <Text style={styles.postsTitle}>Postagens Recentes</Text>
        {/* FlatList para exibir as postagens (atualmente vazia) */}
        <FlatList
          data={[]} // Lista de postagens, será preenchida quando o backend estiver disponível
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postItem}>
              <Text style={styles.postText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%', // Diminuir a largura para deixar espaço nas laterais
    alignSelf: 'center', // Centralizar horizontalmente
  },
  postInput: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  imageButton: {
    marginLeft: 10,
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButton: {
    marginLeft: 10,
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postsContainer: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    padding: 10,
    borderRadius: 10,
    width: '90%', // Diminuir a largura para deixar espaço nas laterais
    alignSelf: 'center', // Centralizar horizontalmente
    marginVertical: 20,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  postItem: {
    backgroundColor: '#3e3e3e',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  postText: {
    color: '#fff',
  },
});
