const reducer = (state, action) => {
  switch(action.type){
    case 'SET_DOT_ACTIVE':
      return {
        ...state,
        home: {
          ...state.home,
          img: [
            ...state.home.img, action.payload
          ]
        }
      }
    default:
      return state;
  }
}

export default reducer;