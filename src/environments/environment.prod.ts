export const environment = {
  production: true,
  hostURL:'http://localhost:4200/',
  env_name:'prod',
  //Configs for NGX Logger
  //This URL will be changed for production it can be some remote URL to store the logs
  serverLoggingUrl: 'http://localhost:8000/logs',
  NODE_SERVER_URL:'http://localhost:3000',
  JSON_SERVER_URL:'http://localhost:8000',
  //For production console logging is disabled to keep the console clean
  disableConsoleLogging: true,
  disableloggerplugin:true,
  message:'WE APPRECIATE YOUR CURIOSITY BUT THERES NOTHING TO SEE HERE',
  firebase: {
    apiKey: 'AIzaSyDaQAKqb9uED2v-OCRw3vBX6vo5IWVik7o',
    authDomain: 'projectx-c526d.firebaseapp.com',
    projectId: 'projectx-c526d',
    storageBucket: 'projectx-c526d.appspot.com',
    messagingSenderId: '1086873007632',
    appId: '1:1086873007632:web:fff1f9a9022bba0ac0bc95',
    vapidKey: "BIMlUSWeU1_SMYks9O2eoSz6tkWGVg0w-Mq2nXRtrR63INQPHNBfyi0XX2DQXcMP2MWRitlBl3sbcvwXlNO-J5Q"
  }
};
