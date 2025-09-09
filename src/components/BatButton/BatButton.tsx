import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import { BatTextInput } from '../BatTextInput/BatTextInput';

import * as Clipboad from 'expo-clipboard';

import { styles } from './BatButtonStyles';

export function BatButton() {
    const [pass, setPass] = useState('')

    function hadleGenerateButton(){
        let generateToken = generatePass();
        setPass(generateToken);
    }

    function handleCopyButton(){
        Clipboad.setStringAsync(pass)
    } 
  return (
    <>
        <BatTextInput pass={pass}/>

        <Pressable onPress={hadleGenerateButton}
            style={styles.button}>
            <Text style={styles.text}> GENERATE</Text>
        </Pressable>
        <Pressable onPress={handleCopyButton}
            style={styles.button}>
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>
    </>
  );
}

function generatePass() {
    throw new Error('Function not implemented.');
}
