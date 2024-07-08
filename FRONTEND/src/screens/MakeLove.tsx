import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/styles'; // Importe os estilos globais

export default function MakeLove() {
  return (
    <View style={globalStyles.container}> {/* Use o estilo global para o container */}
      <Text style={globalStyles.mainTitle}>MakeLove</Text> {/* Use o estilo global para o título */}
    </View>
  );
}
