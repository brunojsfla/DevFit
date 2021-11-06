import React from 'react';
import {connect} from 'react-redux';
import {ContainerMyWorkouts, MyWorkoutList, Title} from './styles';
import Workout from '../components/Workout';
import {HeaderBackButton} from 'react-navigation-stack';
import {StackActions, NavigationActions} from 'react-navigation';

const Page = props => {
  let lastWorkout = false;

  if (props.lastWorkout) {
    lastWorkout = props.myWorkouts.find(i => i.id === props.lastWorkout);
  }
  const goWorkout = workout => {
    props.navigation.navigate('WorkoutChecklist', {workout});
  };
  return (
    <ContainerMyWorkouts>
      {lastWorkout && (
        <>
          <Title>Seu último treino foi:</Title>
          <Workout data={lastWorkout} />
        </>
      )}

      <Title>Escolha seu treino de hoje:</Title>
      <MyWorkoutList
        data={props.myWorkouts}
        renderItem={({item}) => (
          <Workout data={item} goAction={() => goWorkout(item)} />
        )}
      />
    </ContainerMyWorkouts>
  );
};

Page.navigationOptions = ({navigation}) => {
  const handleBackAction = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'AppTab'})],
    });

    navigation.dispatch(resetAction);
  };
  return {
    title: 'Escolha seu treino',
    headerLeft: <HeaderBackButton onPress={handleBackAction} />,
  };
};

const mapStateToProps = state => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
    lastWorkout: state.userReducer.lastWorkout,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
