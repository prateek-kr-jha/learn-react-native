 import { useState } from 'react';
import { View, Modal, StyleSheet, Alert, Text, Pressable, Button, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import {  } from 'react-native/types_generated/index';

 
//   {
//     id: 3,
//     text: 'cook',
//     completed: true,
//     created_dt: currentDate,
//     due_dt: currentDate,
//   },

 function AddTodoModal({ showModal, toggleModalVisibility, addTodo }) {
   const safeInset = useSafeAreaInsets();
   const [todoTitle, setTodoTitle] = useState('');
   const [completedStatus, setCompletedStatus] = useState(false);
   const [createdDt, setCreatedDt] = useState(Date());
   const [dueDt, setDueDt] = useState(Date());
    // const todo = {
    //     text: 'there',
    //     completed: true,
    //     created_dt: createdDt,
    //     due_dt: dueDt
    // }
   return (
     <Modal
       animationType="slide"
       // transparent={true}
       visible={showModal}
       onRequestClose={() => {
         Alert.alert('Modal has been closed.');
       }}
     >
       <View
         style={[
           styles.center,
           {
             paddingTop: safeInset.top,
           },
         ]}
       >
         <View style={{ height: '30', backgroundColor: 'grey' }}>
           <Pressable
             onPress={toggleModalVisibility}
             style={styles.cancelButton}
           >
             <Text style={{ fontSize: 15 }}>Cancel</Text>
           </Pressable>
         </View>
         <View style={styles.modal}>
            <TextInput onChangeText={setTodoTitle} style={styles.input} value={todoTitle} />
            <TextInput onChangeText={setTodoTitle} style={styles.input} value={todoTitle} />
            {/* <TextInput onChange={setDueDt} style={styles.input} value={dueDt} /> */}
           <Button title='add' onPress={() => {
            addTodo({
              text: todoTitle,
              completed: completedStatus,
              created_dt: createdDt,
              due_dt: dueDt
            })
            setTodoTitle('')
            toggleModalVisibility()
            }} />
         </View>
       </View>
     </Modal>
   );
 }

const styles = StyleSheet.create({

  center: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#87CEEB'
  },
  modal: {
    // height: '30%',
    flex: 1,
    width: '100%',

  justifyContent: 'space-around',
  alignItems: 'center',
    backgroundColor: "#777777",
    
  },
  cancelButton: {
    backgroundColor: 'white',
    textAlign: 'center',
    

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
});

export default AddTodoModal;