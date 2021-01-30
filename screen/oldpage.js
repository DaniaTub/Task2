import React, { useState } from 'react'
import { TextInput,Button,View } from 'react-native';

function Oldpage ({ navigation }) {
    const [text, setText] = useState('');
    
      return (
        <View style={{ flex: 1 }}> 
          <TextInput
           placeholder="Type here "  
            onChangeText={setText} 
            />
          <Button
            title="Done"
            onPress={() => {
              //navigation.navigate('Das',{txt:text})
            } } 
            />
        </View>
      );
    };

    // export as default.
    export default Oldpage;