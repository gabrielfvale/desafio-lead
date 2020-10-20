import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Title = styled.Text`
  margin: 8px 0 8px 16px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.accent};
`;

export const Padding = styled.View`
  padding-right: 16px;
`;


export const PersonProfile = styled.View`
  position: relative;
`;

export const GradientOverlay = styled(LinearGradient)`
  background-color: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0
  width: 100px;
  height: 150px;
`;

export const PersonName = styled.Text`
  position: absolute;
  z-index: 1;
  color: white;
  bottom: 8px;
  width: 100px;
  text-align: center;
`;
