import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
`;

export const Text = styled.Text`
  text-align: justify;
  color: ${props => props.theme.textOnP};
`;
