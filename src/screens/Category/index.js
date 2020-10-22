import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import DetailedMovieList from '../../components/DetailedMovieList';
import MovieCardShimmer from '../../components/MovieCard/shimmer';

import {
  Container,
  Header,
  Title,
  FilterButton,
  FilterIcon,
  Padding,
} from './styles';

import api from '../../services/api';

const Category = ({ route, navigation, genres }) => {
  const { id, name } = route.params;
  const { genreList } = genres;

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [firstLoading, setFirstLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    if (loading) return;

    setLoading(true);

    const results = await api.get(`/movie/${id}?page=${currentPage}`);
    const { data } = results;

    setMovies([...movies, ...data.results]);
    setCurrentPage(page => page + 1);
    setTotalPages(data.total_pages);
    setLoading(false);
  }

  const firstFetch = async () => {
    setLoading(true);
    setFirstLoading(true);

    const results = await api.get(`/movie/${id}?page=${1}`);
    const { data } = results;

    setMovies([...data.results]);
    setCurrentPage(2);
    setTotalPages(data.total_pages);
    setLoading(false);
    setFirstLoading(false);
  }

  const renderListFooter = () => {
    if (!loading && currentPage >= totalPages)
      return <Padding><Title>No more results</Title></Padding>
    return <Padding><MovieCardShimmer /></Padding>;
  }

  useEffect(() => {
    let componentMounted = true;

    const fetchFirstMovies = async () => await firstFetch();

    fetchFirstMovies();
    return () => { componentMounted = false };
  }, []);

  return (
    <Container>
      <Header>
        <Title>{name}</Title>
        <FilterButton>
          <FilterIcon name="filter" size={24}/>
        </FilterButton>
      </Header>
      <DetailedMovieList
        loading={firstLoading}
        movies={movies}
        onDetailsPress={item => navigation.push('Details', { movieId: item.id })}
        onEndReached={fetchMovies}
        footerComponent={renderListFooter}
      />
    </Container>
  );
}
const mapState = state => ({ genres: state.genres });

export default connect(mapState)(Category);
