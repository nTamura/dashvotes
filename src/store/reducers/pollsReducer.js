const initState = {
  polls: [],
  poll: null,
  pollsMessage: null,
  submitting: false,
  pollNotFound: false,
  pid: null,
  pollVoted: null,
}

// FIX
// issue with clicking one poll, going back and clicking next
// will show the old poll for a brief moment

const pollsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_POLLS':
      return {
        ...state,
        pollVoted: null,
        polls: action.payload,
      }
    case 'FETCH_POLL':
      return {
        ...state,
        pollVoted: null,
        pollNotFound: false,
        poll: action.payload,
      }
    case 'TRY_FETCH_POLL':
      return {
        ...state,
        pollVoted: null,
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
        ...state,
        pollsMessage: action.payload,
      }

    case 'VOTE_POLL_TRY':
      return {
        ...state,
        pollsMessage: 'Casting vote...',
        pollVoted: null,
      }
    case 'VOTE_POLL_OK':
      return {
        ...state,
        pollsMessage: action.payload,
        pollVoted: true,
      }
    case 'VOTE_POLL_ERR':
      return {
        ...state,
        pollsMessage: action.payload,
        pollVoted: null,
      }

    case 'CREATE_POLL_TRY':
      console.log('create poll try')
      return {
        ...state,
        pollsMessage: 'Submitting...',
        pid: null,
        submitting: true,
      }
    case 'CREATE_POLL_OK':
      return {
        ...state,
        pollsMessage: 'Successfully created!',
        pid: action.payload,
        submitting: false,
      }
    case 'CREATE_POLL_ERR':
      return {
        ...state,
        pollsMessage: action.payload,
        pid: null,
        submitting: false,
      }

    case 'CLEAR_PID':
      return {
        ...state,
        pid: null,
      }
    case 'CLEAR_POLL':
      return {
        ...state,
        pid: null,
        poll: null,
      }

    default:
      return state
  }
}

export default pollsReducer
