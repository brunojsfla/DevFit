import React, {useState, useEffect, useRef} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';

const MonthScroll = styled.ScrollView`
  width: 100%;
  height: 60px;
`;
const MonthButton = styled.TouchableHighlight`
  width: ${props => props.width};
  justify-content: center;
  align-items: center;
`;
const MonthText = styled.Text``;
const MonthItem = styled.View`
  width: 90%;
  height: 30px;
  background-color: #828586;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

let months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth / 3;

export default props => {
  const MonthRef = useRef();
  const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

  const handleScrollEnd = e => {
    let posX = e.nativeEvent.contentOffset.x;
    let targetMonth = Math.round(posX / thirdW);
    setSelectedMonth(targetMonth);
  };

  const scrollToMonth = m => {
    let posX = m * thirdW;
    MonthRef.current.scrollTo({x: posX, y: 0, animated: true});
  };

  useEffect(() => {
    props.setSelectedMonth(selectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    setTimeout(() => {
      scrollToMonth(selectedMonth);
    }, 10);
  }, [props.selectedMonth]);

  return (
    <MonthScroll
      horizontal
      ref={MonthRef}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={thirdW}
      contentContainerStyle={{paddingLeft: thirdW, paddingRight: thirdW}}
      onMomentumScrollEnd={handleScrollEnd}>
      {months.map((month, index) => (
        <MonthButton
          key={index}
          width={thirdW}
          onPress={() => setSelectedMonth(index)}
          underlayColor="transparent">
          <MonthItem
            style={
              index === selectedMonth
                ? {
                    backgroundColor: '#828586',
                    width: '100%',
                    height: 40,
                  }
                : {}
            }>
            <MonthText>{month}</MonthText>
          </MonthItem>
        </MonthButton>
      ))}
    </MonthScroll>
  );
};
