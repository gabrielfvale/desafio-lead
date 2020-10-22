import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  margin-bottom: 16px;
  height: 300px;
`;

export const Backdrop = styled.ImageBackground`
  width: 100%;
  height: 240px;
`;

export const SecondaryContainer = styled.View`
  position: absolute;
  bottom: 0;
  padding: 16px 16px 0 16px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flexShrink: 1;
  margin-left: 16px;
`;

export const GradientOverlay = styled(LinearGradient)`
  width: 100%;
  height: 240px;
  position: absolute;
`;

export const Title = styled.Text`
  color: ${props => props.theme.textOnP};
  font-size: 32px;
  font-weight: bold;
`;

export const Tagline = styled.Text`
  color: ${props => props.theme.textOnP}
  font-style: italic;
`;

export const Info = styled.Text`
  color: ${props => props.theme.textOnP};
  opacity: 0.75;
`;
