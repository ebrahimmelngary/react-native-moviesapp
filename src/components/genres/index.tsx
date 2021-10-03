import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../../commen/Colors';
import { API_Key, makeGetRequest } from '../../services';
import { calcHeight, calcWidth } from '../../utils/responsive';

interface GenresProps {
    ids: any
}

const Genres = ({ ids }: GenresProps) => {
    const [genres, setGenres] = React.useState([]);

    let intersection = genres?.filter(x => {
        return ids?.includes(x.id);
    });
    React.useEffect(() => {
        getGenre();
    }, []);

    const getGenre = async () => {
        try {
            await makeGetRequest({
                url: `/genre/movie/list?api_key=${API_Key}&language=en-US`,
            }).then(response => {
                setGenres(response?.data?.genres);
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <FlatList
            data={intersection}
            numColumns={2}
            renderItem={({ item }) => (
                <View style={styles.genreContainer}>
                    <Text>{item.name}</Text>
                </View>
            )}
            keyExtractor={(i, index) => i + index.toString()}
        />
    );
};

export default Genres;

const styles = StyleSheet.create({
    genreContainer: {
        backgroundColor: COLORS.gray,
        paddingHorizontal: calcWidth(10),
        margin: 2,
        alignItems: 'center',
        borderRadius: calcWidth(20),
        justifyContent: 'center',
        paddingVertical: calcHeight(2),
    },
});
