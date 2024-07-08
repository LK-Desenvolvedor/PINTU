import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/styles'; 

export default function Amigos() {
  return (
    <View style={globalStyles.container}> {/* Use o estilo global para o container */}
      <Text style={globalStyles.mainTitle}>Amigos</Text> {/* Use o estilo global para o título */}
    </View>
  );
}
