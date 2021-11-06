import React from 'react';
import {connect} from 'react-redux';
import {ContainerMyWorkouts, MyWorkoutList} from './styles';
import Workout from '../components/Workout';
import styled from 'styled-components';

const Page = props => {
  const editWorkout = item => {
    props.navigation.navigate('EditWorkout', {item});
  };
  return (
    <ContainerMyWorkouts>
      <MyWorkoutList
        data={props.myWorkouts}
        renderItem={({item}) => (
          <Workout
            data={item}
            editAction={() => editWorkout(item)}
            delAction={() => {
              props.delWorkout(item);
            }}
          />
        )}
      />
    </ContainerMyWorkouts>
  );
};

Page.navigationOptions = ({navigation}) => {
  const ButtonArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  `;
  const ButtonImage = styled.Image`
    width: 25px;
    height: 25px;
  `;
  const AddWorkoutButton = ({onPress}) => {
    return (
      <ButtonArea onPress={onPress} underlayColor="transparent">
        <ButtonImage source={require('../../assets/add.png')} />
      </ButtonArea>
    );
  };

  const btnAction = () => {
    navigation.navigate('EditWorkout');
  };
  return {
    title: 'Meus Treinos',
    headerRight: <AddWorkoutButton onPress={btnAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delWorkout: workout => dispatch({type: 'DEL_WORKOUT', payload: {workout}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
