import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {IMAGE_URL} from '../../services';
import Genres from '../../components/genres';

interface DetailsProps {
  poster_path: string;
  overview: any;
  genre_ids: any;
}

const Details = ({}: DetailsProps) => {
  const {params} = useRoute();

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{uri: `${IMAGE_URL}${params?.poster_path}`}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.overview}>Overview</Text>
      <Text>{params?.overview}</Text>
      <Text style={styles.genres}>Genres</Text>
      <Genres ids={params?.genre_ids} />
    </View>
  );
};

export default Details;
