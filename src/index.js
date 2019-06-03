import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from 'serviceWorker'
import rootReducer from 'store/reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'config/firebaseConfig'
import 'typeface-quicksand'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      attachAuthIsReady: true,
      useFirestoreForProfile: true,
      userProfile: 'users',
    })
  )
)

window.store = store

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
