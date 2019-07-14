export const createPoll = poll => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore()
  dispatch({ type: 'TRY_CREATE_POLL' })
  firestore
    .collection('polls')
    .add({
      ...poll,
      createdAt: Date.now(),
      votes: [],
      expireAt: '',
      isPublic: true,
    })
    .then(docRef => {
      const { id } = docRef
      firestore
        .collection('polls')
        .doc(id)
        .update({ pid: id })
      firestore
        .collection('users')
        .doc(poll.createdBy.uid)
        .update({
          pollsCreated: firestore.FieldValue.arrayUnion(id),
        })
      dispatch({ type: 'CREATE_POLL', payload: id })
    })
    .catch(err => {
      dispatch({ type: 'CREATE_POLL_ERR', err })
      console.log('CreatePoll error:', err)
    })
}

export const votePoll = poll => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore()
  // dispatch({ type: 'TRY_VOTE_POLL' })
  const { pid, options, voter } = poll
  const vote = { options, ...voter }
  firestore
    .collection('polls')
    .doc(pid)
    .update({
      votes: firestore.FieldValue.arrayUnion(vote),
    })
    .then(() => {
      firestore
        .collection('users')
        .doc(voter.uid)
        .update({
          pollsVoted: firestore.FieldValue.arrayUnion(pid),
        })
      // dispatch({ type: 'CREATE_POLL', payload: id })
      // dispatch something and redirect
    })
    .catch(err => {
      // dispatch({ type: 'CREATE_POLL_ERR', err })
      console.log('CreatePoll error:', err)
    })
}

export const fetchPoll = id => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore()
  dispatch({ type: 'TRY_FETCH_POLL' })

  firestore
    .collection('polls')
    .doc(id)
    .get()
    .then(doc => {
      if (doc.exists) {
        const poll = doc.data()
        dispatch({ type: 'FETCH_POLL', payload: poll })
      } else {
        dispatch({
          type: 'FETCH_POLL_NOT_FOUND',
          payload: 'ID does not exist',
        })
      }
    })
    .catch(err => {
      dispatch({ type: 'FETCH_POLL_ERR', err })
      console.log('FETCHPOLL error:', err)
    })
}

export const fetchPolls = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore()
  dispatch({ type: 'TRY_FETCH_POLLS' })

  firestore
    .collection('polls')
    .get()
    .then(polls => {
      dispatch({ type: 'FETCH_POLLS', polls })
    })
    .catch(err => {
      // dispatch({ type: 'CREATE_POLL_ERR', err })
      console.log('FETCHPOLLS error:', err)
    })
}

export const triggerError = error => (dispatch, getState) => {
  console.log('action', error)
  dispatch({ type: '', payload: error })
}

export const clearPid = () => dispatch => dispatch({ type: 'CLEAR_PID' })
export const clearPoll = () => dispatch => dispatch({ type: 'CLEAR_POLL' })
