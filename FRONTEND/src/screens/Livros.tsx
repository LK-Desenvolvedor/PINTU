import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import globalStyles from '../styles/styles';

const Livros = () => {
  const [livros, setLivros] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

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

  const handleAddOrUpdateLivro = async () => {
    if (editId) {
      handleUpdateLivro();
    } else {
      handleAddLivro();
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

  const handleUpdateLivro = async () => {
    try {
      const response = await fetch(`http://localhost:5000/Livros/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const updatedLivro = await response.json();
        setLivros(livros.map(livro => livro._id === editId ? updatedLivro : livro));
        Alert.alert('Livro atualizado com sucesso!');
        clearFields();
      } else {
        Alert.alert('Erro ao atualizar livro', 'Ocorreu um erro ao atualizar o livro.');
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  const handleDeleteLivro = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/Livros/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setLivros(livros.filter(livro => livro._id !== id));
        Alert.alert('Livro deletado com sucesso!');
      } else {
        Alert.alert('Erro ao deletar livro', 'Ocorreu um erro ao deletar o livro.');
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  const handleEditLivro = (livro) => {
    setTitle(livro.title);
    setDescription(livro.description);
    setEditId(livro._id);
  };

  const clearFields = () => {
    setTitle('');
    setDescription('');
    setEditId(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Pressable onPress={() => handleEditLivro(item)} style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </Pressable>
      <Pressable onPress={() => handleDeleteLivro(item._id)} style={styles.button}>
        <Text style={styles.buttonText}>Deletar</Text>
      </Pressable>
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
        <Pressable style={styles.button} onPress={handleAddOrUpdateLivro}>
          <Text style={styles.buttonText}>{editId ? 'Atualizar Livro' : 'Adicionar Livro'}</Text>
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
    color: '#FFFFFF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4B0082',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
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
