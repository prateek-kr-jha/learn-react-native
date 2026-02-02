import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';


export function TodoItem({text, done}) {

    return (
        <View style={styles.todoItem}>
            <BouncyCheckbox onPress={(isChecked: boolean) => {
                console.log(isChecked);
            }}
            text={text}
            textStyle={{    marginLeft: 1,
              color: '#111827',
              fontSize: 16,}}
            innerIconStyle= {{
                borderRadius: 5,
                borderColor: '#CCCCCC',
                width: 24
            }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#F0F8A4',
    width: '100%',
    paddingVertical: 12,
    marginVertical: 6,
    // borderWidth: 1,
    // borderColor: 'black',
    minHeight: 50,
    paddingLeft: 15,
    
  },
  

});
