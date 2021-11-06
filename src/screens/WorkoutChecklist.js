import React from 'react';
import {connect} from 'react-redux';
import {
  ContainerCheckList,
  SafeArea,
  WorkoutHeader,
  WorkoutTitle,
  WorkoutClose,
  WorkoutCloseText,
  WorkoutCheckList,
} from './styles';
import {StatusBar} from 'react-native';
import {useState} from 'react';
import ExerciseItem from '../components/ExerciseItem';
import {StackActions, NavigationActions} from 'react-navigation';

const Page = props => {
  let workout = props.navigation.state.params.workout;

  const checkAction = (exercise, index) => {
    let newExercises = [...exercises];
    if (!exercise.done) {
      newExercises[index].done = true;
    } else {
      newExercises[index].done = false;
    }
    setExercises(newExercises);
    checkWorkout();
  };

  const checkWorkout = () => {
    if (exercises.every(i => i.done)) {
      alert('Treino finalizado com sucesso!');

      let today = new Date();

      let thisYear = today.getFullYear();
      let thisMonth = today.getMonth() + 1;
      let thisDay = today.getDate();

      thisMonth = thisMonth < 10 ? '0' + thisMonth : thisMonth;
      thisDay = thisDay < 10 ? '0' + thisDay : thisDay;

      let dtFormated = `${thisYear}-${thisMonth}-${thisDay}`;

      props.addProgress(dtFormated);
      props.setLastWorkout(workout.id);

      props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'AppTab'})],
        }),
      );
    }
  };

  const [exercises, setExercises] = useState([...workout.exercises]);
  return (
    <ContainerCheckList source={require('../../assets/fitness.jpg')}>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <WorkoutHeader>
          <WorkoutTitle>{workout.name}</WorkoutTitle>
          <WorkoutClose
            onPress={() => props.navigation.goBack()}
            underlayColor="transparent">
            <WorkoutCloseText>X</WorkoutCloseText>
          </WorkoutClose>
        </WorkoutHeader>
        <WorkoutCheckList
          data={exercises}
          renderItem={({item, index}) => (
            <ExerciseItem
              data={item}
              index={index}
              checkAction={() => checkAction(item, index)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeArea>
    </ContainerCheckList>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    header: null,
  };
};

const mapStateToProps = state => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
    lastWorkout: state.userReducer.lastWorkout,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProgress: date => dispatch({type: 'ADD_PROGRESS', payload: {date}}),
    setLastWorkout: id => dispatch({type: 'SET_LASTWORKOUT', payload: {id}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
