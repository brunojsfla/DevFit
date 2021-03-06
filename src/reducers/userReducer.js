const initialState = {
  name: '',
  level: '',
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: '',
  dailyProgress: [],
};

export default (state = initialState, action) => {
  let myWorkouts = [...state.myWorkouts];
  let dailyProgress = [...state.dailyProgress];

  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
    case 'SET_LEVEL':
      return {...state, level: action.payload.level};
    case 'SET_LASTWORKOUT':
      return {...state, lastWorkout: action.payload.id};
    case 'ADD_WORKOUT':
      if (myWorkouts.findIndex(i => i.id === action.payload.workout.id) < 0) {
        myWorkouts.push(action.payload.workout);
      }
      return {...state, myWorkouts};
    case 'EDIT_WORKOUT':
      let idx = myWorkouts.findIndex(i => i.id === action.payload.workout.id);
      if (idx > -1) {
        myWorkouts[idx] = action.payload.workout;
      }
      return {...state, myWorkouts};
    case 'DEL_WORKOUT':
      myWorkouts = myWorkouts.filter(i => {
        return i.id !== action.payload.workout.id;
      });
      return {...state, myWorkouts};
    case 'ADD_PROGRESS':
      if (!dailyProgress.includes(action.payload.date)) {
        dailyProgress.push(action.payload.date);
      }
      return {...state, dailyProgress};
    case 'DEL_PROGRESS':
      dailyProgress = dailyProgress.filter(i => i !== action.payload.date);
      return {...state, dailyProgress};
    case 'RESET':
      return initialState;
  }

  return state;
};
