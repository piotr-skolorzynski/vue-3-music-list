import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBgLovb7mJuMdTlpPej-SNq5YnToBRGkLw",
    authDomain: "vue-3-music-list.firebaseapp.com",
    projectId: "vue-3-music-list",
    storageBucket: "vue-3-music-list.firebasestorage.app",
    messagingSenderId: "869260250095",
    appId: "1:869260250095:web:b06caaf8cce00694abc41a"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };