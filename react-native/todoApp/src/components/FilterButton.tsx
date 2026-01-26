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
    paddingVertical: 8,
    // paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: '#E5E7EB', // light grey
    justifyContent: 'center',
    alignContent: 'center',
    // width: '30%'
  },
  activeButton: {
    backgroundColor: '#111827', // dark
  },
  text: {
    color: '#374151',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
  },
  activeText: {
    color: '#FFFFFF',
  },
  tabWrapper: {
    flex: 1,
    paddingHorizontal: 4,
  },
});
