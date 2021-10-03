import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { COLORS } from '../../commen/Colors';
import { calcHeight, calcWidth } from '../../utils/responsive';

const Spinner = ({style}: ViewStyle) => (
  <View style={[styles.container, style]}>
    <ActivityIndicator animating size="small" color={COLORS.green} />
  </View>
);

export default Spinner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    shadowOffset: {height: 0.5, width: 0.5},
    elevation: 3,
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'center',
    borderRadius: calcWidth(17.5),
    width: calcWidth(35),
    height: calcWidth(35),
    marginTop: calcHeight(10),
  },
});
