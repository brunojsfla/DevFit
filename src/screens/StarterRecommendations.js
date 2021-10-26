import React from 'react';
import {useEffect} from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import workoutJson from '../../presetWorkouts.json';
import Workout from '../components/Workout';

import {
  ContainerDias,
  HeaderTextDias,
  NextButton,
  WorkoutList,
  BoldText,
} from './styles';

const Page = props => {
  useEffect(() => {
    props.navigation.setParams({myWorkouts: props.myWorkouts});
  }, [props.myWorkouts]);

  const addWorkout = item => {
    if (props.myWorkouts.findIndex(i => i.id === item.id) < 0) {
      props.addWorkout(item);
    } else {
      props.delWorkout(item);
    }
  };

  const numberOfTraining = () => {
    let text = '';
    const num = props.myWorkouts.length;

    if (num === 0) text = 'Você não selecionou nenhum treino';

    if (num === 1) text = 'Você selecionou 1 treino';

    if (num > 1) text = `Você selecionou ${num} treinos`;

    return text;
  };

  return (
    <ContainerDias>
      <HeaderTextDias>Opções de treinos com base no seu nível</HeaderTextDias>
      <HeaderTextDias>
        <BoldText>{numberOfTraining()}</BoldText>
      </HeaderTextDias>

      <WorkoutList
        data={workoutJson}
        renderItem={({item}) => (
          <Workout data={item} addAction={() => addWorkout(item)} />
        )}
        keyExtractor={item => item.id}
      />
    </ContainerDias>
  );
};

Page.navigationOptions = ({navigation}) => {
  let btnNext = 'Ignorar';
  if (
    navigation.state.params &&
    navigation.state.params.myWorkouts.length > 0
  ) {
    btnNext = 'Concluir';
  }

  const nextAction = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  };
  return {
    title: '',
    headerRight: <NextButton title={btnNext} onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addWorkout: workout => dispatch({type: 'ADD_WORKOUT', payload: {workout}}),
    delWorkout: workout => dispatch({type: 'DEL_WORKOUT', payload: {workout}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
