import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {utilsScreenStyles} from '../../utils/styles';
import MAHeader from '../../components/molecules/MAHeader';
import MovieCard from '../../components/organisms/MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../redux/rootActions';
import {AppDispatch, RootState} from '../../redux/store';

const Home = () => {
  const {movies} = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovies(1));
  }, [dispatch]);

  return (
    <View style={utilsScreenStyles.scrollContainer}>
      <MAHeader title={'Top Rated Movies'} />
      <FlatList
        data={movies}
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
