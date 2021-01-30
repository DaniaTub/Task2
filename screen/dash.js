import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

function Dash({ navigation }) {  
      return (
        <View style={{ flex: 1, }}> 
        <TouchableOpacity
             onPress={()=>navigation.navigate('Product')}
        >
          <Text
           style={{textAlign:'center',
        color:'blue',marginTop:16}}
           >
               {'show Products'}
           </Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={()=>navigation.navigate('Old')}
        >
          <Text
           style={{textAlign:'center',
        color:'blue',marginTop:16}}
           >
               {'Rabi Task'}
           </Text>
           </TouchableOpacity>
        </View>
      );
    };

    // export as default.
    export default Dash