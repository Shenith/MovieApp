import {
  ActivityIndicator,
  FlatList,
  Platform,
  RefreshControl,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {utilsScreenStyles} from '../../utils/styles';
import MAHeader from '../../components/molecules/MAHeader';
import MovieCard from '../../components/organisms/MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../redux/rootActions';
import {AppDispatch, RootState} from '../../redux/store';
import {styles} from './styles';

const Home = () => {
  const {movies, loading, lastLoadedPage} = useSelector(
    (state: RootState) => state.movies,
  );
  const dispatch = useDispatch<AppDispatch>();

  const reloadData = () => {
    dispatch(getMovies(1));
  };

  const fetchMoreData = () => {
    dispatch(getMovies(lastLoadedPage + 1));
  };

  useEffect(() => {
    dispatch(getMovies(lastLoadedPage + 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <View style={utilsScreenStyles.scrollContainer}>
      <MAHeader title={'Top Rated Movies'} />
      {loading && Platform.OS === 'ios' && (
        <ActivityIndicator style={styles.activityIndicator} />
      )}
      <FlatList
        data={movies}
        refreshing={loading}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={2}
        refreshControl={
          <RefreshControl
            tintColor="transparent"
            colors={['transparent']}
            style={styles.refreshContainer}
            refreshing={loading}
            onRefresh={reloadData}
            progressViewOffset={2}
          />
        }
        renderItem={({item, index}) => (
          <MovieCard
            key={item.id}
            posterPath={item.poster_path}
            popularity={item.popularity}
            index={index}
            originalTitle={item.original_title}
            title={item.title}
            releaseDate={item.release_date}
            originalLanguage={item.original_language}
            adult={item.adult}
            overview={item.overview}
          />
        )}
      />
    </View>
  );
};

export default Home;
