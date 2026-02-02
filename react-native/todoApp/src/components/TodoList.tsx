import { StyleSheet, FlatList } from 'react-native';
import { TodoItem } from './TodoItem';
import { TodoList } from '../data/TodoList';
import { layout } from '../utils/layout';

function TodoContainer() {
  return (
    <FlatList
      data={TodoList}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => (
        <TodoItem text={item.text} done={item.completed} />
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