import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import React from 'react';
import openWebsiteFunction from './OpenWebsiteFunction';

interface ImageCardButtonProps {
  linkURL: String;
}

const ImageCardButton = (props: ImageCardButtonProps) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity
        onPress={() => {
          openWebsiteFunction(`${props.linkURL}`);
        }}
        activeOpacity={0.7}
        style={styles.button}>
        <Text style={styles.touchableOpacityText}>Know More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCardButton;

const styles = StyleSheet.create({
  buttonView: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    backgroundColor: 'grey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 12,
  },
  touchableOpacityText: {
    textAlign: 'center',
  },
});
