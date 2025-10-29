import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_8BfEmyg1JLD60lG67uRq7e8FSN4aPIk',
  authDomain: 'birthday-app-944d3.firebaseapp.com',
  projectId: 'birthday-app-944d3',
  storageBucket: 'birthday-app-944d3.firebasestorage.app',
  messagingSenderId: '483987326889',
  appId: '1:483987326889:web:7577d61ff68e874c78e6b8'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);