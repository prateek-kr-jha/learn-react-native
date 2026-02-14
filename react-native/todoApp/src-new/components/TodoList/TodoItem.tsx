import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';


export function TodoItem({text, done, created_dt, uniqueId, toggleTodoStatus, key }) {
  const [checkStatus, setCheckStatus] = useState(done);

    return (
      <View style={styles.todoItem}>
        <BouncyCheckbox
          onPress={() => {
            setCheckStatus(!checkStatus);
            toggleTodoStatus(uniqueId)
            
          }}
          disableText
          text={text}
          isChecked={checkStatus}
          textStyle={{
            marginLeft: 1,
            color: '#111827',
            fontSize: 16,
          }}
          innerIconStyle={styles.iconStyle}
          iconStyle={
            checkStatus ? styles.innerIconChecked : styles.innerIconUnchecked
          }
        />
        <View>
            <Text>{text}</Text>
            <Text>{created_dt.toString()}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
    width: '100%',
    paddingVertical: 12,
    marginVertical: 6,
    flex: 1,
    minHeight: 50,
    paddingLeft: 15,
  },
  innerIconChecked: {
    borderRadius: 5,
    borderColor: '#CCCCCC',
    width: 24,
    backgroundColor: '#20B2AA',
  },
  innerIconUnchecked: {
    borderRadius: 5,
    borderColor: '#CCCCCC',
    width: 24,

  },
  iconStyle: {
    borderRadius: 5,
    borderColor: '#CCCCCC',
    width: 24,
  },
});
