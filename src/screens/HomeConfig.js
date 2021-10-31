import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const ContainerConfig = styled.SafeAreaView`
  flex: 1;
  padding: 5px;
`;

const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;

const ListArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DayItem = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const DayItemText = styled.Text``;

const LevelItem = styled.TouchableHighlight`
  padding: 0 15px;
  height: 30px;
  border-radius: 5px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const LevelItemText = styled.Text``;

const Page = props => {
  const toogleWorkoutDay = value => {
    let newWorkoutDays = [...props.workoutDays];
    if (newWorkoutDays.includes(value)) {
      if (newWorkoutDays.length === 1) {
        alert('Opa! Você deve ter pelo menos um dia de treino!');
        return;
      }
      newWorkoutDays = newWorkoutDays.filter(i => i !== value);
    } else {
      newWorkoutDays.push(value);
    }

    props.setWorkoutDays(newWorkoutDays);
  };

  return (
    <ContainerConfig>
      <Label>Seu nome completo:</Label>
      <Input value={props.name} onChangeText={e => props.setName(e)} />

      <Label>Dias em que você treina:</Label>
      <ListArea>
        <DayItem
          underlayColor="transparent"
          onPress={() => toogleWorkoutDay(1)}
          style={
            props.workoutDays.includes(1) ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toogleWorkoutDay(2)}
          style={
            props.workoutDays.includes(2) ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <DayItemText>T</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toogleWorkoutDay(3)}
          style={
            props.workoutDays.includes(3) ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <DayItemText>Q</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toogleWorkoutDay(4)}
          style={
            props.workoutDays.includes(4) ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <DayItemText>Q</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toogleWorkoutDay(5)}
          style={
            props.workoutDays.includes(5) ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toogleWorkoutDay(6)}
          style={
            props.workoutDays.includes(6) ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toogleWorkoutDay(0)}
          style={
            props.workoutDays.includes(0) ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <DayItemText>D</DayItemText>
        </DayItem>
      </ListArea>

      <Label>Seu nível:</Label>
      <ListArea>
        <LevelItem
          underlayColor="transparent"
          onPress={() => props.setLevel('begginer')}
          style={
            props.level === 'begginer' ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <LevelItemText>Iniciante</LevelItemText>
        </LevelItem>
        <LevelItem
          underlayColor="transparent"
          onPress={() => props.setLevel('intermediate')}
          style={
            props.level === 'intermediate' ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <LevelItemText>Intermediário</LevelItemText>
        </LevelItem>
        <LevelItem
          underlayColor="transparent"
          onPress={() => props.setLevel('advanced')}
          style={
            props.level === 'advanced' ? {backgroundColor: '#A5E8BC'} : {}
          }>
          <LevelItemText>Avançado</LevelItemText>
        </LevelItem>
      </ListArea>
    </ContainerConfig>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    title: 'Configurações',
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
    level: state.userReducer.level,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: workoutDays =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
