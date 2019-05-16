export const createPoll = poll => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('polls')
      .add({
        ...poll,
        createdBy: 'user',
        createdAt: Date.now(),
        expireAt: '',
        isPublic: true,
      })
      .then(() => {
        dispatch({ type: 'CREATE_POLL', poll })
      })
      .catch(err => {
        dispatch({ type: 'CREATE_POLL_ERR', err })
      })
  }
}
