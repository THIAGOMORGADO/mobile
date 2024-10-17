import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/loading';
import { useEffect, useState } from 'react';
import Signin from './src/screens/Signin';
import Register from './src/screens/Register';

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);


  return (
    <>
      <StatusBar hidden />

      {loading ? <Loading /> : <Register />}
    </>

  );
}

