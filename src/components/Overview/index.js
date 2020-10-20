import React from 'react';
import { Container, Title, Text } from './styles';

const Overview = ({ text }) => {
  return (
    <Container>
      <Title>Overview</Title>
      <Text>{text}</Text>
    </Container>
  );
}

export default Overview;
