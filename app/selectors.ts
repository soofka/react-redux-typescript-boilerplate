const selectIntl = (state) => {
  console.log('intl state', state);
  return state.get('intl').toJS();
};

const selectRouting = (state) => {
  console.log('routing state', state.get('routing'));
  return {
    locationBeforeTransitions: state.getIn(['routing', 'locationBeforeTransitions'])
  };
  //return state.get('routing').toJS();
};

export {
  selectIntl,
  selectRouting
}