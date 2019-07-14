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
    case 'TRY_FETCH_POLL':
      return {
        ...state,
        poll: null,
      }
    case 'FETCH_POLL_NOT_FOUND':
      return {
        ...state,
        poll: null,
        pollNotFound: true,
        pollsMessage: action.payload,
      }
    case 'FETCH_POLL_ERR':
      return {
        pollsMessage: action.payload,
        ...state,
      }

    case 'TRY_VOTE_POLL':
      console.log('try vote poll reducer')
      return {}
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
        pollsMessage: action.payload,
        pid: null,
        submitting: false,
      }
    case 'TRY_CREATE_POLL':
      return {
        pollsMessage: 'Submitting...',
        pid: null,
        submitting: true,
      }
    case 'CLEAR_PID':
      return {
        pid: null,
      }

    case 'CLEAR_POLL':
      return {
        pid: null,
        poll: null,
      }

    default:
      return state
  }
}

export default pollsReducer
