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
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useState } from 'react';
import Filter from './src/components/Filter';
import Header from './src/components/Header';
import TodoContainer from './src/components/TodoList'; 
// import { TodoList } from './src/data/TodoList'
import  TodoScreen from './src-new/screens/TodoScreen';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TodoScreen />
    </SafeAreaProvider>
  );
}


export default App;
