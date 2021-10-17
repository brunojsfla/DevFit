import {connect} from 'react-redux';
import {NavigationActions, StackActions} from 'react-navigation';
const Preload = props => {
  props.navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
    }),
  );

  /*if (!props.name) {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
      }),
    );
  } else {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  }*/
  return null;
};

const mapStatetoProps = state => {
  return {
    name: state.userReducer.name,
  };
};

export default connect(mapStatetoProps)(Preload);
