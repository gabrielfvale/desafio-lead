import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: ${props => props.theme.primaryDark};
  flex-direction: row;
`;

export const Poster = styled.Image``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.textOnP};
`;

export const Briefing = styled.Text`
  color: ${props => props.theme.textOnP};
`;

export const Content = styled.View`
  padding: 16px;
  flex-shrink: 1;
  flex: 1;
`;

export const SeeMoreButton = styled.TouchableOpacity`
  padding: 8px;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const SeeMoreText = styled.Text`
  color: ${props => props.theme.accent};
`;
