import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { ImageSourcePropType, FlatList } from 'react-native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { COLORS } from '../../commen/Colors';
import { API_Key, IMAGE_URL, makeGetRequest } from '../../services';
import { calcFont, calcHeight, calcWidth } from '../../utils/responsive';
import Genres from '../genres';

interface MovieCardProps {
  source: ImageSourcePropType;
}

const MovieCard = ({ item }: MovieCardProps) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigate('Details', item)}>
      <FastImage
        style={styles.image}
        source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText} numberOfLines={2}>
          {item.title}
        </Text>
        <Text>{item.release_date}</Text>
      <Genres ids={item?.genre_ids} />
      </View>
      {item.vote_average !== 0 ? (
        <Text style={styles.precantageText}>{item.vote_average}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: calcWidth(10),
    elevation: 2,
    backgroundColor: COLORS.white,
    borderRadius: calcWidth(10),
    paddingBottom: calcHeight(5),
    marginVertical: calcHeight(10),
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
  },
  image: {
    margin: calcHeight(10),
    height: calcHeight(130),
    width: calcWidth(100),
  },
  precantageText: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: COLORS.green,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: calcFont(18),
    fontWeight: 'bold',
    width: calcWidth(230),
  },
  detailsContainer: {
    justifyContent: 'space-between',
  },

});
