import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

function ButtonComponent(props: ButtonProps) {
  const message = () => {
    alert('Hi')
  }
  return (
    <>
    <TouchableOpacity>
      <Button title={props.title} onPress={message} />
    </TouchableOpacity>
    </>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>React App</Text>
      <ButtonComponent title="Click here"/>
      <StatusBar translucent style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'flex-end'
  }
});
