import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyDZzIJ3lIPWXgeRTsEkKfDgU0C_Ln6Xaok',
    authDomain: 'docs-next-a40a2.firebaseapp.com',
    projectId: 'docs-next-a40a2',
    storageBucket: 'docs-next-a40a2.appspot.com',
    messagingSenderId: '1061630326196',
    appId: '1:1061630326196:web:2824bb1e51b4ef14046ee1',
    measurementId: 'G-XMBTQXYYK5'
}

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()

export { db }