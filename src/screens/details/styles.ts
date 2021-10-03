import {StyleSheet} from 'react-native';
import {calcFont, calcHeight} from '../../utils/responsive';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: calcHeight(10),
  },
  overview: {
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  image: {
    width: calcHeight(150),
    height: calcHeight(250),
    alignSelf: 'center',
  },
  genres:{
    fontSize: calcFont(18),
    fontWeight: 'bold',
    marginVertical:calcHeight(10),
  },
});
