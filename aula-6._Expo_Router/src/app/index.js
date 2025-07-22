import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Homepage() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Homepage</Text>

      <Link href={'/page2'} style={styles.link}>Ir para Página 2</Link>

      <Link href={'/user'} style={styles.link}>Ir para página User</Link>

      <Link href={'/dashboard'} style={styles.link}>Ir para Painel</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#3209c5ff',
    marginBottom: 50
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#011616ff',
    marginTop: 15
  }
});
