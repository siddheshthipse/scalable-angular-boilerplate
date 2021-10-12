export const environment = {
  production: true,
  hostURL:'http://localhost:4200/',
  env_name:'prod',
  //Configs for NGX Logger
  //This URL will be changed for production it can be some remote URL to store the logs
  serverLoggingUrl: 'http://localhost:8000/logs',
  //For production console logging is disabled to keep the console clean
  disableConsoleLogging: true,
  disableloggerplugin:true,
  message:'WE APPRECIATE YOUR CURIOSITY BUT THERES NOTHING TO SEE HERE'
};
