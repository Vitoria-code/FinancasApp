import React, {useState, useContext} from 'react';
import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
  ActivityIndicator,
} from '../SignIn/styles';
import {Platform} from 'react-native';
import {AuthContext} from '../../contexts/auth';

export default function SignUp() {
  const {signUp, loadingAuth} = useContext(AuthContext);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSignUp() {
    if (nome === '' || email === '' || senha === '') {
      alert('Preencha todos os campos');
      return;
    }

    signUp(nome, email, senha);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <AreaInput>
          <Input placeholder="Nome" onChangeText={text => setNome(text)} />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Email" onChangeText={text => setEmail(text)} />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            onChangeText={text => setSenha(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
