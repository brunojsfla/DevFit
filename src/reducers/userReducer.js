const initialState = {
  name: '',
  level: '',
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: '',
  dailyProgress: ['2019-09-13', '2019-09-12'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
  }

  return state;
};
