
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.primary};
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

export const FilterButton = styled.Pressable`
  background-color: ${props => props.theme.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

export const FilterIcon = styled(Icon)`
  color: ${props => props.active ? props.theme.accent : props.theme.textOnP};
`;

export const Padding = styled.View`
  padding: 16px 0 16px 0;
`;
