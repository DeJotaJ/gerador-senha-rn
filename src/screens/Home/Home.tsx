import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Style';
import { IronLogo } from '../../components/Logo/IronLogo';
import { IronTextInput } from '../../components/IronTextInput/IronTextInput';
import { IronButton } from '../../components/IronButton/IronButton';


export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <IronLogo/>
            </View>
            <View style={styles.inputContainer}>
                <IronButton/>
            </View>
            <StatusBar style="dark"/>
        </View>
    )
}

