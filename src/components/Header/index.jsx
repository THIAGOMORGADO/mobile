import { Image, View } from 'react-native';
import icons from '../../constants/icons';

export default function Header() {
  return (
    <View>
      <Image source={icons.Logo} />
    </View>
  );
}