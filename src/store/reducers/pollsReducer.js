const initState = {
  polls: [],
  poll: null,
  pollsMessage: null,
  submitting: false,
  pollNotFound: false,
  pid: null,
}

// FIX
// issue with clicking one poll, going back and clicking next
// will show the old poll for a brief moment

const pollsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_POLLS':
      return {
        ...state,
        polls: action.payload,
      }
    case 'FETCH_POLL':
      return {
        ...state,
        poll: action.payload,
      }
    case 'FETCH_POLL_NOT_FOUND':
      return {
        ...state,
        pollNotFound: true,
        pollsMessage: action.payload,
      }
    case 'FETCH_POLL_ERR':
      return {
        pollsMessage: action.payload,
        ...state,
      }
    case 'CREATE_POLL':
      return {
        ...state,
        pollsMessage: 'Successfully created!',
        pid: action.payload,
        submitting: false,
      }
    case 'CREATE_POLL_ERR':
      return {
        state,
        pollsMessage: 'Problem creating poll',
        pid: null,
        submitting: false,
      }
    case 'TRY_CREATE_POLL':
      return {
        pollsMessage: 'Submitting...',
        pid: null,
        submitting: true,
      }
    default:
      return state
  }
}

export default pollsReducer