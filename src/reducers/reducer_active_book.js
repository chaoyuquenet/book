//state argument is not application state,
//only the state this reducer is responsible for
//case BOOK_SELECTED is the only one we care about
//action.payload is the selected book
export default function(state=null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
