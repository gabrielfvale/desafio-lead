import styled from 'styled-components';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 8px 8px 16px;
`;

export const Category = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.textOnP};
`;

export const MoreButtonText = styled.Text`
  color: ${props => props.theme.textOnP};
  opacity: .75;
`;

export const Padding = styled.View`
  padding-right: 16px;
`;
