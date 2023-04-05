import {FlatList, View} from 'react-native';
import React from 'react';
import {utilsScreenStyles} from '../../utils/styles';
import MAHeader from '../../components/molecules/MAHeader';
import MovieCard from '../../components/organisms/MovieCard';

const data = [
  {
    id: 1,
    posterPath: 'https://picsum.photos/200/300',
    popularity: 40,
    index: 1,
    originalTitle: 'The Shawshank Redemption',
    title: 'The Shawshank Redemption',
    releaseDate: '1994-09-23',
    originalLanguage: 'En',
    adult: false,
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 2,
    posterPath: 'https://picsum.photos/200/300',
    popularity: 60,
    index: 2,
    originalTitle: 'The Shawshank Redemption',
    title: 'The Shawshank Redemption',
    releaseDate: '1994-09-23',
    originalLanguage: 'En',
    adult: false,
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 3,
    posterPath: 'https://picsum.photos/200/300',
    popularity: 10,
    index: 3,
    originalTitle: 'The Shawshank Redemption',
    title: 'The Shawshank Redemption',
    releaseDate: '1994-09-23',
    originalLanguage: 'En',
    adult: false,
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 4,
    posterPath: 'https://picsum.photos/200/300',
    popularity: 60,
    index: 4,
    originalTitle: 'The Shawshank Redemption',
    title: 'The Shawshank Redemption',
    releaseDate: '1994-09-23',
    originalLanguage: 'En',
    adult: false,
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    id: 5,
    posterPath: 'https://picsum.photos/200/300',
    popularity: 10,
    index: 5,
    originalTitle: 'The Shawshank Redemption',
    title: 'The Shawshank Redemption',
    releaseDate: '1994-09-23',
    originalLanguage: 'En',
    adult: false,
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
];

const Home = () => {
  return (
    <View style={utilsScreenStyles.mainContainer}>
      <MAHeader title={'Top Rated Movies'} />
      <FlatList
        data={data}
        renderItem={({item}) => <MovieCard {...item} key={item.id} />}
      />
    </View>
  );
};

export default Home;
