 import { useState } from 'react';
import { View, Modal, StyleSheet, Alert, Text, Pressable, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

 
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
   const [createdDt, setCreatedDt] = useState(Date.now());
   const [dueDt, setDueDt] = useState(Date.now());
    const todo = {
        text: 'there',
        completed: true,
        created_dt: createdDt,
        due_dt: dueDt
    }
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
           {/* <Text>
             In convallis faucibus felis, eget blandit nisi. Phasellus facilisis
             neque nec aliquet volutpat. Aliquam justo magna, fringilla at
             mattis a, venenatis et tellus. Etiam nec maximus turpis, sed
             convallis lacus. Ut nec ipsum fringilla, sollicitudin mauris non,
             suscipit sapien. Donec dui velit, scelerisque non lorem id, rutrum
             gravida dui. Cras egestas varius quam, eget tempor lorem
             sollicitudin sed. Morbi aliquam ipsum eget tortor accumsan
             malesuada vitae quis nulla.
           </Text> */}
           <Button title='add' onPress={() => {
            addTodo(todo)
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

  justifyContent: 'center',
  alignItems: 'center',
    backgroundColor: "#777777",
    
  },
  cancelButton: {
    backgroundColor: 'white',
    textAlign: 'center',
    

  }
});

export default AddTodoModal;