import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  ButtonText,
  ContainerMyWorkouts,
  NameInput,
  ExercisesArea,
  ExercisesList,
  ModalLabel,
  ModalMuscles,
  ModalInput,
  ModalMuscle,
  ModalMuscleImage,
  ModalExtra,
  ModalExtraItem,
} from './styles';
import styled from 'styled-components';
import DefaultButton from '../components/DefaultButton';
import ExerciseItemEdit from '../components/ExerciseItemEdit';
import CustomModal from '../components/CustomModal';
import uuid from 'uuid-random';

const Page = props => {
  let workout =
    props.navigation.state.params && props.navigation.state.params.item
      ? props.navigation.state.params.item
      : false;

  const [id, setId] = useState(workout ? workout.id : '');
  const [name, setName] = useState(workout ? workout.name : '');
  const [exercises, setExercises] = useState(workout ? workout.exercises : []);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState('');
  const [modalName, setModalName] = useState('');
  const [modalMuscle, setModalMuscle] = useState('');
  const [modalSets, setModalSets] = useState('');
  const [modalReps, setModalReps] = useState('');
  const [modalLoad, setModalLoad] = useState('');

  useEffect(() => {
    props.navigation.setParams({
      item: {id, name, exercises},
      addWorkout: props.addWorkout,
      editWorkout: props.editWorkout,
    });
  }, [name, exercises]);

  const editExercise = exercise => {
    setModalId(exercise.id);
    setModalName(exercise.name);
    setModalMuscle(exercise.muscle);
    setModalSets(exercise.sets);
    setModalReps(exercise.reps);
    setModalLoad(exercise.load);
    setModalVisible(true);
  };

  const delExercise = exercise => {
    let newExercises = [...exercises];
    newExercises = newExercises.filter(i => i.id !== exercise.id);
    setExercises(newExercises);
  };

  const modalSave = () => {
    let newExercises = [...exercises];

    if (
      modalName === '' ||
      modalMuscle === '' ||
      modalSets === '' ||
      modalReps === '' ||
      modalLoad === ''
    ) {
      alert('Campos obrigatórios não informados!');
      return;
    }

    if (modalId) {
      let idx = newExercises.findIndex(i => i.id === modalId);
      if (idx > -1) {
        newExercises[idx].name = modalName;
        newExercises[idx].muscle = modalMuscle;
        newExercises[idx].sets = modalSets;
        newExercises[idx].reps = modalReps;
        newExercises[idx].load = modalLoad;
      }
    } else {
      let ex = {
        id: uuid(),
        name: modalName,
        muscle: modalMuscle,
        sets: modalSets,
        reps: modalReps,
        load: modalLoad,
      };
      newExercises.push(ex);
    }
    setExercises(newExercises);
    setModalVisible(false);
  };

  const resetModal = () => {
    setModalId('');
    setModalName('');
    setModalMuscle('');
    setModalSets('');
    setModalReps('');
    setModalLoad('');
  };

  const addExercise = () => {
    resetModal();
    setModalVisible(true);
  };

  return (
    <ContainerMyWorkouts>
      <CustomModal
        visible={modalVisible}
        closeAction={() => setModalVisible(false)}>
        <ModalLabel>Músculo de foco</ModalLabel>
        <ModalMuscles horizontal showsHorizontalScrollIndicator={false}>
          <ModalMuscle
            opacity={modalMuscle === 'abs' ? 1 : 0.3}
            onPress={() => setModalMuscle('abs')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/abs.png')}
            />
          </ModalMuscle>
          <ModalMuscle
            opacity={modalMuscle === 'back' ? 1 : 0.3}
            onPress={() => setModalMuscle('back')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/back.png')}
            />
          </ModalMuscle>
          <ModalMuscle
            opacity={modalMuscle === 'biceps' ? 1 : 0.3}
            onPress={() => setModalMuscle('biceps')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/biceps.png')}
            />
          </ModalMuscle>
          <ModalMuscle
            opacity={modalMuscle === 'chest' ? 1 : 0.3}
            onPress={() => setModalMuscle('chest')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/chest.png')}
            />
          </ModalMuscle>
          <ModalMuscle
            opacity={modalMuscle === 'gluteos' ? 1 : 0.3}
            onPress={() => setModalMuscle('gluteos')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/gluteos.png')}
            />
          </ModalMuscle>
          <ModalMuscle
            opacity={modalMuscle === 'legs' ? 1 : 0.3}
            onPress={() => setModalMuscle('legs')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/legs.png')}
            />
          </ModalMuscle>
          <ModalMuscle
            opacity={modalMuscle === 'shoulders' ? 1 : 0.3}
            onPress={() => setModalMuscle('shoulders')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/shoulders.png')}
            />
          </ModalMuscle>
          <ModalMuscle
            opacity={modalMuscle === 'triceps' ? 1 : 0.3}
            onPress={() => setModalMuscle('triceps')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/triceps.png')}
            />
          </ModalMuscle>
        </ModalMuscles>
        <ModalLabel>Nome do exercício</ModalLabel>
        <ModalInput value={modalName} onChangeText={e => setModalName(e)} />

        <ModalExtra>
          <ModalExtraItem>
            <ModalLabel>Séries</ModalLabel>
            <ModalInput
              keyboardType="numeric"
              value={modalSets}
              onChangeText={e => setModalSets(e)}
            />
          </ModalExtraItem>
          <ModalExtraItem>
            <ModalLabel>Repetições</ModalLabel>
            <ModalInput
              keyboardType="numeric"
              value={modalReps}
              onChangeText={e => setModalReps(e)}
            />
          </ModalExtraItem>
          <ModalExtraItem>
            <ModalLabel>Carga (Kg)</ModalLabel>
            <ModalInput
              keyboardType="numeric"
              value={modalLoad}
              onChangeText={e => setModalLoad(e)}
            />
          </ModalExtraItem>
        </ModalExtra>
        <DefaultButton
          bgColor="#4AC34E"
          onPress={modalSave}
          underlayColor="transparent">
          <ButtonText>Salvar</ButtonText>
        </DefaultButton>
      </CustomModal>
      <NameInput
        value={name}
        onChangeText={e => setName(e)}
        placeholder="Nome do treino"
      />
      <ExercisesArea>
        <DefaultButton
          bgColor="#4AC34E"
          underlayColor="transparent"
          onPress={addExercise}>
          <ButtonText>Adicionar Exercício</ButtonText>
        </DefaultButton>
        <ExercisesList
          data={exercises}
          renderItem={({item}) => (
            <ExerciseItemEdit
              data={item}
              delAction={() => delExercise(item)}
              editAction={() => editExercise(item)}
            />
          )}
          keyExtractor={item => item.name}
        />
      </ExercisesArea>
    </ContainerMyWorkouts>
  );
};

Page.navigationOptions = ({navigation}) => {
  let isEditing = navigation.state.params && navigation.state.params.item.id;

  const SaveArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  `;
  const SaveImage = styled.Image`
    width: 25px;
    height: 25px;
  `;

  const SaveWorkoutButton = () => {
    const handleSave = () => {
      if (navigation.state.params && navigation.state.params.item) {
        let workout = navigation.state.params.item;

        if (workout.exercises.length > 0) {
          if (workout.id !== '') {
            navigation.state.params.editWorkout(workout);
          } else {
            workout.id = uuid();
            navigation.state.params.addWorkout(workout);
          }

          navigation.goBack();
        } else {
          alert('Você precisa ter pelo menos um exercício!');
        }
      }
    };

    return (
      <SaveArea onPress={handleSave}>
        <SaveImage source={require('../../assets/check-black.png')} />
      </SaveArea>
    );
  };

  return {
    title: isEditing ? 'Editar Treino' : 'Cadastrar Treino',
    headerRight: <SaveWorkoutButton underlayColor="transparent" />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addWorkout: workout => dispatch({type: 'ADD_WORKOUT', payload: {workout}}),
    editWorkout: workout =>
      dispatch({type: 'EDIT_WORKOUT', payload: {workout}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
