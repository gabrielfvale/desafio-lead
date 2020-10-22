import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import { View } from '../../styles/global';
import MovieList from '../../components/MovieList';
import Header from '../../components/Header';

import api from '../../services/api';

const Home = ({ navigation }) => {

  const [loading, setLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
    return () => {}
  }, []);

  const fetchMovies = () => {
    Promise.all([
      api.get('movie/now_playing'),
      api.get('movie/popular'),
      api.get('movie/top_rated'),
    ]).then(results => {
      const categories = ['now_playing', 'popular', 'top_rated'];
      let fetchedMovies = {};
      results.map((result, index) => {
        const { data } = result;

        fetchedMovies[categories[index]] =
          data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            posterUri: movie.poster_path
          }));
      })
      setNowPlayingMovies([...fetchedMovies['now_playing']]);
      setPopularMovies([...fetchedMovies['popular']]);
      setTopRatedMovies([...fetchedMovies['top_rated']]);
      setLoading(false);
    })
  };

  const navigateToDetails = (item) => navigation.navigate('Details', { movieId: item.id });
  const navigateToCategory = (category) => navigation.navigate('Category', { category });

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation}/>
        <MovieList
          category="Now playing"
          movies={nowPlayingMovies}
          loading={loading}
          onMoviePress={navigateToDetails}
          onSeeAllPress={() => navigateToCategory('now_playing')}
        />
        <MovieList
          category="Popular"
          movies={popularMovies}
          loading={loading}
          onMoviePress={navigateToDetails}
          onSeeAllPress={() => navigateToCategory('popular')}
        />
        <MovieList
          category="Top rated"
          movies={topRatedMovies}
          loading={loading}
          onMoviePress={navigateToDetails}
          onSeeAllPress={() => navigateToCategory('top_rated')}
        />
      </ScrollView>
    </View>
  );
}

export default Home;
