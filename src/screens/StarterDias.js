import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';

import {
  ContainerDias,
  HeaderTextDias,
  NextButton,
  BoldText,
  DaysArea,
} from './styles';

const Page = props => {
  let firstName = props.name.split(' ')[0];
  const toogleDay = day => {
    let newWorkoutDays = [...props.workoutDays];

    if (!props.workoutDays.includes(day)) {
      newWorkoutDays.push(day);
    } else {
      newWorkoutDays = newWorkoutDays.filter(notDay => notDay !== day);
    }

    props.setWorkoutDays(newWorkoutDays);
    props.navigation.setParams({workoutDays: newWorkoutDays});
  };

  return (
    <ContainerDias>
      <HeaderTextDias>
        Opa, <BoldText>{firstName}</BoldText>! Tudo bem?
      </HeaderTextDias>
      <HeaderTextDias>
        Quais dias da semana você pretende treinar?
      </HeaderTextDias>

      <DaysArea>
        <DefaultButton
          bgColor={props.workoutDays.includes(1) ? '#A5E8BC' : false}
          width={100}
          onPress={() => toogleDay(1)}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Segunda</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.workoutDays.includes(2) ? '#A5E8BC' : false}
          width={100}
          onPress={() => toogleDay(2)}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Terça</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.workoutDays.includes(3) ? '#A5E8BC' : false}
          width={100}
          onPress={() => toogleDay(3)}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Quarta</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.workoutDays.includes(4) ? '#A5E8BC' : false}
          width={100}
          onPress={() => toogleDay(4)}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Quinta</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.workoutDays.includes(5) ? '#A5E8BC' : false}
          width={100}
          onPress={() => toogleDay(5)}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Sexta</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.workoutDays.includes(6) ? '#A5E8BC' : false}
          width={100}
          onPress={() => toogleDay(6)}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Sábado</Text>
        </DefaultButton>
        <DefaultButton
          bgColor={props.workoutDays.includes(0) ? '#A5E8BC' : false}
          width={100}
          onPress={() => toogleDay(0)}
          style={{marginBottom: 20}}
          underlayColor="#CCC">
          <Text>Domingo</Text>
        </DefaultButton>
      </DaysArea>
    </ContainerDias>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (
      !navigation.state.params ||
      !navigation.state.params.workoutDays.length
    ) {
      alert('Você precisa de pelo menos um dia de treino na semana!');
      return;
    }

    navigation.navigate('StarterNivel');
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
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: workoutDays =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
