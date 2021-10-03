
import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const calcWidth = (size) => (width / guidelineBaseWidth) * size;
export const calcHeight = (size) => (height / guidelineBaseHeight) * size;
export const calcFont = (size) => {
  //812 is the height for iphoneX as this is the stable and our design
  return PixelRatio.roundToNearestPixel(
    (size - 1) * (height / guidelineBaseHeight),
  );
};