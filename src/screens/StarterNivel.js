import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';

import {
  ContainerDias,
  HeaderTextDias,
  NextButton,
  LevelArea,
  BoldText,
} from './styles';

const Page = props => {
  let funnyPhrase = '';

  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = 'Um dia só de treino? Ixi... #preguiça';
      break;
    case 2:
      funnyPhrase = 'Dois dias só?! #cocorico';
      break;
    case 3:
      funnyPhrase = 'Bom, três dias são melhor que nada, né?!';
      break;
    case 4:
      funnyPhrase = 'Quatro dias já dá um caldo, hein?!';
      break;
    case 5:
      funnyPhrase = 'Cinco dias tá bruto...brabo!';
      break;
    case 6:
      funnyPhrase = 'Seis dias de treino?! #esmagaquecresce';
      break;
    case 7:
      funnyPhrase = 'Vai morar na academia agora?!';
      break;
  }

  const setMyLevel = l => {
    props.setLevel(l);
    props.navigation.setParams({level: l});
  };

  return (
    <ContainerDias>
      <HeaderTextDias>{funnyPhrase}</HeaderTextDias>
      <HeaderTextDias>
        <BoldText>Qual seu nível hoje?</BoldText>
      </HeaderTextDias>

      <LevelArea>
        <DefaultButton
          bgColor={props.level === 'beginner' ? '#A5E8BC' : false}
          onPress={() => setMyLevel('beginner')}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Iniciante / Frango</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.level === 'intermediate' ? '#A5E8BC' : false}
          onPress={() => setMyLevel('intermediate')}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Intermediário / Brrrrllll</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.level === 'advanced' ? '#A5E8BC' : false}
          onPress={() => setMyLevel('advanced')}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Avançado / Mr. Olympia</Text>
        </DefaultButton>
      </LevelArea>
    </ContainerDias>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      alert('Você precisa estar em um nível!');
      return;
    }

    navigation.navigate('StarterRecommendations');
  };
  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
