import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './IronLogoStyles';

import ironLogo from '../../../assets/iron-logo.png';

export function IronLogo() {
  return (
    <>
        <Image 
            source={ironLogo} 
            style={{
                resizeMode:'contain', 
                height:180
            }}
        />
        <Text style={styles.title}> IRON PASS </Text>
        <Text style={styles.title}> G E N E R A T O R </Text>
    </>
  );
}