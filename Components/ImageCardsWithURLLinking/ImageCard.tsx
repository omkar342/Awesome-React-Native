import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Linking,
} from 'react-native';
import React from 'react';
import ImageCardButton from './ImageCardButton';
import openWebsiteFunction from './OpenWebsiteFunction';

interface ImageCardProps {
  company: String;
  uri: String;
  model: String;
  description: String;
  linkURL: String;
}

const ImageCard = (props: ImageCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.card, styles.cardImage]}
      onPress={() => {
        openWebsiteFunction(`${props.linkURL}`);
      }}>
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
      <ImageCardButton linkURL={`${props.linkURL}`} />
    </TouchableOpacity>
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
    elevation: 29,
    margin: 10,
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
    margin: 15,
    elevation: 3,
    shadowOffset: {
      width: 100,
      height: 100,
    },
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 250,
    height: 200,
  },
});
