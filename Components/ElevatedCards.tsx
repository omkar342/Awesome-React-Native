import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headerText}>ElevatedCards</Text>
      <ScrollView style={styles.container} horizontal>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>!</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
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
  elevatedCards: {
    backgroundColor: '#25D366',
    elevation: 5,
    shadowOffset: {
      width: 20,
      height: 2,
    },
    shadowColor: '#ff000',
    shadowRadius: 5,
    shadowOpacity: 1,
  },
});
