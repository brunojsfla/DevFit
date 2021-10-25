import React from 'react';
import {connect} from 'react-redux';

import {ContainerName, HeaderText, NameInput, NextButton} from './styles';

const Page = props => {
  const nextAction = () => {
    if (!props.name) {
      alert('Você precisa de um nome!');
      return;
    }

    props.navigation.navigate('StarterDias');
  };

  const handleChangeName = t => {
    props.setName(t);
    props.navigation.setParams({name: t});
  };

  return (
    <ContainerName>
      <HeaderText>Qual é o seu nome?</HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
    </ContainerName>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert('Você precisa de um nome!');
      return;
    }

    navigation.navigate('StarterDias');
  };
  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
