import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Settings() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Settings</Text>      

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
    color: '#5a310dff'
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#011616ff',
    marginTop: 200
  }
});
