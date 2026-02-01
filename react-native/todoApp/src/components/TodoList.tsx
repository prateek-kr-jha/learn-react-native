import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  FlatList
} from 'react-native';
import { TodoItem } from './TodoItem';
import { TodoList } from '../data/TodoList';


function TodoContainer() {
  // return (<View style={styles.todoContainer}>
  //   {TodoList.map((({ text, completed }) => (
  //     <TodoItem
  //       text={text}
  //       done={completed}
  //       key={Math.random() * 1000}
  //     />)
  //   ))}
  // </View>);

  return (
    <FlatList
      data={TodoList}
      renderItem={({item}) => <TodoItem
        text={item.text}
        done={item.completed}
        /> }
    />
  )
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