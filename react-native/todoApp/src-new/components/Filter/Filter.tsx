import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FilterButton } from './FilterButton';
import { colors } from '../../utils/colors';
import { layout } from '../../utils/layout';


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
    bottom: layout.filterBar.bottom,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.background,
    padding: layout.filterBar.padding,
    borderRadius: layout.radii.pill,
    width: layout.screenWidth * layout.filterBar.widthPercent,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
});

export default Filter;
