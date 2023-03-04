import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import ImageCards from './Components/ImageCardsWithURLLinking/ImageCards';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <ScrollView style={{backgroundColor: '#075E54'}}>
        <View>
          <FlatCards />
          <ElevatedCards />
          <ImageCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default App;
