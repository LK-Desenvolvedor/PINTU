import { StyleSheet, Text, View } from 'react-native';

export default function Segurança() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segurança</Text>
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
