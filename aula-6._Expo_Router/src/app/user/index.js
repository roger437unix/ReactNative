import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function User() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Página user</Text>

      <Link href={'/'} style={styles.link}>Voltar para Homepage</Link>

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
    color: '#146d28ff'
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#011616ff',
    marginTop: 200
  }
});
