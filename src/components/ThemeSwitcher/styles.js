import styled from 'styled-components';

export const Button = styled.Pressable`
  background-color: ${props => props.theme.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;
