import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDzjEfEmx4JS-BcDZB3LyFhob7-ea8TEFY",
    authDomain: "quizapp-c139e.firebaseapp.com",
    databaseURL: "https://quizapp-c139e.firebaseio.com",
    projectId: "quizapp-c139e",
    storageBucket: "quizapp-c139e.appspot.com",
    messagingSenderId: "680268948583",
    appId: "1:680268948583:web:845804ab510bfdea"
};

firebase.initializeApp(firebaseConfig);

export default firebase;