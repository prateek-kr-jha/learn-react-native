import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.textBox}>
        <Text>Tasks</Text>
      </View>
      <View style={styles.iconBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '2%'

  },
  textBox: {
    width: '50%',
    height: '80%',
    backgroundColor: 'white',
    // margin: '2%'
  },
  iconBox: {
    width: '20%',
    height: '80%',
    backgroundColor: 'black',
    borderRadius: '100%'
    // margin: '2%'
  }
});

export default Header;
