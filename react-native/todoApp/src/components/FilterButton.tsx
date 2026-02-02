// Allowed values
// Only three values are valid:

// All
// Pending
// Completed
// TypeScript concept to use
// A union of string literals.

// Why
// Prevents invalid filters
// Enables autocomplete
// Makes logic exhaustive and safe
// Mental rule
// A filter can only be one of the allowed options — nothing else
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FilterType } from './Filter';
import { colors } from '../utils/colors';
import { layout } from '../utils/layout';

type FilterButtonProps = {
  label: string;
  value: FilterType;
  activeFilterType: FilterType;
  onPress: (value: FilterType) => void;
};

export function FilterButton({
  label,
  value,
  activeFilterType,
  onPress,
}: FilterButtonProps) {
  const isActive = value === activeFilterType;

  return (
    <Pressable onPress={() => onPress(value)} style={styles.tabWrapper}>
      <View style={[styles.button, isActive && styles.activeButton]}>
        <Text style={[styles.text, isActive && styles.activeText]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: layout.spacing.sm,
    minHeight: layout.heights.filterButton,
    borderRadius: layout.radii.pill,
    backgroundColor: colors.filterInactive,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.filterInactiveText,
    fontWeight: '500',
    fontSize: layout.fontSizes.filter,
    textAlign: 'center',
  },
  activeText: {
    color: colors.primaryText,
  },
  tabWrapper: {
    flex: 1,
    paddingHorizontal: layout.spacing.xs,
  },
});
