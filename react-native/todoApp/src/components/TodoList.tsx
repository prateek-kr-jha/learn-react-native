import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { TodoItem } from './TodoItem';
import { TodoList } from '../data/TodoList';

function TodoContainer() {
  return (<View style={styles.todoContainer}>
    {TodoList.map((({ text, completed }) => (
      <TodoItem
        text={text}
        done={completed}
      />)
    ))}
  </View>);
}

const styles = StyleSheet.create({
  todoContainer: {
    // backgroundColor: 'blue',
    width: '100%',
    height: '75%',
  },
});

export default TodoContainer;


    // <View style={styles.footer}>
    //   {FILTERS.map(({ label, value }) => (
    //     <FilterButton
    //       label={label}
    //       value={value}
    //       activeFilterType={activeFilter}
    //       onPress={setActiveFilter}
    //       key={value}
    //     />
    //   ))}
    // </View>