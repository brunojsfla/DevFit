/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DefaultButton from './DefaultButton';

const BallonTriangle = styled.View`
  width: 0;
  height: 0;
  borderLeftColor: transparent;
  borderLeftWidth: 15;
  borderBottomWidth: 15;
  borderBottomColor: #ededed;
  borderRightWidth: 15;
  borderRightColor: transparent;
`;
const BallonArea = styled.View`
  width: 90%;
  padding: 20px;
  background-color: #ededed;
  border-radius: 10px;
`;

const BallonBigText = styled.Text`
  font-size: 15px;
  align-self: center;
`;

export const ButtonTextBallon = styled.Text`
  color: #000;
  font-weight: bold;
`;

export const BallonText = styled.Text`
  font-size: 13px;
  align-self: center;
  margin-top: 10px;
`;

export default props => {
  const [timeLeft, setTimeLeft] = useState('');
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let thisDate = new Date(
    today.getFullYear(),
    props.selectedMonth,
    props.selectedDay,
  );

  let thisYear = thisDate.getFullYear();
  let thisMonth = thisDate.getMonth() + 1;
  let thisDay = thisDate.getDate();

  thisMonth = thisMonth < 10 ? '0' + thisMonth : thisMonth;
  thisDay = thisDay < 10 ? '0' + thisDay : thisDay;

  let dtFormated = `${thisYear}-${thisMonth}-${thisDay}`;

  let dayOff = false;
  let isToday = false;
  let isFuture = false;
  let isDone = false;

  if (!props.workoutDays.includes(thisDate.getDay())) {
    dayOff = true;
  } else if (thisDate.getTime() > today.getTime()) {
    isFuture = true;
  } else {
    if (props.dailyProgress.includes(dtFormated)) {
      isDone = true;
    } else {
      isDone = false;
    }
  }

  if (thisDate.getTime() === today.getTime()) {
    isToday = true;
  }

  const setDone = () => {
    props.addProgress(dtFormated);
  };

  const setUnDone = () => {
    props.delProgress(dtFormated);
  };

  useEffect(() => {
    const timerFunction = () => {
      let now = Date.now();
      let endToDay = new Date();
      endToDay.setHours(23);
      endToDay.setMinutes(59);
      endToDay.setSeconds(59);
      endToDay = endToDay.getTime();
      let diff = endToDay - now;

      let h = Math.floor(diff / (1000 * 60 * 60));
      let m = Math.floor((diff / (1000 * 60)) - (h * 60));
      let s = Math.floor((diff / 1000) - (m * 60) - ((h * 60) * 60));

      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      setTimeLeft(`${h}h ${m}m ${s}s`);
    };

    let timer = setInterval(timerFunction, 1000);
    timerFunction();

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <BallonTriangle />
      <BallonArea>
        {dayOff && <BallonBigText>Dia de descanso</BallonBigText>}
        {isFuture && <BallonBigText>Data no futuro</BallonBigText>}
        {!dayOff && !isFuture && isDone && (
          <>
            <BallonBigText>Parabéns, você treinou!</BallonBigText>
            <DefaultButton
              onPress={setUnDone}
              bgColor="#4AC34E"
              underlayColor="#4AC34E"
              style={{marginTop: 20}}>
              <ButtonTextBallon>DESMARCAR</ButtonTextBallon>
            </DefaultButton>
          </>
        )}
        {!dayOff && !isFuture && !isDone && !isToday && (
          <>
            <BallonBigText>Você frangou neste dia!</BallonBigText>
            <DefaultButton
              onPress={setDone}
              bgColor="#4AC34E"
              underlayColor="#4AC34E"
              style={{marginTop: 20}}>
              <ButtonTextBallon>MARCAR COMO FEITO</ButtonTextBallon>
            </DefaultButton>
          </>
        )}
        {!dayOff && !isFuture && !isDone && isToday && (
          <>
            <BallonBigText>Hoje é dia de sair da jaula o monstro</BallonBigText>
              <BallonText>Você tem {timeLeft} para treinar</BallonText>
            <DefaultButton
              onPress={props.goToWorkout}
              bgColor="#4AC34E"
              underlayColor="#4AC34E"
              style={{marginTop: 20}}>
              <ButtonTextBallon>INICIAR TREINO</ButtonTextBallon>
            </DefaultButton>
          </>
        )}
      </BallonArea>
    </>
  );
};
