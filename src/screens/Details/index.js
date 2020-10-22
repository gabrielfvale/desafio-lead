import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { Container } from './styles';
import Cast from '../../components/Cast';
import DetailsHeader from '../../components/DetailsHeader';
import Overview from '../../components/Overview';

import api from '../../services/api';

const Details = ({ route, navigation }) => {
  const { movieId } = route.params;

  const [movieDetails, setMovieDetails] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [cast, setCast] = useState([]);

  const [detailsLoading, setDetailsLoading] = useState(true);
  const [similarLoading, setSimilarLoading] = useState(true);

  useEffect(() => {
    let componentMounted = true; // avoid memory leaks for unmounted components

    api.get(`/movie/${movieId}?append_to_response=credits`)
    .then(result => {
      const { data } = result;
      const sliced_cast = data.credits.cast.slice(0, 8);
      const processed_cast = sliced_cast.map(person => ({
        name: person.name,
        profileUri: person.profile_path
      }));
      if (componentMounted) {
        setMovieDetails({...data});
        setCast([...processed_cast]);
        setDetailsLoading(false);
      }
    });
    api.get(`/movie/${movieId}/similar`)
    .then(result => {
      const { data } = result;
      let similar_array = data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        posterUri: movie.poster_path
      }));
      similar_array = similar_array.slice(0, 12);
      if (componentMounted) {
        setSimilarMovies([...similar_array]);
        setSimilarLoading(false);
      }
    });

    return () => { componentMounted = false; }; // cleanup
  }, []);

  return (
    <Container>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <DetailsHeader
        title={movieDetails.title}
        tagline={movieDetails.tagline}
        genres={movieDetails.genres ? movieDetails.genres.slice(0, 2).map(genre => genre.name) : []}
        runtime={movieDetails.runtime}
        posterUri={movieDetails.poster_path}
        backdropUri={movieDetails.backdrop_path}
        loading={detailsLoading}
      />
      <Overview text={movieDetails.overview} />
      <Cast
        loading={detailsLoading}
        cast={cast} />
    </Container>
  )
}

export default Details;
