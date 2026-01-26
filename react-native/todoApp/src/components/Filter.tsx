import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { FilterButton } from './FilterButton';


export type FilterType = 'all' | 'pending' | 'completed';

const FILTERS: readonly {label: string; value: FilterType}[] = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed'},
];

function Filter() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  return (
    <View style={styles.footer}>
      {FILTERS.map(({ label, value }) => (
        <FilterButton
          label={label}
          value={value}
          activeFilterType={activeFilter}
          onPress={setActiveFilter}
          key={value}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',

    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    padding: 6,
    borderRadius: 999,

    width: '90%', // controls equal-width tabs

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    // Android shadow
    elevation: 6,
  },
});

export default Filter;
