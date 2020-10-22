import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Button = styled.Pressable`
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
