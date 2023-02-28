import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

interface ImageCardProps {
  company: String;
  uri: String;
  model: String;
  description: String;
}

const ImageCard = (props: ImageCardProps) => {
  return (
    <View style={[styles.card, styles.cardImage]}>
      <Image
        style={styles.image}
        source={{
          uri: `${props.uri}`,
        }}
      />
      <View style={styles.textCard}>
        <Text style={styles.cardTitle}>{props.company}</Text>
        <Text>{props.model}</Text>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  card: {
    width: 250,
    // height: 300,
    backgroundColor: '#000',
    // padding: '0 0 ',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textCard: {
    padding: 10,
  },
  cardImage: {
    margin: 6,
    elevation: 3,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 250,
    height: 200,
  },
});
