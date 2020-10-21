import styled from 'styled-components';

export const InputContainer = styled.View`
  background-color: ${props => props.theme.primaryDark};
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  background-color: ${props => props.theme.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

export const Input = styled.TextInput`
  background-color: ${props => props.theme.primaryDark};
  color: ${props => props.theme.textOnP};
  height: 48px;
`;
