import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  font-size: 17px;
  width: 90%;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 10px;
  width: 90%;
  background-color: #3b3dbf;
`;

export const SubmitText = styled.Text`
  color: #fff;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 17px;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #121212;
`;
