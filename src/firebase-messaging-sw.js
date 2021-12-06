importScripts(
  'https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyDaQAKqb9uED2v-OCRw3vBX6vo5IWVik7o',
  authDomain: 'projectx-c526d.firebaseapp.com',
  projectId: 'projectx-c526d',
  storageBucket: 'projectx-c526d.appspot.com',
  messagingSenderId: '1086873007632',
  appId: '1:1086873007632:web:fff1f9a9022bba0ac0bc95',
});

var messaging = firebase.messaging();
