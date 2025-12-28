import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import AntDesign from '@react-native-vector-icons/ant-design';
import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed qui
          laboriosam ipsum praesentium.
        </Text>

        <View style={{ flexDirection: 'row', gap: 16, marginTop: 20 }}>
          <AntDesign name="home" size={30} color="black" />
          <Ionicons name="settings-outline" size={30} color="blue" />
          <MaterialCommunityIcons
            name="camera-outline"
            size={30}
            color="green"
          />
          <FontAwesome6 name="plane" iconStyle="solid" size={30} color="red" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
