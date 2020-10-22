import styled from 'styled-components';

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

export const IconContainer = styled.View`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primaryDark};
`;

export const Input = styled.TextInput`
  height: 48px;
  flex: 1;
  background-color: ${props => props.theme.primaryDark};
  color: ${props => props.theme.textOnP};
`;
