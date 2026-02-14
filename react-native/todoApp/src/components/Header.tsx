import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../utils/colors';
import { layout } from '../utils/layout';

function Header({onAdd, todoList }) {
  const addSize = layout.iconSizes.addButton;
  return (
    <View style={styles.header}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.subtitle}>October 15</Text>
      </View>
      <Text style={[styles.iconBox, { width: addSize, height: addSize, borderRadius: addSize / 2 }]} >
      +
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.background,
    width: '100%',
    minHeight: layout.heights.header,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: layout.horizontalPadding,
    paddingVertical: layout.spacing.sm,
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontSize: layout.fontSizes.title,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: layout.fontSizes.subtitle,
    marginTop: layout.spacing.xs / 2,
  },
  iconBox: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderColor: 'grey',
    // borderWidth: 10,
    textAlign: 'center'
  },
});

export default Header;
