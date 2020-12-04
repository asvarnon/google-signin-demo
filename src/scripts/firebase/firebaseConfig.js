import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDntzea5aZZD8CH4fNtucLY1sxb-5C4a1M",
    authDomain: "movie-project-542cc.firebaseapp.com",
    projectId: "movie-project-542cc",
    storageBucket: "movie-project-542cc.appspot.com",
    messagingSenderId: "718028671185",
    appId: "1:718028671185:web:55dba8e16814ab2ec89df0"
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);