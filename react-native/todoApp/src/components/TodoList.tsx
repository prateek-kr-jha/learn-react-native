import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

function TodoContainer() {
  return <View style={styles.todoContainer}></View>;
}

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: '75%',
  },
});

export default TodoContainer;
