import React, {useCallback} from 'react';
import DefaultButton from '../components/DefaultButton';

import {
  Container,
  WelcomeText,
  WelcomeImage,
  WelcomeLogo,
  BeginConfigArea,
  ButtonText,
} from './styles';

const Page = props => {
  const handleStart = useCallback(() => {
    props.navigation.navigate('StarterName');
  }, []);

  return (
    <Container>
      <WelcomeText>Bem-vindo(a) ao DevFit!</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          bgColor="#0072C0"
          underlayColor="#0B7AC6"
          onPress={handleStart}>
          <ButtonText>Iniciar configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

Page.navigationOptions = {
  headerShown: false,
};

export default Page;
