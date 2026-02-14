 import { View, Modal, StyleSheet, Alert, Text } from 'react-native';
 
 function AddTodoModal({ showModal }) {
    return (
        <Modal
        animationType="slide"
        // transparent={true}
        visible={showModal}
        
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.center}>
        <View style={styles.modal}>
        <Text>
          In convallis faucibus felis, eget blandit nisi. Phasellus facilisis
          neque nec aliquet volutpat. Aliquam justo magna, fringilla at mattis
          a, venenatis et tellus. Etiam nec maximus turpis, sed convallis lacus.
          Ut nec ipsum fringilla, sollicitudin mauris non, suscipit sapien.
          Donec dui velit, scelerisque non lorem id, rutrum gravida dui. Cras
          egestas varius quam, eget tempor lorem sollicitudin sed. Morbi aliquam
          ipsum eget tortor accumsan malesuada vitae quis nulla.
        </Text>

        </View>

        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({

  center: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    height: '30%',
    width: '80%',

  justifyContent: 'center',
  alignItems: 'center',
    backgroundColor: "#777777"
  }
});

export default AddTodoModal;