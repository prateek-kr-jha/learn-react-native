/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Modal,
  Button,
  Alert
} from 'react-native';
import { useState } from 'react';

import TodoList from '../components/TodoList/TodoList';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import { initialTodo } from '../data/initialTodo';
import AddTodoModal from '../components/AddTodoModal/AddTodoModal';
function TodoScreen() {
  const [todoListData, setTodoListData] = useState(initialTodo);
  const [showModal, setShowModal] = useState(false);


  const toggleTodoStatus = (todoId: number) => {
    const newTodoList = todoListData.map((todo) => {
      if(todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    
    setTodoListData(newTodoList);
  }

  const toggleModalVisibility = () => {
    setShowModal(!showModal)
  }
  const addTodo = () => {

  }
  return (
    <View style={styles.container}>
      <Header openModal={() => setShowModal(!showModal)} />
      <AddTodoModal showModal={showModal} />
      <TodoList
        toggleTodoStatus={toggleTodoStatus}
        todoList={todoListData}
      />
      <Filter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    // backgroundColor: '#',
  },
});

export default TodoScreen;
