export default function reducer(state = 
  { 
    test1: null
  }, action) {
  switch (action.type) {
  case 'TEST1': {
    return {...state, test1: action.payload};
  }
  }
}