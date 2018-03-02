import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyC1NTvMKijfs5NPtlVaqUtPFGtFW2hOht0",
    authDomain: "resumebuilder-ba30f.firebaseapp.com",
    databaseURL: "https://resumebuilder-ba30f.firebaseio.com",
    projectId: "resumebuilder-ba30f",
    storageBucket: "resumebuilder-ba30f.appspot.com",
    messagingSenderId: "545274843599"
  };
firebase.initializeApp(config);
export default firebase;