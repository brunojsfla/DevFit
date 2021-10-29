import React from 'react';
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
  return (
    <ContainerHome>
      <HomeMonthScroll />
      <HomeDaysScroll />
      <HomeDayStatus />

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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
