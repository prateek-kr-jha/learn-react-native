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
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
    width: '100%',
    height: '15%',
  },
});

export default Header;
