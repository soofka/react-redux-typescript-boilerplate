const selectIntl = (state) => {
  return state.get('intl').toJS();
};

const selectRouting = (state) => {
  return {
    locationBeforeTransitions: state.getIn(['routing', 'locationBeforeTransitions'])
  };
};

export {
  selectIntl,
  selectRouting
}