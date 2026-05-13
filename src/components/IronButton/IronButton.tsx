import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';
import { styles } from './IronButtonStyle';
import { IronTextInput } from '../IronTextInput/IronTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function IronButton() {

    const [pass, setPass] = React.useState('');

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

    return (
        <>
            <IronTextInput pass={pass}/>
            <Pressable 
                style={styles.button}
                onPress={handleGenerateButton}
            >
                <Text style={styles.text}> GERAR SENHA </Text>
            </Pressable>
            <Pressable 
                style={styles.button}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}> COPIAR </Text>
            </Pressable>
        </>
    )
}