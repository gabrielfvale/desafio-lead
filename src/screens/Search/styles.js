
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.primary};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 16px;
  color: ${props => props.theme.textOnP};
`;

export const Content = styled.View`
  padding: 16px;
  flex: 1;
`;

export const Padding = styled.View`
  padding: 8px;
`;

export const LayoutSwitcher = styled.Pressable`
  background-color: ${props => props.theme.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

export const LayoutIcon = styled(Icon)`
  color: ${props => props.theme.textOnP};
  width: 24px;
  height: 24px;
`;
