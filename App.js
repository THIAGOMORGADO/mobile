import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/loading';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <View >
        <Text>Open up App.js to start working on your app!</Text>

      </View>
      {/* <Loading /> */}
    </>

  );
}

