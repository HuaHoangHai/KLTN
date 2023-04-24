import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDMcGxrlV2eOAMrUDhQaM6UccBmu4iSUDE",
  authDomain: "restaurantapp-62b51.firebaseapp.com",
  databaseURL: "https://restaurantapp-62b51-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-62b51",
  storageBucket: "restaurantapp-62b51.appspot.com",
  messagingSenderId: "690104554923",
  appId: "1:690104554923:web:ae4587f337b05e32456eee"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  export{app,firestore,storage}