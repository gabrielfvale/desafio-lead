import React, { useEffect, useState } from 'react';

import SearchInput from '../../components/SearchInput';
import DetailedMovieList from '../../components/DetailedMovieList';
import GridMovieList from '../../components/GridMovieList';
import MovieCardShimmer from '../../components/MovieCard/shimmer';
import { Text } from '../../styles/global';

import {
  Container,
  SearchContainer,
  Title,
  Content,
  Padding,
  LayoutSwitcher,
  LayoutIcon,
} from './styles';

import api from '../../services/api';

const Search = ({ route, navigation }) => {

  const { queryText } = route.params;

  const [query, setQuery] = useState(queryText);
  const [layout, setLayout] = useState('list');

  const [firstLoading, setFirstLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);

  const switchLayout = () => {
    let newLayout = layout;
    if (layout === 'list') newLayout = 'grid';
    else newLayout = 'list';
    setLayout(newLayout);
  }

  const fetchMovies = async () => {
    if (loading || currentPage >= totalPages) return;

    setLoading(true);

    const results = await api.get(`/search/movie?query=${query}&page=${currentPage}`);
    const { data } = results;

    setMovies([...movies, ...data.results]);
    setCurrentPage(page => page + 1);
    setTotalPages(data.total_pages);
    setLoading(false);
  }

  const firstFetch = async (queryText) => {
    setLoading(true);
    setFirstLoading(true);
    setQuery(queryText);

    const results = await api.get(`/search/movie?query=${queryText}&page=${1}`);
    const { data } = results;

    setMovies([...data.results]);
    setCurrentPage(2);
    setTotalPages(data.total_pages);
    setLoading(false);
    setFirstLoading(false);
  }

  useEffect(() => {
    let componentMounted = true;

    const fetchFirstMovies = async () => await firstFetch(queryText);
    fetchFirstMovies();

    return () => { componentMounted = false };
  }, []);

  const renderListFooter = () => {
    if (!loading && currentPage >= totalPages)
      return <Padding><Title>No more results</Title></Padding>
    return <Padding><MovieCardShimmer /></Padding>;
  }

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          initialValue={queryText}
          onSubmit={({ text }) => firstFetch(text)}
        />
        <LayoutSwitcher onPress={switchLayout}>
          <LayoutIcon name={layout === 'list' ? 'grid' : 'list'} size={24}/>
        </LayoutSwitcher>
      </SearchContainer>
      <Content>
        <Title>Search results for "{query}"</Title>
        {layout === 'list' ?
        <DetailedMovieList
          loading={firstLoading}
          movies={movies}
          onDetailsPress={item => navigation.push('Details', { movieId: item.id })}
          onEndReached={fetchMovies}
          footerComponent={renderListFooter}
        />
        :
        <GridMovieList
          loading={firstLoading}
          movies={movies}
          onPress={item => navigation.push('Details', { movieId: item.id })}
          onEndReached={fetchMovies}
          footerComponent={renderListFooter}
        />
        }

      </Content>
    </Container>
  );
}

export default Search;
