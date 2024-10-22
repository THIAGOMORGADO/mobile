import { StatusBar } from 'expo-status-bar';
import Loading from './src/components/loading';
import { useState } from 'react';

import Home from './src/screens/Tab/Home';
import Main from './src/screens/Main';
import Services from './src/screens/Services';



export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);


  return (
    <>
      <StatusBar hidden translucent />

      {loading ? <Loading /> : <Services />}
    </>

  );
}

