import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 100px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 98px;

  align-self: center;
`;
