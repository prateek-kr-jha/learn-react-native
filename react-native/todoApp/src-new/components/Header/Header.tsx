import { View, StyleSheet, Pressable, Text } from 'react-native';

function Header({ openModal }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.addButton} onPress={openModal}>
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    // backgroundColor: '#FF6347',

    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    height: 30,
    width: 30,
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
