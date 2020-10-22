import React, { useEffect, useState } from 'react';

import SearchInput from '../../components/SearchInput';
import DetailedMovieList from '../../components/DetailedMovieList';
import GridMovieList from '../../components/GridMovieList';
import MovieCardShimmer from '../../components/MovieCard/shimmer';
import Icon from 'react-native-vector-icons/Feather';

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
  const [loading, setLoading] = useState(true);
  const [layout, setLayout] = useState('list');

  const [fetchingNext, setFetchingNext] = useState(false);
  const [resultPage, setResultPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [foundMovies, setFoundMovies] = useState([]);

  const switchLayout = () => {
    let newLayout = layout;
    if (layout === 'list') newLayout = 'grid';
    else newLayout = 'list';
    setLayout(newLayout);
  }

  const fetchMovies = async (query, page = 1) => {
    try {
      const results = await api.get(`/search/movie?query=${query}&page=${page}`);
      return results.data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  const fetchNextPage = async () => {
    if (!loading && !fetchingNext && !(resultPage === totalPages) ) {
      const newPage = resultPage + 1;
      setFetchingNext(true);
      setResultPage(newPage);

      const newMovies = await fetchMovies(queryText, newPage);
      setFoundMovies([...foundMovies, ...newMovies.results]);
      setFetchingNext(false);
    }
  }

  const reFetch = async (query) => {
    setQuery(query);
    setLoading(true);
    const newData = await fetchMovies(query);
    setFoundMovies([...newData.results]);
    setLoading(false);
  }

  useEffect(() => {
    let componentMounted = true;

    const fetchFirstMovies = async () => {
      const movies = await fetchMovies(queryText);
      if (componentMounted) {
        setFoundMovies([...movies.results]);
        setTotalPages(movies.total_pages);
        setLoading(false);
      }
    }

    fetchFirstMovies();
    return () => { componentMounted = false };
  }, []);

  const renderListFooter = () => {
    if (resultPage === totalPages) {
      return <><Padding /><Title>No more results</Title><Padding /></>;
    } else {
      return <><Padding /><MovieCardShimmer /><Padding /></>
    }
  }

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          initialValue={queryText}
          onSubmit={({ text }) => reFetch(text)}
        />
        <LayoutSwitcher onPress={switchLayout}>
          <LayoutIcon name={layout === 'list' ? 'grid' : 'list'} size={24}/>
        </LayoutSwitcher>
      </SearchContainer>
      <Content>
        <Title>Search results for "{query}"</Title>
        {layout === 'list' ?
        <DetailedMovieList
          loading={loading}
          movies={foundMovies}
          onDetailsPress={item => navigation.push('Details', { movieId: item.id })}
          onEndReached={fetchNextPage}
          footerComponent={() => renderListFooter()}
        />
        :
        <GridMovieList
          loading={loading}
          movies={foundMovies}
          onPress={item => navigation.push('Details', { movieId: item.id })}
          onEndReached={fetchNextPage}
          footerComponent={() => renderListFooter()}
        />
        }

      </Content>
    </Container>
  );
}

export default Search;
