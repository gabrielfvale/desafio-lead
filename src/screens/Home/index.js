import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import themeActions from '../../redux/actions/theme';

import { ScrollView } from 'react-native';
import { View } from '../../styles/global';
import MovieList from '../../components/MovieList';
import Header from '../../components/Header';

import api from '../../services/api';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    dispatch(themeActions.getTheme());
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

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <MovieList
          category="Now playing"
          movies={nowPlayingMovies}
          loading={loading}
        />
        <MovieList
          category="Popular"
          movies={popularMovies}
          loading={loading}
        />
        <MovieList
          category="Top rated"
          movies={topRatedMovies}
          loading={loading}
        />
      </ScrollView>
    </View>
  );
}

export default Home;
