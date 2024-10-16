import { Image, Text, View } from 'react-native';
import icons from '../../constants/icons';
import { styles } from './styles';
import Header from '../../components/Header';

export default function Signin() {
  const name = 'thiago morgado'

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}