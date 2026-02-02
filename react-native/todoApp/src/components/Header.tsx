import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../utils/colors';
import { layout } from '../utils/layout';

function Header() {
  const addSize = layout.iconSizes.addButton;
  return (
    <View style={styles.header}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.subtitle}>October 15</Text>
      </View>
      <View style={[styles.iconBox, { width: addSize, height: addSize, borderRadius: addSize / 2 }]} />
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
    backgroundColor: colors.primary,
  },
});

export default Header;
