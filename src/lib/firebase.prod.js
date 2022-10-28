import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBtOx70a0xKACXPq9Zn6xqLMfRGw8P-Fvg",
    authDomain: "netflix-clone-f7204.firebaseapp.com",
    projectId: "netflix-clone-f7204",
    storageBucket: "netflix-clone-f7204.appspot.com",
    messagingSenderId: "1047264313495",
    appId: "1:1047264313495:web:4a78bb77063510129ba9d2"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

//seedDatabase(firebase);

export { firebase };

