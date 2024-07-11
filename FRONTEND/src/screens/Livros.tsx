import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import globalStyles from '../styles/styles';

const Livros = () => {
  const [livros, setLivros] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    try {
      const response = await fetch('http://localhost:5000/Livros');
      if (response.ok) {
        const data = await response.json();
        setLivros(data);
      } else {
        console.log('Erro ao obter livros:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
    }
  };

  const handleAddLivro = async () => {
    try {
      const response = await fetch('http://localhost:5000/Livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const data = await response.json();
        setLivros([...livros, data]);
        Alert.alert('Livro adicionado com sucesso!');
        clearFields();
      } else {
        Alert.alert('Erro ao adicionar livro', 'Ocorreu um erro ao adicionar o livro.');
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  const clearFields = () => {
    setTitle('');
    setDescription('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainTitle}>Livros</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />
        <Pressable style={styles.button} onPress={handleAddLivro}>
          <Text>Adicionar Livro</Text>
        </Pressable>
      </View>
      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default Livros;
