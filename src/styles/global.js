import styled from 'styled-components';

export const View = styled.SafeAreaView`
  background-color: ${props => props.secondary ? props.theme.secondary : props.theme.primary};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${props => props.theme.textOnP};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.secondary};
  border-radius: 4px;
  padding: 8px;
`;
