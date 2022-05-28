const initialState = {
  contacts: []
}

const contactReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_CONTACT':
      return{
        ...state,
        contacts: action.payload
      }
    default: 
      return state
  }
}

export default contactReducer