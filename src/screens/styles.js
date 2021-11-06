import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;
export const ContainerHome = styled.SafeAreaView`
  align-items: center;
`;
export const ContainerName = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;
export const ContainerDias = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
`;
export const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
`;
export const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
export const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
export const BeginConfigArea = styled.View`
  margin-bottom: 50px;
  width: 100%;
`;
export const ButtonText = styled.Text`
  color: #000;
`;
export const HeaderText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const HeaderTextDias = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: center
  margin-bottom: 50px;
`;
export const NameInput = styled.TextInput`
  border: 1px solid #CCC
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;
export const NextButton = styled.Button``;
export const BoldText = styled.Text`
  font-weight: bold;
`;
export const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const LevelArea = styled.View`
  width: 100%;
`;
export const WorkoutList = styled.FlatList`
  width: 100%;
`;
export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Legend = styled.View`
  width: 90%;
  align-items: flex-start;
  margin-top: 30px;
`;
export const LegendText = styled.Text`
  color: #555;
`;
export const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
export const LegendBox = styled.View`
  width: 15px;
  height: 15px;
  background-color: #ccc;
  margin-right: 5px;
`;
export const ContainerMyWorkouts = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;
export const MyWorkoutList = styled.FlatList`
  flex: 1;
  padding: 20px;
`;
export const ExercisesArea = styled.View`
  flex: 1;  
  margin-top: 20px;
  padding-top: 20px
  border-top-width: 1px;
  border-top-color: #ccc;
`;
export const ExercisesList = styled.FlatList`
  flex: 1;
  padding-top: 20px;
`;
export const ModalLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`;
export const ModalMuscles = styled.ScrollView``;
export const ModalInput = styled.TextInput`
  width: 100%;
  height: 40px;
  color: #333;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
export const ModalMuscle = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  opacity: ${props => props.opacity};
`;
export const ModalMuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;
export const ModalExtra = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const ModalExtraItem = styled.View`
  align-items: center;
`;
