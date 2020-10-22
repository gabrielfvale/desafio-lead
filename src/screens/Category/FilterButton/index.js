import React from 'react';
import { Button, FilterIcon } from './styles';

// import { Container } from './styles';

const FilterButton = ({ active, onPress }) => {
  return (
    <Button onPress={onPress}>
      <FilterIcon active={active} name="filter" size={24}/>
    </Button>
  );
}

export default FilterButton;
