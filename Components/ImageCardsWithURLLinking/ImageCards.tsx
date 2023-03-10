import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ImageCard from './ImageCard';
import React, {useState} from 'react';

const ImageCards = () => {
  return (
    <View>
      <Text style={styles.headerStyle}>ImageCards</Text>
      <ScrollView horizontal style={styles.container}>
        <ImageCard
          company="Tesla"
          model="Model S"
          description="Tesla's flagship luxury sedan with sleek design, all-electric powertrain, and advanced features like Autopilot and Ludicrous mode for quick acceleration."
          uri="https://images.unsplash.com/photo-1536700503339-1e4b06520771"
          linkURL="https://www.tesla.com/models/design#overview"
        />
        <ImageCard
          company="Tesla"
          model="Model 3"
          description="A more affordable, compact sedan with a minimalist design, impressive range, and advanced technology features like Autopilot and over-the-air updates."
          uri="https://images.unsplash.com/photo-1561580125-028ee3bd62eb"
          linkURL="https://www.tesla.com/model3/design#overview"
        />
        <ImageCard
          company="Tesla"
          model="Model X"
          description="The Tesla Model X is a luxury electric SUV with seating for up to seven passengers. It features a range of up to 371 miles on a single charge, depending on the battery."
          uri="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5"
          linkURL="https://www.tesla.com/modelx/design#overview"
        />
        <ImageCard
          company="Tesla"
          model="Model Y"
          description="A crossover SUV that shares many features with the Model 3 but offers more space, a higher driving position, and optional third-row seats."
          uri="https://images.unsplash.com/photo-1600661653561-629509216228"
          linkURL="https://www.tesla.com/modely/design#overview"
        />
      </ScrollView>
    </View>
  );
};

export default ImageCards;

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
    flexWrap: 'wrap',
  },
});
