import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/styles'; 

export default function Livros() {
  return (
    <View style={globalStyles.container}> {/* Use o estilo global para o container */}
      <Text style={globalStyles.mainTitle}>Livros</Text> {/* Use o estilo global para o título */}
    </View>
  );
}
