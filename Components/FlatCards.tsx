import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headerStyle}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.orangeCard]}>
          <Text>Orange</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 10,
  },
  redCard: {backgroundColor: 'red'},
  orangeCard: {backgroundColor: 'orange'},
  greenCard: {backgroundColor: 'green'},
});
