export default function reducer(state = 
  { 
    test: null
  }, action) {
  switch (action.type) {
  case 'TEST': {
    return {...state, test: action.payload};
  }
  }
}