import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/styles';

export default function Jogos() {
  return (
    <View style={globalStyles.container}> {/* Use o estilo global para o container */}
      <Text style={globalStyles.mainTitle}>Jogos</Text> {/* Use o estilo global para o título */}
    </View>
  );
}
