import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDTAOmyIAS2I0cFerakD5veniUeq9yR1Tk',
  authDomain: 'learn-dec-2021-money-app.firebaseapp.com',
  projectId: 'learn-dec-2021-money-app',
  storageBucket: 'learn-dec-2021-money-app.appspot.com',
  messagingSenderId: '574430000012',
  appId: '1:574430000012:web:577e58df15a70afedf1ca9',
};

// initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
