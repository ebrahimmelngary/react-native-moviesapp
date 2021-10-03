import * as React from 'react';
import {View} from 'react-native';
import MoviesList from '../../components/moviesList';
import Spinner from '../../components/Spinner';
import {API_Key, makeGetRequest} from '../../services';
import styles from './styles';

interface TopRatedProps {}

const TopRated = ({}: TopRatedProps) => {
  const [data, setData] = React.useState<Array<any>>([]);
  const [page, setPage] = React.useState<number>(1);
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [loadingExtraData, setLoadingExtraData] = React.useState(false);

  const loadData = async () => {
    try {
      setIsloading(true);
      await makeGetRequest({
        url: `/movie/top_rated?api_key=${API_Key}&language=en-US&page=${page}`,
      }).then(response => {
        if (response.status === 200) {
          if (page > response?.total_pages) {
            setLoadingExtraData(false);
          }
          setIsloading(false);
          setPage(page + 1);
          setData(
            page === 1
              ? response?.data?.results
              : [...data, ...response?.data?.results],
          );
        }
        setIsloading(false);
      });
    } catch (error) {
      setIsloading(false);
    }
  };
  React.useEffect(() => {
    loadData();
  }, []);

  const onEndReached = () => {
    if (!loadingExtraData) {
      setPage(page + 1);
      loadData();
    }
  };
  console.log('page', page);
  return (
    <View style={styles.container}>
      {isLoading && <Spinner />}
      <MoviesList data={data} onEndReached={onEndReached} />
    </View>
  );
};

export default React.memo(TopRated);
