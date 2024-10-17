import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';


import { Feather } from '@expo/vector-icons'
import { COLORS, FONT_SIZE } from '../../constants/theme';

export default function Register() {
  const name = 'thiago morgado'

  function handleSignIn() { }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Header />
      </View>
      <View style={styles.formGroup}>

        <View style={styles.inputArea}>
          <Feather name="user" size={FONT_SIZE.md} color={COLORS.gray3} />
          <TextInput placeholder="name" style={styles.input} color={COLORS.gray3} />
        </View>

        <View style={styles.inputArea}>
          <Feather name="mail" size={FONT_SIZE.md} color={COLORS.gray3} />
          <TextInput placeholder="Email" style={styles.input} color={COLORS.gray3} />
        </View>

        <View style={styles.inputArea}>
          <Feather name="lock" size={FONT_SIZE.md} color={COLORS.gray3} />
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
        </View>

        <Button title="Acessar" click={handleSignIn} />
      </View>

      <View style={styles.footerArea}>
        <Text>Ja tem conta.</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Fazer Login</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}