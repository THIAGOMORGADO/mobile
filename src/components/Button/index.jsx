import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Button(props) {
  const [reqLoading, setReqLoading] = useState(false)


  const handlePress = () => {
    setReqLoading(true); // Desabilita o botão e mostra o loading
    props.click();       // Executa a função passada via props (ex: requisição)

    // Simula uma requisição com um tempo de espera
    setTimeout(() => {
      setReqLoading(false); // Reabilita o botão após o término
    }, 2000);
  };
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={handlePress}
      disabled={reqLoading}  // Desabilita o botão enquanto reqLoading for true
    >
      {reqLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>{props.title}</Text>}
    </TouchableOpacity>
  );

}