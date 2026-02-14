import { StyleSheet, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';
import { layout } from '../../utils/layout';
import { useState } from 'react';

function TodoContainer({todoList, toggleTodoStatus}) {
  
  console.log(todoList, "-------------")

  return (
    <FlatList
      data={todoList}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => (
        <TodoItem text={item.text} done={item.completed} created_dt={item.created_dt} toggleTodoStatus={toggleTodoStatus} uniqueId={item.id} />
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