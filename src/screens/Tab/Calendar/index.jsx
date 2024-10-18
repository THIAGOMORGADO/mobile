import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

import { appointments } from '../../../constants/data'
import icons from '../../../constants/icons'
import DoctorItemList from '../../../components/DoctorItemList';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <Text>Tab Calendar</Text>


      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id_appointment}
        renderItem={({ item }) => (
          <Text>{item.service}</Text>
        )}

      />
    </View>
  );
}