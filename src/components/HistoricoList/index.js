import React from 'react';
import {Container, TipoText, IconView, Tipo, ValorText} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Alert} from 'react-native';

export default function HistoricoList({data, deleteItem}) {
  function handleDeleteItem() {
    Alert.alert('Atenção', 'Você tem certeza que deseja deletar esse item?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Continuar',
        onPress: () => deleteItem(data.id),
      },
    ]);
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Tipo>
          <IconView tipo={data.type}>
            <Feather
              name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
              size={20}
              color="#FFF"
            />
            <TipoText>{data.type}</TipoText>
          </IconView>
        </Tipo>

        <ValorText>R$ {data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
