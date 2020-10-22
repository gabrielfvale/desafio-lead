import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
`;

export const Header = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.textOnP};
`;

export const Content = styled.View`
  margin: 14px;
  padding: 0  0 16px 16px;
  background-color: ${props => props.theme.primaryDark};
  border: 2px solid ${props => props.theme.accent};
`;

export const Footer = styled.View`
  padding-right: 16px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const FooterButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const FooterText = styled.Text`
  color: ${props => props.theme.accent};
  text-transform: uppercase;
`;

export const GenreList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GenreButton = styled.TouchableOpacity`
  background-color: ${props => props.active ? props.theme.accent : props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 8px;
`;

export const GenreText = styled.Text`
  color: ${props => props.active ? props.theme.primaryDark : props.theme.textOnP};
`;
