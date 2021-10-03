import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {COLORS} from '../../commen/Colors';
import {calcFont, calcHeight} from '../../utils/responsive';

import Popular from './popular';
import TopRated from './topRated';
import Upcoming from './upcoming';

const Movies = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <SegmentedControlTab
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        selectedIndex={selectedIndex}
        allowFontScaling={false}
        values={['Upcoming', 'Pupular', 'TopRated']}
        onTabPress={index => setSelectedIndex(index)}
        borderRadius={calcHeight(50)}
      />
      <View style={styles.container}>
        {selectedIndex === 0 && <Upcoming />}
        {selectedIndex === 1 && <Popular />}
        {selectedIndex === 2 && <TopRated />}
      </View>
    </View>
  );
};
export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  tabStyle: {
    height: calcHeight(50),
    borderRadius: calcHeight(50),
    backgroundColor: COLORS.gray,
    borderWidth: 0,
    marginHorizontal: calcHeight(5),
  },
  tabTextStyle: {
    color: COLORS.black,
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  activeTabStyle: {
    backgroundColor: COLORS.green,
    elevation: 3,
    shadowColor: COLORS.green,
    marginLeft: calcHeight(5),
  },
  activeTabTextStyle: {
    color: COLORS.white,
  },
});
