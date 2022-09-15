import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD76RA8UCxJltfqckyZCaiOPIZTMK8APGQ',
  authDomain: 'react-authentication-d035d.firebaseapp.com',
  projectId: 'react-authentication-d035d',
  storageBucket: 'react-authentication-d035d.appspot.com',
  messagingSenderId: '910714160849',
  appId: '1:910714160849:web:12606fd2be14b93de227f0',
  measurementId: 'G-7NZXT572RX',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
