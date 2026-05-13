import React from 'react';
import {TextInput } from 'react-native';

import { styles } from './IronTextInputStyle';

interface IronTextInputProps {
    pass:string
}

export function IronTextInput(props: IronTextInputProps ) {
  return (
        <TextInput
            style={styles.inputer}
            placeholder='Password'
            placeholderTextColor={'#375f8d'}
            value={props.pass}
        >
        </TextInput>
  );
}