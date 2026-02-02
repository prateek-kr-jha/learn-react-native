import { StyleSheet, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';
import { TodoList } from '../data/TodoList';
import { layout } from '../utils/layout';
import { useState } from 'react';

function TodoContainer() {
  const [todoList, setTodoList] = useState(TodoList);
  console.log(todoList, "-------------")
  function changeTodoStatus(id) {
    const updatedTodoList = todoList.map(item => {
      if(item.id === id) item.completed = !item.completed
      return item;
    })
    setTodoList(updatedTodoList);
  }
  return (
    <FlatList
      data={todoList}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => (
        <TodoItem text={item.text} done={item.completed} created_dt={item.created_dt} uniqueId={item.id} onToggle={changeTodoStatus} />
      )}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: layout.horizontalPadding,
    paddingTop: layout.spacing.sm,
    paddingBottom: layout.heights.filterButton + layout.filterBar.bottom + layout.spacing.lg,
  },
});

export default TodoContainer;