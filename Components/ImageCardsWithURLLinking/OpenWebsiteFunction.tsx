import {Linking} from 'react-native';
import React from 'react';

export default function OpenWebsiteFunction(websiteURL: string): void {
  Linking.openURL(websiteURL);
}
