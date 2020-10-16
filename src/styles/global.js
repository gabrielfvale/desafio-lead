import styled from 'styled-components';

export const PrimaryView = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary};
`;

export const PrimaryText = styled.Text`
  color: ${props => props.theme.textOnP};
`;

export const SecondaryButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.secondary};
  border-radius: 4px;
  padding: 8px;
`;
