import { StyleSheet, Text, View } from 'react-native';

export default function Comunidades() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comunidades</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
