import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  console.log('isDark', isDarkMode);
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <View style={styles.viewStyles}>
        {isDarkMode ? (
          <Text style={styles.whiteColor}>Dark</Text>
        ) : (
          <Text style={styles.blackColor}>Light</Text>
        )}
        <Button title="App1" color="#ff0000" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    // flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  whiteColor: {
    color: '#ffffff',
  },
  blackColor: {
    color: '#808080',
  },
});

export default App;
