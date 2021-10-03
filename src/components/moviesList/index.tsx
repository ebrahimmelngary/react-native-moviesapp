import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { calcHeight } from '../../utils/responsive';
import MovieCard from '../movieCard';

interface MoviesListProps {
  onEndReached: () => void;
  data: [];
}

const MoviesList = ({ data, onEndReached }: MoviesListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MovieCard item={item} />}
        keyExtractor={(item, index) => item + index.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        extraData={data}
      />
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: calcHeight(10),
  },
});
