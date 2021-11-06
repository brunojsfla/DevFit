import React, {useState} from 'react';
import HomeMonthScroll from '../components/HomeMonthScroll';
import HomeDaysScroll from '../components/HomeDaysScroll';
import HomeDayStatus from '../components/HomeDayStatus';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {
  ContainerHome,
  Legend,
  LegendText,
  LegendItem,
  LegendBox,
} from './styles';

const Page = props => {
  let today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  return (
    <ContainerHome>
      <HomeMonthScroll
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <HomeDaysScroll
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dailyProgress={props.dailyProgress}
        workoutDays={props.workoutDays}
      />
      <HomeDayStatus
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dailyProgress={props.dailyProgress}
        workoutDays={props.workoutDays}
        addProgress={props.addProgress}
        delProgress={props.delProgress}
        goToWorkout={() => props.navigation.navigate('WorkoutStack')}
      />

      <Legend>
        <LegendText>Legenda:</LegendText>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#B5EEFF'}} />
          <LegendText>Hoje</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#B5FFB8'}} />
          <LegendText>Treino feito</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#FFB5B5'}} />
          <LegendText>Treino perdido</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#F4F4F4', opacity: 0.2}} />
          <LegendText>Dia de descanso</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#F4F4F4'}} />
          <LegendText>Dia futuro</LegendText>
        </LegendItem>
      </Legend>
    </ContainerHome>
  );
};

Page.navigationOptions = ({navigation}) => {
  const ConfigButtonArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  `;

  const ConfigButtonImage = styled.Image`
    width: 25px;
    height: 25px;
  `;

  const ConfigButton = () => {
    const btnAction = () => {
      navigation.navigate('HomeConfig');
    };
    return (
      <ConfigButtonArea underlayColor="transparent" onPress={btnAction}>
        <ConfigButtonImage source={require('../../assets/config.png')} />
      </ConfigButtonArea>
    );
  };

  return {
    title: 'Seu progresso diário',
    headerRight: () => <ConfigButton />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    dailyProgress: state.userReducer.dailyProgress,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProgress: date => dispatch({type: 'ADD_PROGRESS', payload: {date}}),
    delProgress: date => dispatch({type: 'DEL_PROGRESS', payload: {date}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
