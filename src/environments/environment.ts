// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostURL:'http://localhost:4200/',
  env_name:'local',
  //Configs for NGX Logger
  serverLoggingUrl: 'http://localhost:8000/logs',
  NODE_SERVER_URL:'http://localhost:3000',
  JSON_SERVER_URL:'http://localhost:8000',
  disableConsoleLogging: false,
  disableloggerplugin:false,
  message:'YOU ARE IN DEVELOPEMENT MODE',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
